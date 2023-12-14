"use client"
import React, { FC } from 'react'
import { TLinks } from '../LinkPropType'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
interface IProps {
    data :TLinks
}
const AccNavigationItem : FC<IProps>= ({data}) => {
    const path = usePathname();
  return (
    <Link href={data.href} className={`capitalize  font-bold py-2 ${(path === data.href)?"text-primary-black":"text-secondary-greyDark hover:text-primary-accent"} `}>
        {data.innerText}
    </Link>
  )
}

export default AccNavigationItem