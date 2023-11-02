import React from 'react'
import Logo from '../Logo/Logo'
import NavItem from './NavItem'
import { TLinks } from '@/types/Link'

const Navigation = () => {

    const links : Array<TLinks> = [
    {
        href: "/Blog",
        children: "What's New"
    },
    {
        href: "/Videos",
        children: "Our Work"
    },
    {
        href: "/Cast",
        children: "Cast"
    },
    {
        href: "/Pricing",
        children: "Pricing"
    },
]
  return (
    <nav className='flex justify-between items-center'>
        <Logo/>
        <div className='flex'>
            {links.map((link, index)=><NavItem props={link} key={`navigation-item-${index}`}/>)}
        </div>
    </nav>
  )
}

export default Navigation