import { TLinks } from '@/types/Link'
import Link from 'next/link'
import React, { FC } from 'react'


const Footer : FC = () => {
  const links:  Array<TLinks> = [{
    href: "/Contact",
    children: "Contact"
  },{
    href: "/Privacy",
    children: "Term of Services"
  },{
    href: "/Delivery",
    children: "shipping and returns"
  }]
  return (
    <footer className='w-full border-t  border-secondary-grey py-12'>
      <div className='flex justify-between flex-wrap'>
        <div className='flex gap-10 flex-col-reverse lg:flex-row'>
          {links.map((link, index)=><Link  href={link.href} key={`footer-link-${index}`} className='uppercase text-base text-secondary-greyDark font-normal leading-7'> {link.children}</Link>)}
        </div>
        <form className='flex  relative w-80 text-primary-accent'>
        <input type="email" placeholder='Give an email, get newsletter' className=' px-1 py-1 leading-6 outline-primary-accent border-b-primary-accent border-b-2 w-full'/>
          <button type="submit" className='absolute right-1'>&rarr;</button>
        </form>
      </div>
      <div className='flex'>

      </div>
    </footer>
  )
}

export default Footer