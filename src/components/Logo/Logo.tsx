import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Logo : FC= () => {
  return (
    <Link href="/" className="flex items-center hover:scale-110 duration-500">
        <Image src="/logo-black.svg" priority={true} alt='Company logo' width={0} height={0} className="w-[100px] h-auto"/>
    </Link>
  )
}

export default Logo