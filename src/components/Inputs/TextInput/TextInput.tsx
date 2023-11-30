import FormError from '@/components/Forms/FormError/FormError'
import { TextInputType } from '@/enums/TextInput'
import React, {ChangeEvent, ChangeEventHandler, EventHandler, FC} from 'react'
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
interface IProps {
    props: {
        type: TextInputType
        placeholder?: string 
        handleChange?: (e: ChangeEvent<HTMLInputElement>)=>void,
        errorMessage?: string
    },
    children?: string
    
}
const TextInput : FC<IProps> = ({props, children}) => {
  return (
    <>
      <input onChange={props.handleChange} 
      className='px-1 py-1 text-base border-b-2 border-secondary-grey hover:border-primary-accent outline-2 outline-primary-accent' 
      type={props.type} 
      placeholder={props.placeholder || "..."}>
      </input>
      
      <FormError>{(props.errorMessage?props.errorMessage:"")}</FormError>
    </>
  )
}

export default TextInput