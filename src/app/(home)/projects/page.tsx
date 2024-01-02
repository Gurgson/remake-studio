import SlideIn from '@/components/AnimationsFrame/SlideIn/SlideIn'
import ProjectCard, { TProjectCard } from '@/components/ProjectCard/ProjectCard'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata : Metadata = {
  title: `${process.env.WEBSITE_NAME} - Projects`,
}
const ProjectPage = async () => {
  const projectsCardData :Array<TProjectCard> = [
    {
      img:"/Projects/radio.jpg",
      tag: "80's",
      title: "Lorem Ipsum",
      date: new Date("June 22, 2017"),
      description: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue."
    },
    {
      img:"/Projects/guy.jpg",
      tag: "elegant",
      title: "dolor sit amet",
      date: new Date("November 4, 2021"),
      description: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed."
   },
    {
      img:"/Projects/old.jpg",
      tag: "vintage",
      title: "consectetur adipiscing elit",
      date: new Date("October 21, 2023")
    }
  ] 
  return (
    <>
      <section className='flex flex-wrap justify-around max-w-8xl mx-auto gap-8'>
        <h1 className=' font-bold text-6xl text-center w-full my-6'>Our Staff</h1>
        <div className='animate-show  sm:max-w-md  grid   p-4 gap-4 min-w-[300px]'>
          <Image alt='actor' src="/person-1.jpg" width={1280} height={1699} className='  object-top object-cover aspect-square'/>               
          <p className='text-center text-4xl font-bold'>John Doe</p>
          <p className=' font-semibold text-center text-lg text-secondary-greyDark italic'>Director, CEO</p>
        </div>
        <div className='animate-showFromRight  sm:max-w-md  grid   p-4 gap-4 min-w-[300px]'>
          <Image alt='actor' src="/person-2.jpg" width={1280} height={1699} className='  object-cover aspect-square'/>        
          
          <p className='text-center text-4xl font-bold'>Mia Doe</p>
          <p className=' font-semibold text-center text-lg f text-secondary-greyDark italic'>Screenwriter, CTO</p>
        </div>
      </section>
      <section className=' bg-secondary-greyLight p-4 sm:py-8 sm:px-16 text-justify text-xl'>
      <SlideIn>
        <div className='grid gap-4'>
          <p className=' text-4xl font-bold text-center'>How Do we Work?</p>
          <p className='flex sm:gap-8'>
            <span className='hidden sm:inline text-center float-left text-9xl text-primary-accent font-bold'>
              &#x201E;
            </span>
            <span className=' indent-8 text-secondary-greyDark'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. 
              dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
            </span>
          </p>
          
        </div>
      </SlideIn>
      </section>
      <section className='my-12'>
        <p className='text-4xl font-bold text-center my-8'>
            Our work
        </p>
        <article className='grid mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl justify-center items-center'>
          {projectsCardData.map((item,index)=><ProjectCard data={item} key={`project-card-${index}}`}/>)}
        </article>
      </section>
    </>
  )
}

export default ProjectPage