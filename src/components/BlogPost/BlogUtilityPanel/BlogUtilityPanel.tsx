"use client"
import { toastMessage, toastUnauthorized } from '@/app/utils/toast';
import { TPostStats } from '@/types/Posts';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { FC, MouseEventHandler, useCallback, useState } from 'react'
import { GoComment, GoHeart } from 'react-icons/go'
import { IoIosLink } from "react-icons/io";

interface IProps {
  data: {
    stats: TPostStats,
    postId: number
  }
}
const BlogUtilityPanel : FC<IProps>=  ({data}) => {
  const [likes, setLikesAmount] = useState<number>(data.stats.likes.amount);
  const [likesDisabled, setLikesDisability] = useState<boolean>(false);
  const [isLiked, setIsLikedState] = useState<boolean>(data.stats.likes.isLiked);
  const {status} = useSession();
  const actionLike = useCallback(async (e : React.MouseEvent<HTMLButtonElement>)=>{
    setLikesDisability(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/${data.postId}/likes`,{
      method: "POST"
    })
    if(res.status === 401)
      return toastUnauthorized();
    const body : JSONResponse<string> = await res.json();
    setLikesDisability(true);
    if(body.message === "added")
    {
      setLikesAmount(prev=>prev+1);
      setIsLikedState(true);
    }
    if(body.message === "deleted")
    {
      setLikesAmount(prev=>prev-1);
      setIsLikedState(false);
    }  
    setLikesDisability(false);
  }, [data.postId])
  return (
    <div className=' flex gap-2 items-center '>
      <button 
      className={`${(isLiked && status === "authenticated" )?" text-primary-accent":""} duration-500 z-10 text-lg flex justify-center items-center  gap-2 hover:opacity-70 hover:text-secondary-greyDark  hover:outline-primary-accent`}
      disabled={likesDisabled}
      onClick={actionLike}
      >
        <GoHeart/>
        {
          likes
        }
      </button>
      <Link href={`/post/${data.postId}`}  className=' text-lg flex justify-center items-center  gap-2 hover:opacity-90 hover:text-secondary-greyDark  duration-500'>
          <GoComment/>
          {
            data.stats.comments
          }
    
      </Link>
      <button 
        onClick={(e)=>{
          navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/post/${data.postId}`);
          e.currentTarget.classList.add("text-primary-accent");
          toastMessage("Post link copied to clipboard")
        }}
        className=' duration-500 hover:opacity-70 hover:text-secondary-greyDark flex items-center justify-center text-lg gap-2'>
        <IoIosLink/>
        Share
      </button>
  </div>
  )
}

export default BlogUtilityPanel