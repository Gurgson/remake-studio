import React, { FC } from 'react'
import SlideIn from '../AnimationsFrame/SlideIn/SlideIn'
import Image from 'next/image'
import { title } from 'process'
export type TProjectCard = {
    img: string,
    tag: string,
    title: string,
    date?: Date,
    description?: string

}
interface IProps {
    data: TProjectCard
}
const ProjectCard : FC<IProps>= ({data}) => {
  return (
        <SlideIn>
            <div className='grid peer container peer bg-secondary-greyLight border-b-4 border-b-secondary-greyDark pb-4 hover:translate-y-12 duration-200 max-w-xs'>
                <div className='relative'>
                    <Image src={data.img} width={700} height={900} alt={title} className=' peer-hover:scale-125 transition-all -full h-auto aspect-[9/16] object-cover '/>
                    <div className=' text-center z-10 bottom-0 translate-y-[-50%] left-1/2 translate-x-[-50%] min-w-[75%]  absolute py-2 px-4 bg-primary-white uppercase  tracking-wider font-semibold'>{data.tag}</div>
                    
                </div>
                <div className=' min-h-[300px]  text-center py-8 px-6'>
                    <h1 className=' text-2xl font-bold uppercase tracking-wide'> {data.title} </h1>
                    {data.date && <h2 className=' text-sm text-secondary-greyDark font-semibold'>{data.date.toLocaleDateString()}</h2>}
                    {data.description && 
                    <p>
                        {data.description}
                    </p>}
                </div>
            </div>
        </SlideIn>

  )
}

export default ProjectCard