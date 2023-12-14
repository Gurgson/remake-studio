import { artificialDatePost } from "@/app/utils/artificialDatePost";
import { Post } from "@/types/Posts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params:{postId: string}}){
    
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {next: {revalidate:  60}});
    if(post.status !==200)
        return NextResponse.json<JSONResponse<string>>({
            "status": "failed",
            message: "Cannot connect to external API"
        });
    
    const body : Post = await post.json();
    artificialDatePost(body);
    return NextResponse.json<JSONResponse<Post>>({
        status:"success",
        message: body
    });
}