import ContactForm from '@/components/Forms/ContactForm/ContactForm'
import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'
import { MdMailOutline, MdLocalPhone, MdHouse } from "react-icons/md";
export const metadata : Metadata = {
  title: `${process.env.WEBSITE_NAME} - Contact Us`,
}
const ContactPage = () => {
  return (
    <>
      <div className=' animate-show max-w-3xl mx-auto flex flex-col justify-center items-center gap-5'>
        <p className=' max-w-lg text-center text-4xl font-bold'>Contact Us</p>
        <p className=' max-w-lg text-center text-base'>Say Hi! and send us your thoughts about our products or share your ideas with our Team!</p>
        <div className='bg-secondary-greyLight p-2 grid my-8 gap-8 md:grid-cols-2 items-center'>
          <Image 
            loading='lazy' 
            className={` md:scale-125 md:-skew-y-3 md:-translate-x-12`} 
            src="/contact.jpg" 
            width={1280}
            height={853} 
            alt='contact image'/>
     
          <div className=' flex flex-col gap-4 text-lg p-4'>
              <h1 className=' text-2xl font-bold text-center'>Contact info</h1>
              <div className=' hover:font-bold flex-nowrap hover:text-primary-accent active:text-primary-accent duration-500  transition-all flex items-center'>
                <MdMailOutline className={` text-3xl`}/>
                <a className='  text-secondary-greyDark text-end grow text-base' href='mailto:remake-studio@placeholder.eu'> remake-studio@placeholder.eu </a>
              </div>
              <div className=' hover:font-bold flex-nowrap hover:text-primary-accent active:text-primary-accent duration-500  transition-all flex items-center'>
                <MdLocalPhone className={` text-3xl`}/>
                <a className=' text-secondary-greyDark text-end grow text-base' href='tel:+48 111 222 333'> +48 111 222 333 </a>
              </div>
              <div className=' hover:font-bold flex-nowrap hover:text-primary-accent active:text-primary-accent duration-500  transition-all   flex items-center'>
                <MdHouse className={` text-3xl`} />
                <a className=' text-secondary-greyDark text-end grow text-base' href='https://maps.app.goo.gl/QvQD9fYB5xoatBSPA'>Cracow, Łagiewniki 555/2</a>
              </div>
              <div className=' hover:font-bold flex-nowrap hover:text-primary-accent active:text-primary-accent duration-500  transition-all  flex items-center'>
                <div className=' font-bold'>NIP:</div>
                <a className=' text-secondary-greyDark text-end grow text-base' href='#'>1234567890</a>
              </div>
          </div>
        </div>
        <p className=' my-8 max-w-lg text-center text-4xl font-bold'>Or Contact Us Directly</p>
        <ContactForm/>
      </div>
    </>
  )
}

export default ContactPage