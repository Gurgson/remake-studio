import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Logo : FC= () => {
  return (
    <Link href="/" className="flex items-center ">
        <Image src="/logo-black.svg" priority={true} alt='Company logo'  width={100} height={80}/>
    </Link>
  )
}

export default Logo