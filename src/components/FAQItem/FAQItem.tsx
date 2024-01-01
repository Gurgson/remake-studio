"use client"
import { FaArrowRight } from "react-icons/fa6";
import React, { FC, useState } from 'react'
import { FAQData } from "./FAQItem-types";
interface IProps {
    props: FAQData
}
const FAQItem : FC<IProps> = ({props}) => {
    const [isHidden, setVisibility] = useState<boolean>(false);
    return (
    <div>
        <button 
            className=' focus:scale-95 focus:bg-secondary-grey duration-500 w-full flex justify-between items-center bg-secondary-greyLight p-4 rounded text-primary-accent' 
            onClick={()=>{
                if(isHidden)
                    return setVisibility(false);
                setVisibility(true);
            }}>
                <span className=" uppercase text-lg">{props.question}</span>
                <span className={` ${(isHidden)?"rotate-90":""} indent-6 text-lg duration-500`}>{<FaArrowRight/>}</span>
        </button>
        <div
        className={` indent-2 p-4 grid overflow-hidden transition-all duration-300 ease-in-out  text-base ${
          isHidden
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{props.answear}</div>
      </div>
    
       
    </div>
  )
}

export default FAQItem