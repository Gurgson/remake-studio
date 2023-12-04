
import { Post } from '@/types/Posts'
import { GoComment,GoHeart } from "react-icons/go";
import React, { FC } from 'react'
import Link from 'next/link';
interface IProps {
    data: Post
}
const BlogPost : FC<IProps>= ({data}) => {
  const date = new Date(data.cretedAt);
  return (
    <div className=' w-full p-3 border-2 my-5 rounded-lg cursor-pointer hover:border-primary-accent'>
      <Link href={`/post/${data.id}`} className="grid gap-3">
        <p className=' font-semibold text-2xl uppercase'>{data.title}</p>
        <hr className=' w-3/4 border-b-[1px] mx-auto border-secondary-grey'/>
        <p className=' text-base'>{data.body}</p>
      </Link>
      <div className=' flex gap-2 justify-center items-center'>
        <div className= ' z-10 text-lg flex justify-center items-center  gap-2 hover:opacity-70 hover:text-secondary-greyDark  hover:outline-primary-accent'>
          <GoHeart/>
          78
        </div>
        <div className=' text-lg flex justify-center items-center  gap-2 hover:opacity-90 hover:text-secondary-greyDark  duration-500'>
          <GoComment/>
          200
        </div>
        <div className=' flex-grow text-end text-xs font-bold text-secondary-greyDark'>{date.toLocaleDateString()}</div>
      </div>
    </div>
  )
}

export default BlogPost