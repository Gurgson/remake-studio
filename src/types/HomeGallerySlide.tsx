import { ReactNode } from "react"

export type HomeGallerySlideProps ={

        title: string,
        description?: ReactNode,
        image: string
        button?: {
          handleClick: void,
          buttonText: string
        }

}