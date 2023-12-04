"use client"
import FormError from '@/components/Forms/FormError/FormError'
import React, { FC, useRef, useState} from 'react'
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { IInput, TTextInputProps } from '../InputInterface';

const TextInput : FC<IInput<TTextInputProps>> = ({props, className}) => {
  const [isPassVisibile, setPassVisibility] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const passwordEye = (isPassVisibile)?
  <HiMiniEyeSlash className={`cursor-pointer z-10 absolute right-2 top-1/3 -translate-y-1/2 text-2xl hover:text-primary-accent`} onClick={()=>setPassVisibility(false)}/>
  :
  <HiMiniEye className={`cursor-pointer z-10 absolute right-2 top-1/3 -translate-y-1/2 text-2xl hover:text-primary-accent`} onClick={()=>setPassVisibility(true  )}/>
  return (
    <label className={`${className} grid relative`}>
      <input onChange={props.handleChange}
      ref={inputRef} 
      className={`h-full px-1 py-1 text-base border-b-2 border-secondary-grey hover:border-primary-accent outline-2 outline-primary-accent` }
      type={(props.type !== "password")?props.type:(isPassVisibile)?"text":"password"} 
      placeholder={props.placeholder || "..."}>
      </input>
      {/* password eyelash */}
      {(props.type === "password") && passwordEye}
      {/* this elements shows what field was for when placeholder is gone*/}
      {inputRef.current?.value && 
        <div className={` animate-show absolute -top-4 bg-primary-white left-1 text-primary-accent text-xs}`}>
          {
            props.placeholder || "..."
        }
        </div>
      }
      <FormError>{(props.errorMessage?props.errorMessage:"")}</FormError>
    </label>
  )
}

export default TextInput