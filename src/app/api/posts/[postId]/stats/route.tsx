import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/utils/prisma";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getServerSideProps } from "next/dist/build/templates/pages";
import { NextResponse } from "next/server";
export type TPostStats = {
    comments: number,
    likes: {
        isLiked: boolean,
        amount: number
    }
}
export async function GET(req: Request, {params}:{params:{postId:string}}) {
    const {postId} = params;
    const session = await getServerSession(authOpt);
    if(!parseInt(postId) || !postId)
        return NextResponse.json<JSONResponse<string>>({
            status: "success",
            message: "Invalid post id"
    })
    const comments = await prisma.comments.aggregate({
        _count:{
            postId: true
        },
        where: {
            postId: +postId
        }
    })
    const likes = await prisma.likes.aggregate({
        _count:{
            postId: true
        },
        where: {
            postId: +postId
        }
    })
    const isLiked = await prisma.likes.findFirst({
        where:{
            postId: +postId,
            userId: session?.user.id

        }
    })
    return NextResponse.json<JSONResponse<TPostStats>>({
        status:"success",
        message: {
            likes: {
                amount: likes._count.postId,
                isLiked:(isLiked)?true:false
            },
            comments: comments._count.postId
        }
    })
    
}