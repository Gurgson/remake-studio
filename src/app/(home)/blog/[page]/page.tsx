
import { PostResponse } from '@/app/api/posts/route';
import BlogPost from '@/components/BlogPost/BlogPost';
import BlogPostNavigation from '@/components/BlogPostNavigation/BlogPostNavigation';
import { getPosts, getPostsCount } from '@/lib/posts';
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

export async function generateStaticParams() {
  const posts = await getPosts();
  const howManyPages = Math.ceil(posts.length / limit) -1;
  const arr : Array<StaticParams> = [];
  for(let i = 0; i< howManyPages; i++)
  {
    arr.push(
      {
        page: i.toString()
      }
    );
  }
  return arr
}
const BlogPage : FC<IProps> = async ({params}) => {
  const {page} = params;
  const posts = await getPosts(+page, 10);
  const count = await getPostsCount();
  

  return (
    <div className=' container max-w-3xl mx-auto animate-show'>
      
      {
        posts.map((item, key)=> <BlogPost key={`BlogPost-item-${key}`} data={item} props={{canActive: true}}/>)
      }
      
      <BlogPostNavigation props={ { limitPetPage: limit, amount: count, current: page}}/>
    </div>
  )
}

export default BlogPage