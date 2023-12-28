import { MouseEventHandler, ReactNode } from "react"

export type HomeGallerySlideProps ={

        title: string,
        image: string
        button?: {
          link: string,
          children: string
        }

}