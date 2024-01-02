import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'
import Footer from '@/components/Footer/Footer'
import { Providers } from './providers'
 import {DM_Sans} from "next/font/google"
import HomeNavigation from '@/components/Navigation/HomeNavigation/HomeNavigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GoToTop from '@/components/GoToTop/GoToTop'
 const sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${process.env.WEBSITE_NAME}`,
  description: 'Remake Studio is studio where u may give old movies new life. You tired of black and white style? Or you want to see old movie in better resolution? Contact us and we will solve this problem for you!',
  keywords: ["movies", "vintage movies", "movies remakes", "remakes", "redos", "movie revatalization"],
  authors: {name: "Jakub Stapiński", url:"https://github.com/gurgson"},
  icons: "/logo-empty-white.svg"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={`${sans.className}`}>
      <body className={`px-6 md:px-20 py-8 scroll`}>
        <Providers>
          <ToastContainer 
            position="bottom-left"
            progressStyle={{
              background: "var(--color-accent)"
            }}
            
            autoClose={3000}
            
          />
          <HomeNavigation/>
          <main className=' min-h-screen py-10'>
            {children}
          </main>
          <Footer/>
          <GoToTop/>
        </Providers>
        
      </body>
    </html>
  )
}
