import Button from '@/components/Button/Button'
import { ButtonType } from '@/components/Button/Button-types'
import Link from 'next/link'
import React from 'react'

const notFound = async () => {
  return (
    <div className='mx-auto my-20 max-w-lg flex gap-10 flex-col items-center justify-center'>
        <p className='text-4xl font-medium'><span className=' text-primary-accent'>404</span> ERROR</p>
        <p className=' text-secondary-greyDark flex flex-col text-center'> 
            <span>This page was not found</span>
            <span>back to home and start again</span>
        </p>
        <Link href="/">
            <Button props={{type: ButtonType.outlined}}>HOMEPAGE</Button>
        </Link>
    </div>
  )
}

export default notFound