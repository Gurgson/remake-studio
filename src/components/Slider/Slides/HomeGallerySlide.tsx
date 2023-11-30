
import Image from 'next/image'
import React, { FC } from 'react'
import Button from '../../Button/Button'
import { ButtonType } from '@/enums/Button'
import {  HomeGallerySlideProps } from '@/types/HomeGallerySlide'
interface IProps{
    props: HomeGallerySlideProps
}
const HomeGallerySlide : FC<IProps>= ({props}) => {
  return (
    <div className="rounded-2xl min-w-full relative text-primary-white overflow-hidden before:content-[''] before:absolute before:w-full before:h-full via-primary-black before:bg-gradient-to-br from-primary-black to-secondary-greyDark before:opacity-60 z-10">
        <p className='opacity-90 absolute left-20 top-[30%] text-4xl font-medium'>{props.title} </p>
        {props.description && <p className='opacity-50 absolute left-20 top-[40%] max-w-[40%] font-normal'> {props.description} </p>}
        {props.button && <Button  props={{
          type: ButtonType.outlined,
          handleClick: props.button.handleClick,
        }}>{props.button.buttonText}</Button>}
        <Image src={props.image} alt={props.title} width={1248} height={646} className="aspect-video object-fill w-full" />
    </div>
  )
}

export default HomeGallerySlide