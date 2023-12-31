"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react'
import { TLinks } from '../LinkPropType';

interface IProps  {
    props: {
      data: TLinks,
    }
}
const HomeNavigationItem : FC<IProps>= ({props}) => {
  const path = usePathname();
  return (
      <Link href={props.data.href} className={`relative  text-center mx-4 min-w-[50px] text-primary-black before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-1 before:w-0 before:bg-primary-accent before:hover:w-full ${(props.data.href.includes(path) && path !== "/" )?"before:w-full":""} before:duration-700 rounded`}>
          {props.data.innerText}   
      </Link>


  )
}

export default HomeNavigationItem