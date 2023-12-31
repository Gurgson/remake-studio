import { NextResponse } from "next/server"
import { getServSession } from "../../auth/[...nextauth]/route"
import prisma from "@/app/utils/prisma"

export type NewUsernameData = {
    newUsername: string
}
export async function POST(req: Request) {
    let err : NewUsernameData = {
        newUsername: ""
    }
    const session = await getServSession();

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
    const body: NewUsernameData = await req.json();
    if(!body.newUsername)
        err.newUsername = "Username empty"
    if(body.newUsername.length <5)
        err.newUsername = "Username too short"
    if(Object.values(err).some((v)=>v))
        return NextResponse.json<JSONResponse<NewUsernameData>>(
        {
            status: "success",
            message:err
        },{
            status: 400
        })
    await prisma.userOptions.update({
        where: {
            userId: session.user.id,
        },
        data: {
            displayedName: body.newUsername
        }
    }) 
    return NextResponse.json<JSONResponse<string>>({
        status: "success",
        message: "Displayed name changed"
    }, {
        status: 201

    })
}