import React, { FC } from 'react'
interface IProps {
    children: string
}
const FormError : FC<IProps> = ({children}) => {
  return (
    <p className={` text-primary-accent text-sm font-semibold h-5 ${(children)?"animate-show":" animate-hide"}`}>{children}</p>
  )
}

export default FormError