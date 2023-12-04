import Link from 'next/link'
import React, { FC } from 'react'
import Button from '../Button/Button'
import { ButtonType } from '@/enums/Button'

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
        const link = <Link className={`${(i === current)?" text-primary-accent font-bold border-primary-accent scale-125":"border-secondary-greyDark"} hover:scale-110 duration-700 border-2  py-1 px-3 rounded text-xs `}  key={`blog-nav-link-${i}`} href={`/blog/${i}`}>{i}</Link>
        paginationItems.push(link);
    }
  return (
    <div className='flex mx-auto justify-center items-center gap-2 my-20'>
        <Link href="/blog/0">
            <Button props={{type: ButtonType.outlined, isSmall: true}}>First</Button>
        </Link>
        {current>3 && <div className=' hover:scale-110 duration-700 border-2 border-secondary-greyDark py-1 px-3 rounded text-xs'>...</div>}
        {
            paginationItems
        }
        {current<howManyPages - 2 && <div className=' hover:scale-110 duration-700 border-2 border-secondary-greyDark py-1 px-3 rounded text-xs'>...</div>}
        <Link href={`/blog/${howManyPages}`}>
            <Button props={{type: ButtonType.outlined, isSmall: true}}>Last</Button>
        </Link>
    </div>
  )
}

export default BlogPostNavigation