
import BlogPost from '@/components/BlogPost/BlogPost'
import CommentSection from '@/components/BlogPost/CommentSection/CommentSection'
import { getOnePost } from '@/lib/posts'
import { Post } from '@/types/Posts'
import React, { FC } from 'react'
interface IParams {
    params: {
        postId: string
    }
}
const PostDetails : FC<IParams> = async ({params}) => {

  const {postId} = params
  const post = await getOnePost(+postId);
  return (
    
      <div className=' container mx-auto max-w-3xl py-2'>
        <BlogPost className="" data={post}/>
        <CommentSection className='w-full p-3 border-2 my-5 gap-4 rounded-lg' data={{postId: postId}}/>
      </div>

  )
}

export default PostDetails