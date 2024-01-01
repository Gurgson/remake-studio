import { CommentResponse } from '@/app/api/posts/[postId]/comments/route';
import React, { FC } from 'react'
import Comment from './Comment/Comment';
import BlogPostCommentForm from '@/components/Forms/BlogPostCommentForm/BlogPostCommentForm';
interface IProps {
    data: {
        postId: string
    },
    className?: string
}
const CommentSection : FC<IProps> = async ({data, className}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/${data.postId}/comments`, {cache: "no-cache"});
    const body : JSONResponse<CommentResponse> =  await res.json();
    return (
    <div className=' shadow-md w-full border-2 rounded-lg p-4 bg-secondary-greyLight'>
        <BlogPostCommentForm   props={{id: +data.postId }}/>
        <hr className='mx-auto w-4/5 my-4  border-b-2 border-b-secondary-grey'/>
        {
           body.message.amount === 0 && <p className=' my-4 text-xs text-center text-secondary-greyDark font-bold'>There are currently no comments for this post</p>
        }
        {
            body.message.comments.map((item, key)=><Comment props={{data:item}} key={`post-comment-${key}`} />)
        }
        
    </div>
  )
}

export default CommentSection