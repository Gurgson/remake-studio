import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TLinks } from '../Navigation/LinkPropType';
import NewsletterForm from '../Forms/NewsletterForm/NewsletterForm';
const Footer : FC = () => {
  const internalLinks:  Array<TLinks> = [{
    href: "/contact",
    innerText: "Contact"
  },{
    href: "/privacy",
    innerText: "Terms of Service"
  },{
    href: "/shipping",
    innerText: "shipping and returns"
  }]
  const externalLinks : Array<TLinks> = [
    {
      href: "https://www.linkedin.com/",
      innerText: <FaLinkedinIn/> 
    },
    {
      href: "https://www.facebook.com/",
      innerText: <FaFacebookF/> 
    },
    {
      href: "https://www.instagram.com/",
      innerText: <FaInstagram/> 
    },
    {
      href: "https://twitter.com/",
      innerText: <FaXTwitter/> 
    }, 

  ]
  return (
    <footer className='grid  w-full border-t border-secondary-grey gap-5 justify-center py-5 md:grid-cols-2'>
        <div className='flex gap-10 flex-wrap justify-between grid-cols-1 md'>
          {internalLinks.map((link, index)=>
          <Link  
            href={link.href} 
            key={`footer-link-${index}`} 
            className='uppercase text-base text-secondary-greyDark font-normal'
            > 
              {link.innerText}
          </Link>)}
        </div>

        <NewsletterForm/>

        <p className=' text-center grid-cols-1 md:text-left text-sm'>
          &copy; 2023 Remake Studio. Jakub Stapiński&apos;s Portfolio Website, Visit my <a href='https://github.com/gurgson' target='_blank' className=' text-secondary-greyDark'>@Github</a>
        </p>

        <div className='flex gap-6 items-center grid-cols-1 md:justify-self-end '>
          <span className=' md:hidden '>
            Follow us
          </span>
          <hr className=' md:hidden  border-b-2 border-t-0 w-12'/>
          {externalLinks.map((item, key)=>
          <a 
          key={`footer-external-link-${key}}`} 
          href={item.href}
          target="_blank">
            {item.innerText}
          </a>)}
        </div>

    </footer>
  )
}

export default Footer