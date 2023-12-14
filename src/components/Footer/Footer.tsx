import Link from 'next/link'
import React, { FC, ReactNode } from 'react'
import TextInput from '../Inputs/TextInput/TextInput'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TLinks } from '../Navigation/LinkPropType';

type ExternalLink = {
  href: string,
  icon: ReactNode
}

const Footer : FC = () => {
  const internalLinks:  Array<TLinks> = [{
    href: "/contact",
    innerText: "Contact"
  },{
    href: "/privacy",
    innerText: "Term of Services"
  },{
    href: "/shipping",
    innerText: "shipping and returns"
  }]
  const externalLinks : Array<ExternalLink> = [
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedinIn/> 
    },
    {
      href: "https://www.facebook.com/",
      icon: <FaFacebookF/> 
    },
    {
      href: "https://www.instagram.com/",
      icon: <FaInstagram/> 
    },
    {
      href: "https://twitter.com/",
      icon: <FaXTwitter/> 
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

        <form className='flex relative items-center w-full grid-cols-1 md:justify-self-end md:w-4/5'>
          <TextInput className='w-full' props={{type:"email", placeholder:"Newsletter email"}}/>
          <button 
            type="submit" 
            className='absolute right-1 top-1 md:top-5 peer-focus:text-primary-accent'>
              &rarr;
            </button>
        </form>

        <p className=' text-center grid-cols-1 md:text-left'>
          &copy; 2023 Remake Studio. Terms of use and privacy policy.
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
            {item.icon}
          </a>)}
        </div>

    </footer>
  )
}

export default Footer