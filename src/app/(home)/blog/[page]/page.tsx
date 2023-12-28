
import { PostResponse } from '@/app/api/posts/route';
import BlogPost from '@/components/BlogPost/BlogPost';
import BlogPostNavigation from '@/components/BlogPostNavigation/BlogPostNavigation';
import { Post } from '@/types/Posts';
import { notFound } from 'next/navigation';
import React, { FC } from 'react'

interface IProps{
  params: {
    page:string
  }
}
const limit = 10;
type StaticParams = {
  page: string
}

// export async function generateStaticParams() {
//   const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const body : Array<unknown> = await posts.json();
//   const howManyPages = Math.ceil(body.length / limit) -1;
//   const arr : Array<StaticParams> = [];
//   for(let i = 0; i< howManyPages; i++)
//   {
//     arr.push(
//       {
//         page: i.toString()
//       }
//     );
//   }
//   return arr
// }
const BlogPage : FC<IProps> = async ({params}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts?page=${params.page}`, 
  {next: {
    revalidate: 60
  }})
  const body : JSONResponse<PostResponse>= await res.json();
  if(body.message.posts.length === 0)
    return notFound();
  return (
    <div className=' container max-w-3xl mx-auto animate-show'>
      
      {
        body.message.posts.map((item, key)=> <BlogPost key={`BlogPost-item-${key}`} data={item} props={{canActive: true}}/>)
      }
      
      <BlogPostNavigation props={ { limitPetPage: limit, amount: body.message.amount || 0, current: params.page}}/>
    </div>
  )
}

export default BlogPage