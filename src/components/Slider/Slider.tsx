"use client"
import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react'
import Dot from './Dot'
import { useSwipeable } from 'react-swipeable'

interface IProps {
    props:{
        autoplay?: number
    }
    children: ReactElement[]
}

const Slider : FC<IProps> = ({children, props}) => {
    const [currentSlideIndex, setSlide] = useState<number>(0);
    const [isMenuVisible, setMenuVisibility] = useState<boolean>(false);
   

    //buttons handlers
    const nextSlide = useCallback(()=>{
        if(currentSlideIndex === children.length -1)
            return setSlide(0);
        
        setSlide((val)=>val+1);
    },[currentSlideIndex,children.length]);
    const previousSlide = useCallback(()=>{
        if(currentSlideIndex === 0)
            return setSlide(children.length-1);
        setSlide((val)=>val-1);
    },[currentSlideIndex, children.length]);
    //utils
    const mobileHandlers = useSwipeable({
        onSwipedLeft: previousSlide,
        onSwipedRight: nextSlide
    })
    const visbilityClass = `${(isMenuVisible)?"opacity-1":"sm:opacity-0 opacity-1"} duration-500 transition origin-left `;
    const buttonStyles = `${visbilityClass} hidden sm:block absolute h-full top-0 z-30 text-center w-20 text-primary-white `
    const menuVisibility = {
        onMouseEnter: ()=>{setMenuVisibility(true)},
        onMouseLeave: ()=>{setMenuVisibility(false)},
    }
    //autoplay
    useEffect(() => {
        if(!props.autoplay)
            return;
        const interval = setInterval(() => {
          nextSlide();
        }, props.autoplay);
        return () => clearInterval(interval);
      }, [props.autoplay, nextSlide]);
    
    
    return (
        <div className='w-full relative' {...menuVisibility} {...mobileHandlers}>
            <div className={`flex relative`}>
                {children.map((item, index)=><div key={`Slider-item-${index}}`} 
                    className={`${(index === currentSlideIndex)?"z-20 opacity-100":" opacity-0 absolute"} duration-500`}>
                        {item}
                    </div>)}
            </div>
            <button type="button" className={`${buttonStyles} text-3xl left-0`}  onClick={previousSlide}>&larr;</button>
            <button type="button" className={`${buttonStyles} text-3xl right-0`} onClick={nextSlide}>&rarr;</button>
            <div className={`flex absolute bottom-[10%] z-30 left-1/2 translate-x-[-50%] gap-2 ${visbilityClass}}`}>
                {children.map((item, index)=>{   
                    return <Dot key={`circle-button-${index}}`} props={{action:()=>{setSlide(index)}, isActive:(index === currentSlideIndex)?true:false}}/>
                })}
            </div>
        </div>
    )
}

export default Slider