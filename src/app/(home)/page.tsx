import SlideIn from '@/components/AnimationsFrame/SlideIn/SlideIn';
import Slider from '@/components/Slider/Slider'
import HomeGallerySlide from '@/components/Slider/Slides/HomeGallerySlide'
import { HomeGallerySlideProps } from '@/types/HomeGallerySlide'
import Image from 'next/image';
export default async function Home() {
  const gallery :Array<HomeGallerySlideProps> = [
    {
      image: "/HomeGallery/cameras.jpg",
      title:"We can bring back your favorite piece of art",
      button: {
        children: "About us",
        link: "/#About"

      }
    },
    {
      image: "/HomeGallery/tape.jpg",
      title:"Old movies in new colors",
      button: {
        children: "Our Work",
        link: "/projects"
      }
    },
    {
      image: "/HomeGallery/test.jpg",
      title: "Check the details directly with us",
      button: {
        children: "Contact us",
        link: "/"
      }
    }     
  ]
  
  const SliderItems = gallery.map((item, index)=> <HomeGallerySlide key={`home-gallery-slide-${index}`} props={item}/> );
  return (
    <>
        <section className=' max-w-6xl mx-auto animate-show'>

            <Slider props={{autoplay: 12000}}>
              {SliderItems}
            </Slider>

          
        </section>
        <section id='about' className='max-w-3xl mx-auto pb-8'>
          <SlideIn>
            <article className='mx-auto my-12'>
              <h1 className=' text-center text-4xl my-8 font-semibold'>About Us</h1>
              <h2 className=' text-center text-2xl my-4 font-medium '>Who we are and why we do what we do!</h2>
              <p className='  text-body'>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>  
            </article>
          </SlideIn>
          <article className=''>
            <SlideIn>
              <h2 className=' text-2xl my-4 font-medium'>Top Trends</h2>
              <Image loading='lazy' src="/Home-1.jpg" width={1299} height={1920} alt='home-1 image' className=' mx-auto h-auto aspect-video'/>
              <p className='my-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
              </p>
              <ul className=' list-inside list-disc indent-4'>
                <li>consectetur adipiscing elit. Aliquam placerat</li>
                <li>Lorem ipsum dolor sit amet consectetur </li>
              </ul> 
            </SlideIn>
          </article>
          
          <article>
            <SlideIn>
              <h2 className='text-2xl my-4 font-medium pt-4'>developed with care</h2>
              <Image loading='lazy' src="/Home-2.jpg" width={1440} height={1920} alt='home-2 image' className= 'my-6 mx-auto h-auto aspect-video'/>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.
              </p> 
            </SlideIn>
          </article>
        </section>     
        
    </>
  )
}
