import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/utils/prisma";
import {  Comments, User } from "@prisma/client";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
export type TComment = {
    comment: string
}
export type CommentResponse = {
    amount: number,
    comments: Array<Comments & {user: User}>
}
export type params ={
    params: {
        postId: string
    }
}
export async function GET(req: NextRequest, {params}: params){
    const {postId} = params;

    
    if(!postId || !parseInt(postId)) 
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "PostId missing"
        })
    
    const comments = await prisma.comments.findMany({
        where: {
            postId: +postId
        }, 
        include: {
            user: true
        },
        orderBy: {
            createdAt: "desc"
        }, 
        // skip: pagination.page * pagination.start,
        // take: pagination.start

        
    })
    return NextResponse.json<JSONResponse<CommentResponse>>({
        status: "success",
        message: {
            amount: comments.length,
            comments: comments
        }
    });
}
export async function POST(req: Request, {params}: params){
    const session = await getServerSession(authOpt);
    if(!session)
        return NextResponse.json<JSONResponse<string>>({
            message: "Not Authorized",
            status: "failed"
        }, {status:401})
    const {postId} = params;
    const data = await req.json();
    const {comment} : TComment = data;
    if(!comment){
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "You cannot post empty comment"
        },{status: 400}); 
    }
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
    const res = await prisma.comments.create({data: {
        postId: +postId,
        contents: comment,
        userId: user.id
       
    }, 
    })
    return NextResponse.json<JSONResponse<string>>({
        status: "success",
        message: "Comment added"
    });
}
