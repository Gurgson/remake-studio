import { getServerSession } from "next-auth";
import { params } from "../comments/route";
import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/prisma";


export async function POST(req:Request, {params}:params) {
    const session = await getServerSession(authOpt);
    if(!session)
        return NextResponse.json<JSONResponse<string>>({
            message: "Not Authorized",
            status: "failed"
        }, {status:401})
    const {postId} = params;
    if(!parseInt(postId) || !postId)
        return NextResponse.json<JSONResponse<string>>({
            message: "Post Id is invalid",
            status: "failed"
        }, {status:400})
   
    const res = await prisma.likes.findFirst({
        where:{
            userId: session.user.id,
            postId: +postId
        }
    })

    if(!res)
    {
        await prisma.likes.create({
            data: {
                postId: +postId,
                userId: session.user.id
            }
        })
    } else {
        await prisma.likes.delete({
            where:{
            id: res.id
        },
        
    })
    }
    return NextResponse.json<JSONResponse<string>>({
        message: (res)?"deleted":"added",
        status: "success"
    }, {status:200})

    
}
