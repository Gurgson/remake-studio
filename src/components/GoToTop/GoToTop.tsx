"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";


const GoToTop = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const [view, setView] = useState<boolean>(false);
    const ScrollPosView = useCallback(()=>{
        setView(window.scrollY > 400);
    },[])
    useEffect(()=>{
        if(!ref)
            return;
        window.addEventListener("scroll",ScrollPosView);
        return ()=> window.removeEventListener("scroll", ScrollPosView);
    },[ScrollPosView])
    const scrollTo = useCallback(()=>window.scrollTo(0,0),[]);
    return (
    <button 
        ref={ref} 
        type="button"
        onClick={scrollTo}
        className={` ${view?"opacity-100 animate-showFromRight":"opacity-0"} duration-1000 rounded-[50%] transition-all min-h-[20px] justify-around bg-primary-accent p-4 text-3xl fixed right-4 bottom-4 flex uppercase items-center`}
    >
        <FaArrowUp className=""/>
    </button>
  )
}

export default GoToTop