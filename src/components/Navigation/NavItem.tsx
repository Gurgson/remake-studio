

import { TLinks } from '@/types/Link';
import Link from 'next/link';
import React, { FC } from 'react'

interface IProps  {
    props: TLinks
}
const NavItem : FC<IProps>= ({props}) => {
  return (
    <Link href={props.href} className="relative text-center mx-8 text-primary-black before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-1 before:w-0 before:bg-primary-accent before:hover:w-full before:duration-700 rounded">
        {props.children}   
    </Link>
  )
}

export default NavItem