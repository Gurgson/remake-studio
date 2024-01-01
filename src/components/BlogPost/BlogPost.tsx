import { Post, TPostStats } from '@/types/Posts'
import { GoComment,GoHeart } from "react-icons/go";
import React, { FC, ReactNode } from 'react'
import Link from 'next/link';
import BlogUtilityPanel from './BlogUtilityPanel/BlogUtilityPanel';
import { getPostStats } from '@/lib/posts';
interface IProps {
    data: Post,
    props?: {
      canActive?: boolean
    },
    className?: string,

}
const BlogPost : FC<IProps>= async ({data, className, props}) => {
  const stats : TPostStats = await getPostStats(data.id);
  const date = new Date(data.createdAt);
  return (
    <div className={` duration-300 transition-all shadow-md bg-secondary-greyLight w-full p-3 border-2 my-5 gap-4 rounded-lg ${(props?.canActive)?"${ hover:border-primary-accent cursor-default":"cursor-pointer"} ${className}`}>
      <div className=' flex-grow text-end text-xs font-bold text-secondary-greyDark'>{date.toLocaleDateString()}</div>
      <Link href={`/post/${data.id}`} className="grid gap-3">
        <p className=' font-semibold text-2xl uppercase'>{data.title}</p>
        <hr className=' w-3/4 border-b-[1px] mx-auto border-secondary-grey'/>
        <p className=' text-base'>{data.body}</p>
      </Link>
      <BlogUtilityPanel data={{stats: stats, postId: data.id }}/>
    </div>
  )
}

export default BlogPost