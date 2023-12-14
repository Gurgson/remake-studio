"use client"
import React, { FC, MouseEventHandler, ReactNode } from 'react'
import { ButtonSize, ButtonType } from './Button-types'
import { AiOutlineLoading, AiOutlineLoading3Quarters } from 'react-icons/ai'
interface IProps {
    props: {
        handleClick?: MouseEventHandler,
        type?: ButtonType,
        size?: ButtonSize,
        isSubmit?: boolean,
        isDisabled?: boolean
    }
    className?: string,
    children?: ReactNode | string
}
const Button : FC<IProps>= ({props, children, className}) => {
    let size = "";
    switch (props.size) {
        case ButtonSize.small:
            size = "py-2 px-4"
            break;
        case (ButtonSize.big || null ): 
        default:
            size = "py-4 px-8"
            break;
    }
    let commonStyles = `${size} ${className} cursor-pointer border-bg-primary-black border-2 rounded-lg capitalize flex justify-center items-center`;
    let commonProps = {
        onClick: props.handleClick,
        disabled: (props.isDisabled)?true:false,
    }
    const innerHtml = (props.isDisabled)?<AiOutlineLoading3Quarters className={`animate-spin `}/>:children;
    if(props.type === ButtonType.outlined)
        return  <button {...commonProps} type={(props.isSubmit)?"submit":"button"} className={`${commonStyles} hover:bg-secondary-greyLight hover:border-primary-accent hover:text-primary-accent `}>{innerHtml}</button>
        
    return <button {...commonProps} type={(props.isSubmit)?"submit":"button"}  className={`${commonStyles}  bg-primary-black hover:bg-primary-accent text-primary-white `}>{innerHtml}</button>
  innerHtml
}

export default Button