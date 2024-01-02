import { getServSession } from '@/app/api/auth/[...nextauth]/route';
import { artificialDatePost } from '@/app/utils/artificialDatePost';
import prisma from '@/app/utils/prisma';
import { Post, TPostStats } from '@/types/Posts';
import { notFound } from 'next/navigation';

export const getPosts = async (page: number = 0,start:number = 10000): Promise<Post[]>=> {
    //this page is revalidated every day since it's external static api 
    //if it was my own api i would revalidate static pages everytime i add new post in it's api handler
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {next: {revalidate:  86400}});
    const posts : Array<Post>= await res.json();
    const postList = posts.slice(start * page , start * page + start);
    postList.map(post=>artificialDatePost(post));
    if(postList.length === 0)
        return notFound();
    return Promise.resolve(postList);
    
}
export const getPostsCount = async () : Promise<number> => {
    const posts = await getPosts();
    return Promise.resolve(posts.length);
}
export const getOnePost = async( id: number)=> {
    const posts = await getPosts();
    const post = posts.filter(v=>v.id === id)
    if(post.length !==1)
        return notFound();
    return Promise.resolve(post[0]);


}
export const getPostStats = async (id : number) => {
    const post = await getOnePost(id);
    const session = await getServSession();
    const comments = await prisma.comments.aggregate({
        _count: {
            postId: true,
        }, where: {
            postId: id
        }
    })
    const likes = await prisma.likes.aggregate({
        _count:{
            postId: true
        },
        where: {
            postId: id
        }
    })
    const isLiked = await prisma.likes.findFirst({
        where:{
            postId: id,
            userId: session?.user.id

        }
    })
    const res : TPostStats = {
        likes: {
            amount: likes._count.postId,
            isLiked:(isLiked)?true:false
        },
        comments: comments._count.postId
    }
    return Promise.resolve(res);
}

    
    
