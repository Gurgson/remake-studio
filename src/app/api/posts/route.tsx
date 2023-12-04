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
            "status": "failed",
            message: "Cannot connect tpo external API"
        });
    
    const body : Array<Post>= await posts.json();
    const postList = body.slice(pagination.start * pagination.page, pagination.start * pagination.page + pagination.start);
    const artificialDate = new Date("Thu Nov 20 2023 16:38:34 GMT+0100 (Central European Standard Time)");
    postList.map((item)=>{
        const date = artificialDate.getTime() - 1000 * 60 * 60 * 24 * 20 * item.id;
        return item.cretedAt = new Date(date)
    })
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