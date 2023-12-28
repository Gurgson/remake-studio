"use client"
import { motion } from 'framer-motion'
import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
interface IProps {
    children: ReactNode
    props?: {
        direction?: "left" | "rigth"
    }
}
const SlideIn : FC<IProps>= ({children, props}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [scrolled, setScroll] = useState<boolean>(false);
    const handleScroll = useCallback(() => {
        if (!ref.current) return setScroll(false);
        if(scrolled)
            return;
        setScroll(window.scrollY - 100 > ref.current.getBoundingClientRect().top);
      }, [ref, scrolled]);
    
      useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [handleScroll]);
    let propClass = "";
    switch (props?.direction) {
        case "left":
            propClass += "-translate-x-10";
            break;
        case "rigth":
                propClass += "translate-x-10";
                break;
    }  
      
    return (
    <div ref={ref} className={`transition-all duration-[2s] ${scrolled?"":" translate-y-32 opacity-0"} `}>
        {children}
    </div>
  )
}

export default SlideIn