"use client"
import { toastMessage } from "@/app/utils/toast";
import Button from "@/components/Button/Button";
import { ButtonSize, ButtonType } from "@/components/Button/Button-types";
import TextArea from "@/components/Inputs/TextArea/TextArea";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FC, FormEvent, useCallback, useState } from 'react'
interface IProps {
  props: {
    id: number,
  }
}
const BlogPostCommentForm : FC<IProps>= ({props}) => {
  const {status, data} = useSession();
  const [formData, setForm] = useState<string>("");
  const [formError, setError] = useState<string>("");
  const [formLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const submit = useCallback(async (e: FormEvent)=>{
    e.preventDefault();
    setLoading(true);
    setError("");
    const url = `/api/posts/${props.id}/comments`;
    const res = await fetch(url, 
    {

      method: "POST",
      body: JSON.stringify({comment: formData})
      
    });
    if(res.status !== 200)
    {
      const resData : JSONResponse<string> = await res.json();
      setError(resData.message)
    }
    toastMessage("Comment added");
    router.refresh();
    setLoading(false);
  },[props.id, formData, router])
  return (
        <form className='grid grid-cols-5 gap-4 py-4 my-4 relative rounded-lg' onSubmit={submit}>
          {status === "unauthenticated" && 
            <>
              
              <div className=" rounded-md absolute flex items-center justify-center w-full h-full top-0 left-0 bg-secondary-grey opacity-70 bg z-20"/>
              <div className=" flex justify-center items-center flex-col gap-4 z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12">
                <p className=" font-medium text-center z-30">Please, join us and leave your comment</p>
                <Button className=" bg-primary-white" props={{handleClick: ()=>signIn(), type: ButtonType.outlined}}>Sign In</Button>
              </div>
            </>
          }
          {status === "authenticated" && <p className=' col-span-full'>
            Comment as 
            <span className=' font-bold text-primary-accent'>
              {`: ${data.user.name}${(data?.user.provider !== "credentials")?`@${data.user.provider}`:""}`}
            </span>
          </p>}
          <TextArea 
          className='my-6 col-span-full row-span-3 h-full' 
          props={
            {
              handleChange: (e)=>{setForm(e.currentTarget.value)},
              errorMessage: formError,
              placeholder:"Your Comment"
            }}/>
          
          <Button className='h-full col-start-2 col-span-3 w-full block mx-auto' props={{isDisabled: formLoading,"isSubmit":true, "size": ButtonSize.small}}>Comment</Button>
        </form>
  )
}

export default BlogPostCommentForm