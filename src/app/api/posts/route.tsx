import { artificialDatePost } from "@/app/utils/artificialDatePost";
import { Post } from "@/types/Posts";
import { NextRequest, NextResponse } from "next/server";
export type PostResponse =  {
    amount: number,
    posts: Array<Post>
}
export async function GET(req: NextRequest){
    const params = req.nextUrl.searchParams;
    const start =params.get("start")
    const page = params.get("page")
    const pagination = {
        start: 10,
        page: 0
    }
    pagination.start = start ? parseInt(start, 10) || pagination.start : pagination.start;
    pagination.page = page ? parseInt(page, 10) || pagination.page : pagination.page;

   

    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`, {next: {revalidate:  60}});
    if(posts.status !==200)
        return NextResponse.json<JSONResponse<string>>({
            status: "failed",
            message: "Cannot connect tpo external API"
        });
    
    const body : Array<Post>= await posts.json();
    const postList = body.slice(pagination.start * pagination.page, pagination.start * pagination.page + pagination.start);
    postList.map(item=>artificialDatePost(item));
    return NextResponse.json<JSONResponse<PostResponse>>(
        {
            status:"success",
            message : {
                amount: body.length,
                posts: postList
            }       
        }
    )
}