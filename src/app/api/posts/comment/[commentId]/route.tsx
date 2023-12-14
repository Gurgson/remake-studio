import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { TComment } from "../../[postId]/comments/route";
import prisma from "@/app/utils/prisma";

interface params {
    params: {
        commentId: string
    }
}
export async function DELETE(req: Request, {params}: params) {
    const session = await getServerSession(authOpt);
    if(!session)
        return NextResponse.json<JSONResponse<string>>({
            message: "Not Authorized",
            status: "failed"
        }, {status:401})
    const { commentId} = params;
    
    if(!commentId) 
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "PostId missing"
        })
    const user = await prisma.user.findFirst({
        where: {
            id: session.user.id,
            provider: session.user.provider
        }
    })
    if(!user){
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "Authorization failed"
        },{status: 401});    
    }
    
    const res = await prisma.comments.delete({where:{
        id: commentId
    }
    })
    return NextResponse.json<JSONResponse<string>>({
        status: "success",
        message: "Comment deleted"
    }, {
        status: 200
    });
}
export async function PATCH(req: Request, {params}:params) {
    const session = await getServerSession(authOpt);
    if(!session)
        return NextResponse.json<JSONResponse<string>>({
            message: "Not Authorized",
            status: "failed"
        }, {status:401})
    const { commentId} = params;

    if(!commentId) 
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "CommentId missing"
        })
    const user = await prisma.user.findFirst({
        where: {
            id: session.user.id,
            provider: session.user.provider
        }
    })
    if(!user){
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "Authorization failed"
        },{status: 401});    
    }   
    const data : TComment = await req.json();
    if(!data.comment || data.comment.length === 0)
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "Comment Empty"
        },{status: 400});    
    console.log(data.comment);
    const res = await prisma.comments.update({
        where:{
            id: commentId
        },
        data: {
            contents: data.comment
        }
    })
    console.log(res);
    if(!res)
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "Comment Id not valid"
        },{status: 400});  
    return NextResponse.json<JSONResponse<string>>({
        status: "success",
        message: "Comment modified"
    },{status: 201});  

}