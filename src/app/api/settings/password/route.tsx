import { NextResponse } from "next/server"
import { getServSession } from "../../auth/[...nextauth]/route"
import prisma from "@/app/utils/prisma"
import bcrypt from "bcrypt"

export type ResetPasswordData = {
    currentPassword: string
    newPassword: string
    repeatNewPassword: string
}
export async function POST(req: Request) {
    let err : ResetPasswordData = {
        currentPassword: "",
        newPassword:  "",
        repeatNewPassword:  ""
    }
    const session = await getServSession()
    if(!session || session.user.provider !== "credentials")
        return NextResponse.json<JSONResponse<string>>({
            message: "Not Authorized",
            status: "failed"
        }, {status:401})
    const res = await prisma.userOptions.findFirst({
        where:{
            userId: session.user.id
        }
    })
    if(res?.userId !== session.user.id)
        return NextResponse.json<JSONResponse<string>>({
            message: "Not Authorized",
            status: "failed"
        }, {status:401})
    const body: ResetPasswordData = await req.json();
    const compareRes = await bcrypt.compare(body.currentPassword, res?.hashedPassword as string);
    
    if(!compareRes)
        err.currentPassword ="Invalid password";
    if(body.newPassword !== body.repeatNewPassword)
        err.newPassword = "Password doesn't match"
    if(!body.newPassword)
        err.newPassword = "New password field is empty"
    if(!body.currentPassword)
        err.currentPassword = "Password field  is empty"
    if(!body.repeatNewPassword)
        err.repeatNewPassword = "New password reapeat field is empty"
    if(Object.values(err).some((v)=>v))
        return NextResponse.json<JSONResponse<ResetPasswordData>>(
        {
            status: "success",
            message:err
        },{
            status: 400
        })
    const newPass = await bcrypt.hash(body.newPassword, 12)
    await prisma.userOptions.update({
        where: {
            userId: session.user.id,
        },
        data: {
            hashedPassword: newPass
        }
    }) 
    return NextResponse.json<JSONResponse<string>>({
        status: "success",
        message: "Password changed"
    }, {
        status: 201

    })
}