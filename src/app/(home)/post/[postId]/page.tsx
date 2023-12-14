import { authOpt } from '@/app/api/auth/[...nextauth]/route'
import BlogPost from '@/components/BlogPost/BlogPost'
import CommentSection from '@/components/BlogPost/CommentSection/CommentSection'
import BlogPostCommentForm from '@/components/Forms/BlogPostCommentForm/BlogPostCommentForm'
import { Post } from '@/types/Posts'
import { getServerSession } from 'next-auth'
import React, { FC } from 'react'
interface IParams {
    params: {
        postId: string
    }
}
const PostDetails : FC<IParams> = async ({params}) => {

  const {postId} = params
  const post = await fetch(`http://localhost:3000/api/posts/${postId}`);
  const postBody : JSONResponse<Post>= await post.json();  
  return (
    
      <div className=' container mx-auto max-w-3xl py-2'>
        <BlogPost className="" data={postBody.message}/>
        <CommentSection className='w-full p-3 border-2 my-5 gap-4 rounded-lg' data={{postId: postId}}/>
      </div>

  )
}

export default PostDetails