"use client"
import { toastMessage, warnUnsupported } from '@/app/utils/toast'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import React from 'react'

const NewsletterForm = () => {
  return (
    <form className='flex relative items-center w-full grid-cols-1 md:justify-self-end md:w-4/5'>
          <TextInput className='w-full' props={{type:"email", placeholder:"Newsletter email"}}/>
          <button 
            type="button" 
            onClick={()=>warnUnsupported()}
            className='absolute right-1 top-1 md:top-5  xl:top-1 peer-focus:text-primary-accent'>
             
              &rarr;
          </button>
        </form>
  )
}

export default NewsletterForm