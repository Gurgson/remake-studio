import { getServSession } from '@/app/api/auth/[...nextauth]/route';
import { CommentResponse } from '@/app/api/posts/[postId]/comments/route';
import BlogPost from '@/components/BlogPost/BlogPost';
import Comment from '@/components/BlogPost/CommentSection/Comment/Comment';
import { getCommentsHitory } from '@/lib/settings';
import { Post } from '@/types/Posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

const CommentsHistory = async () => {
  
  const comments = await getCommentsHitory();
  return (
    <section>
      {
        (comments.length === 0)
        ?
        <p>You have not commented anynthing yet</p>
        :
          comments.map((item, index)=><Link key={`comment-history-${index}`} href={`/post/${item.postId}/?share=${item.id}`}>
            <Comment key={`comment-history-${index}`} props={{data:item}}/>
          </Link>)
      }
    
    </section>
  )
}

export default CommentsHistory