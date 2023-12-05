import Link from 'next/link'
import React, { FC } from 'react'
import Button from '../Button/Button'

import { ButtonSize, ButtonType } from '../Button/Button-types'

interface IProps {
    props : {
        amount: number,
        current: string,
        limitPetPage: number,
    }
}

const BlogPostNavigation : FC<IProps>= ({props}) => {
    const howManyPages = Math.ceil(props.amount / props.limitPetPage) -1;
    const current = +props.current || 0;
    let paginationItems = [];
    for(let i = current - 3; i <= current + 3; i++)
    {
        if(i < 0 || i > howManyPages)
            continue;
        const link = <Link className={`${(i === current)?" mx-1 text-primary-accent font-bold border-primary-accent scale-125":"border-secondary-greyDark"} hover:scale-110 duration-700 border-2  py-1 px-3 rounded text-xs `}  key={`blog-nav-link-${i}`} href={`/blog/${i}`}>{i}</Link>
        paginationItems.push(link);
    }
  return (
    <div className='flex mx-auto justify-center sm:flex-row flex-col items-center gap-2 my-20'>
        <Link href="/blog/0">
            <Button props={{type: ButtonType.outlined, size: ButtonSize.small}}>First</Button>
        </Link>
        <div className='flex'>
        {current>3 && <div className=' mx-1 hover:scale-110 duration-700 border-2 border-secondary-greyDark py-1 px-3 rounded text-xs'>...</div>}
        {
            paginationItems
        }
        {current<howManyPages - 2 && <div className=' mx-1 hover:scale-110 duration-700 border-2 border-secondary-greyDark py-1 px-3 rounded text-xs'>...</div>}
        
        </div>
        <Link href={`/blog/${howManyPages}`}>
            <Button props={{type: ButtonType.outlined, size: ButtonSize.small}}>Last</Button>
        </Link>
    </div>
  )
}

export default BlogPostNavigation