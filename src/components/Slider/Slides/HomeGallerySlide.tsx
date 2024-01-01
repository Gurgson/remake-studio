
import Image from 'next/image'
import React, { FC } from 'react'
import Button from '../../Button/Button'
import {  HomeGallerySlideProps } from '@/types/HomeGallerySlide'
import { ButtonSize, ButtonType } from '@/components/Button/Button-types'
import Link from 'next/link'
interface IProps{
    props: HomeGallerySlideProps
}
const HomeGallerySlide : FC<IProps>= ({props}) => {
  return (
    <div className=" rounded-2xl min-w-full relative text-primary-white overflow-hidden before:content-[''] before:absolute before:w-full before:h-full via-primary-black before:bg-gradient-to-br from-primary-black to-secondary-greyDark before:opacity-60 z-10">
        <div className='w-full flex flex-col justify-center items-center gap-4 sm:gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <p className='max-w-[80%] sm:max-w-[60%] text-2xl lg:text-4xl md:text-xl font-bold text-center text-opacity-60'>{props.title} </p>
          {props.button && 
          <Link href={props.button.link}>
            <Button className=' sm:text-lg lg:text-2xl py-2 px-2' props={{size: ButtonSize.small, type: ButtonType.outlined}}>
              {
                props.button.children
              }
            </Button>
          </Link>
          }
        </div>
        <Image src={props.image} alt={props.title} width={1248} height={646} className=" min-h-[360px] aspect-video object-cover w-full" />
    </div>
  )
}

export default HomeGallerySlide