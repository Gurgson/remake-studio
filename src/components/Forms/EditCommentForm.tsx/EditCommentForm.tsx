"use client"
import { TComment } from '@/app/api/posts/[postId]/comments/route'
import { toastMessage } from '@/app/utils/toast'
import Button from '@/components/Button/Button'
import { ButtonSize, ButtonType } from '@/components/Button/Button-types'
import TextArea from '@/components/Inputs/TextArea/TextArea'
import { useRouter } from 'next/navigation'
import React, { FC, FormEvent, useCallback, useState } from 'react'
import { toast } from 'react-toastify'

interface IProps {
    data: {
        commentId: string
    },
    props: {
        cancelForm: Function  
    },
    children: string
}
const EditCommentForm : FC<IProps>= ({data, props,children}) => {
    const [formData, setFormData] = useState<string>(children);
    const [err, setErr] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const onSubmit = useCallback(async(e:FormEvent)=>{
        e.preventDefault();
        setLoading(true);
        const uplData : TComment = {
            comment: formData
        }
        const res = await  fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/comment/${data.commentId}`,
        {
            method: "PATCH",
            body: JSON.stringify(uplData)
        })
        const body  = await res.json();
        if(res.status.toString().startsWith("4"))
            setErr(body.message);
        if(res.status === 201)
            {
                await router.refresh();
                props.cancelForm();
            }
        setLoading(false);
        toastMessage("Post edited")
    },[formData, data.commentId, router, props])
    return (
    <form className='grid' onSubmit={onSubmit}>
        <TextArea props={{errorMessage: err, handleChange: (e)=>setFormData(e.currentTarget.value)}}>
            {
                children
            }
        </TextArea>
        <div className='flex gap-3 '>
            <Button props={{isSubmit:true, isDisabled:loading, size: ButtonSize.small }}>Apply</Button>
            <Button props={{ handleClick: ()=>props.cancelForm() ,size: ButtonSize.small, type: ButtonType.outlined }}>Cancel</Button>
        </div>
    </form>
  )
}

export default EditCommentForm