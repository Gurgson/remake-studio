import Slider from '@/components/Slider/Slider'
import HomeGallerySlide from '@/components/Slider/Slides/HomeGallerySlide'
import { HomeGallerySlideProps } from '@/types/HomeGallerySlide'

export default async function Home() {
  const gallery :Array<HomeGallerySlideProps> = [
    {
      image: "/HomeGallery/cameras.jpg",
      title:"Remastering movies with passion",
      description: "Using newests technologies, we upscale existing old, vintage movies. We give them second breath, so important for modern eyes.",
    },
    {
      image: "/HomeGallery/start.jpg",
      title:"Remastering movies with passion",
      description: "Using newests technologies, we upscale existing old, vintage movies. We give them second breath, so important for modern eyes.",
    },
    {
      image: "/HomeGallery/tape.jpg",
      title:"Remastering movies with passion",
      description: "Using newests technologies, we upscale existing old, vintage movies. We give them second breath, so important for modern eyes.",
    },
    {
      image: "/HomeGallery/test.jpg",
      title:"Remastering movies with passion",
      description: "Using newests technologies, we upscale existing old, vintage movies. We give them second breath, so important for modern eyes.",
    }     
  ]
  
  const SliderItems = gallery.map((item, index)=> <HomeGallerySlide key={`home-gallery-slide-${index}`} props={item}/> );
  return (
    <section className=" py-4">
        <Slider props={{autoplay: 12000}}>
          {SliderItems}
        </Slider>
        
    </section>
  )
}
