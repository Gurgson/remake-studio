
import BlogPost from '@/components/BlogPost/BlogPost';
import { getLikedPosts } from '@/lib/settings';
import Link from 'next/link';
import React from 'react'

const LikesHistory = async () => {
  const likedPosts = await getLikedPosts();

  return (
    <section>
      {
      (likedPosts.length ===0 )
      ?
        <p>You have not liked any posts yet </p>
      :
      likedPosts.map((post, index)=><Link key={`liked-posts-${index}`} href={`/post/${post.id}}`}>
        <BlogPost key={`likedPost-${index}`} data={post}/>
      </Link>)
      }
    </section>
  )
}

export default LikesHistory