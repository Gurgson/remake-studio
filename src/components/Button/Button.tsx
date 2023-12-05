"use client"
import React, { FC, MouseEventHandler } from 'react'
import { ButtonSize, ButtonType } from './Button-types'
interface IProps {
    props: {
        handleClick?: MouseEventHandler,
        type?: ButtonType,
        size?: ButtonSize,
        isSubmit?: boolean,
        isDisabled?: boolean
    }
    className?: string,
    children?: string
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
    let commonStyles = `${size} ${className} border-bg-primary-black border-2 rounded-lg capitalize `;
    let commonProps = {
        onClick: props.handleClick,
        disabled: (props.isDisabled)?true:false
    }
    if(props.type === ButtonType.outlined)
        return  <button {...commonProps} type={(props.isSubmit)?"submit":"button"} className={`${commonStyles} hover:bg-secondary-greyLight hover:border-primary-accent hover:text-primary-accent`}>{children}</button>
        
    return <button {...commonProps} type={(props.isSubmit)?"submit":"button"}  className={`${commonStyles} bg-primary-black hover:bg-primary-accent text-primary-white `}>{children}</button>
  
}

export default Button