"use client"
import FormError from '@/components/Forms/FormError/FormError'
import React, { FC, ReactNode, useRef} from 'react'
import { IInput, TStandardInputProps } from '../InputInterface';

const TextArea : FC<IInput<TStandardInputProps<HTMLTextAreaElement>>& {children?: string}> = ({props, className, children}) => {
  const textareRef = useRef<HTMLTextAreaElement>(null);
  console.log(textareRef.current?.value);
  return (
    <label className={`${className} grid relative`}>
      <textarea 
      onChange={props.handleChange}
      ref={textareRef} 
      className={ ` h-full px-1 py-1 text-base border-b-2 border-secondary-grey hover:border-primary-accent outline-2 outline-primary-accent`}
      placeholder={props.placeholder || "..."}
      defaultValue={children}>
        
      </textarea>
      {/* this elements shows what field was for when placeholder is gone*/}
      {textareRef.current?.value && 
        <div className={` rounded  animate-show absolute -top-4 bg-primary-white px-2 left-1 text-primary-accent text-xs}`}>
          {
            props.placeholder || null
        }
        </div>
      }
      <FormError>{(props.errorMessage?props.errorMessage:"")}</FormError>
    </label>
  )
}

export default TextArea