"use client"
import { ButtonSize, ButtonType, OutlinedButtonColor } from '@/enums/Button'
import React, { FC, MouseEventHandler } from 'react'
import { LiaSpinnerSolid } from "react-icons/lia";

interface IProps {
    props: {
        // size: ButtonSize
        type: ButtonType
        outlineColor?: OutlinedButtonColor
        isSmall?: boolean,
        handleClick?:  MouseEventHandler,
        isDisabled?: boolean,
        isSubmit?: boolean
    },
    children?: string
}

const Button : FC<IProps> =  ({props, children}) => {
    props.outlineColor = props.outlineColor || OutlinedButtonColor.white;
    const commonStyles = `${(props.isSmall)?"px-4 py-2":"px-8 py-4"} text-center border-2 font-bold text-xl rounded-md capitalize hover:bg-primary-accent duration-200"}`;
    const commonProps ={
        disabled: props.isDisabled?true:false,
        onClick: props.handleClick
    
    } 
    const commonInnerText = (props.isDisabled)?<LiaSpinnerSolid className="animate-spin text-lg mx-auto"/>:children;
    return (
    <>
        {props.type === ButtonType.outlined && 
        <button 
            {...commonProps}
            type={(props.isSubmit)?"submit":'button'}
            className={`border-primary-${props.outlineColor} ${commonStyles}`}
        >{commonInnerText}</button>}
        {props.type === ButtonType.fill && 
        <button 
            {...commonProps}
            type={(props.isSubmit)?"submit":'button'}
            className={` text-primary-white bg-primary-black  ${commonStyles} `}  
        >{commonInnerText}</button>}
    </>
  )
}

export default Button