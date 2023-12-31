import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/utils/prisma";
import {  Comments, User, UserOptions } from "@prisma/client";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
export type TComment = {
    comment: string
}
export type PrismaCommentData= {
    user: {
        username: string;
        provider: string;
        options: {
            displayedName: string | null;
        } | null;
    }
} & {
    id: string;
    userId: string;
    postId: number;
    contents: string;
    createdAt: Date;
}
export type CommentResponse = {
    amount: number,
    comments: Array<PrismaCommentData>
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
            user: {
                select: {
                    username: true,
                    provider: true,
                    options: {
                        select: {
                            displayedName: true
                        }
                    }
                
                }
            }
            
        },
        orderBy: {
            createdAt: "desc"
        }, 

    
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
