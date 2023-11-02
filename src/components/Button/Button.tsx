import { ButtonSize, ButtonType, OutlinedButtonColor } from '@/enums/Button'
import React, { FC } from 'react'

interface IProps {
    props: {
        // size: ButtonSize
        type: ButtonType
        outlineColor?: OutlinedButtonColor
        handleClick?: void
    },
    children?: string
}

const Button : FC<IProps>= ({props, children}) => {
    props.outlineColor = props.outlineColor || OutlinedButtonColor.white;

  
    return (
    <>
        {props.type === ButtonType.outlined} && <button className={`px-8 py-4 border-2 border-primary-${props.outlineColor} font-bold text-xl capitalize rounded-md`}>{children}</button>
    </>
  )
}

export default Button