import { getServSession } from "@/app/api/auth/[...nextauth]/route";
import { PrismaCommentData } from "@/app/api/posts/[postId]/comments/route";
import prisma from "@/app/utils/prisma";
import { Post } from "@/types/Posts";
import { Comments } from "@prisma/client";
import { notFound } from "next/navigation";
import { getPosts } from "./posts";

export const getCommentsHitory =  async () : Promise<PrismaCommentData[]>=>{
    const session = await getServSession();
    if(!session)
        return notFound();
    const comments = await prisma.comments.findMany({
        where: {
            userId: session.user.id,
        },
        include:{
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
            }
        
    })   
    return Promise.resolve(comments);
}


export const getLikedPosts =async () : Promise<Post[]> => {
    const session = await getServSession();
    if(!session)
        return notFound();
    const likedPostsIds = await prisma.likes.findMany({
            select: {
                postId: true
            },
            where:{
                userId: session.user.id
            }
        })
    const posts = await getPosts();
    const likedPosts = posts.filter(post=> likedPostsIds.some(likedPosts=>likedPosts.postId === post.id))
    return Promise.resolve(likedPosts);
}
    