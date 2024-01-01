"use client"
import { PrismaCommentData } from '@/app/api/posts/[postId]/comments/route';
import { formatRelativeDate } from '@/app/utils/formatRelativeDate';
import { toastMessage } from '@/app/utils/toast';
import EditCommentForm from '@/components/Forms/EditCommentForm.tsx/EditCommentForm';
import { useSession } from 'next-auth/react';
import {  useSearchParams } from 'next/navigation';
import React, { FC, useEffect, useRef, useState } from 'react'

interface IProps {
    props: {
        data: PrismaCommentData
    }
}
const Comment : FC<IProps> =  ({props}) => {
    const date = new Date(props.data.createdAt);
    const share = useSearchParams().get("share");
    const [editingMode, setEditingMode] = useState<boolean>(false); 
    const [deteleMode, setDeletingMode] = useState<boolean>(false); 
    const [isClicked, setClickState] = useState<boolean>(false); 

    const { data } = useSession();
    useEffect(()=>{
        if(share === props.data.id)
            ref.current?.scrollIntoView({});
    },[props.data.id, share])
    const ref = useRef<HTMLDivElement>(null)


    return (
    <div ref={ref} onClick={()=>setClickState(true)} className={` rounded-xl px-4 py-2 gap-2 grid my-2 duration-500 ${(share === props.data.id && !isClicked)?" border-2 border-primary-accent bg-secondary-grey transition-all":""}`}>
        {/* bar with username and createdAt field */}
        <div className={` flex justify-between items-center duration-500`}>
            <div className=' text-primary-accent text-lg'>{`${props.data.user.options?.displayedName || props.data.user.username}${(props.data.user.provider !== "credentials")?`@${props.data.user.provider}`:""}`}</div>
            <div className=' text-secondary-greyDark text-sm'>{formatRelativeDate(date)}</div>
        </div>
        {/* viewmode */}
        {!editingMode && <div className='ml-4 relative'>
            <hr className=' absolute h-full  mx-auto border-r-2 -left-2'/>
            {props.data.contents}
        </div>}
        {/* edit mode*/}
        {editingMode && 
            <EditCommentForm 
                data={{commentId: props.data.id}} 
                props={{cancelForm:()=>setEditingMode(false)}}>
                    {props.data.contents}
            </EditCommentForm>}
        {/* utility bar under comment*/}
        <div className=' opacity-70 my-2 flex gap-3 uppercase text-secondary-greyDark  text-opacity-80 font-semibold'>
            {/* copy  to clipboard functionality*/}
            <button onClick={
                (e)=>{
                    navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/post/${props.data.postId}?share=${props.data.id}`);
                    e.currentTarget.classList.add("text-primary-accent");
                    toastMessage("Comment link coppied to clipboard");
                }
                }
                className={` cursor-pointer hover:text-primary-accent flex justify-center min-w-[3.5rem] `}>
                SHARE
            </button>
            {/* button which enables editing mode  */}
            {
                data?.user.id === props.data.userId &&
                <button onClick={()=>setEditingMode(true)} className={`${(editingMode)?"text-primary-accent":""} cursor-pointer hover:text-primary-accent flex justify-center min-w-[3.5rem]`}>
                    EDIT
                </button>
            }
            {/* button which enables deleting mode*/}
            {
                data?.user.id === props.data.userId &&
                <div className='cursor-pointer gap-2 flex justify-center min-w-[3.5rem]'>
                    {
                        (deteleMode)?
                        <>
                            <button className='hover:text-primary-accent uppercase' onClick={
                                async()=>{
                                    const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/comment/${props.data.id}`, {
                                        method: "DELETE"
                                    })
                                    
                                    if(res.status === 200)
                                    {
                                        ref.current?.classList.add("origin-bottom");
                                        ref.current?.classList.add("animate-hideTo0");
                                        toastMessage("Post deleted")
                                        setTimeout(()=>{  
                                            ref.current?.classList.add("hidden");

                                        },1000)
                                        
                                    }
                                }
                            } >Yes</button>
                            /
                            <button className='hover:text-primary-accent uppercase' onClick={()=>setDeletingMode(false)}>No</button>
                        </>:<button className='hover:text-primary-accent uppercase' onClick={()=>setDeletingMode(true)}>DELETE</button>
                    }
                </div>
            }  
        </div>
    </div>
  )
}

export default Comment