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
            className='w-full flex justify-between items-center bg-secondary-greyLight p-4 rounded text-primary-accent' 
            onClick={()=>{
                if(isHidden)
                    return setVisibility(false);
                setVisibility(true);
            }}>
                <span className=" uppercase text-lg">{props.question}</span>
                <span className={`${(isHidden)?"rotate-90":""} indent-6 text-lg duration-500`}>{<FaArrowRight/>}</span>
            </button>
        <p className={`transform ${(isHidden?"opacity-100 h-fit":"translate-y-100 scale-y-0 h-0 opacity-0")} py-4 origin-top duration-500`}>{props.answear}</p>
  
    </div>
  )
}

export default FAQItem