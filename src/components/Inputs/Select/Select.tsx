"use client"
import FormError from '@/components/Forms/FormError/FormError'
import React, { FC} from 'react'
import { IInput, TSelectProps } from '../InputInterface';

const Select : FC<IInput<TSelectProps>> = ({props, className}) => {
  return (
    <label className={`${className} grid relative`}>
      <select onChange={props.handleChange}
      className={` text-sm x-1 py-1 border-b-2 border-secondary-grey hover:border-primary-accent outline-2 outline-primary-accent` }
      placeholder={props.placeholder || "..."}
      defaultValue={props.options[0]}
      >
        {
          props.options.map((item, index)=>
          <option 
          key={`contact-option-${index}`}
          className=''
          >
            {item}
          </option>)
        }
      </select>
      {/**/}
     
      <div className={`absolute -top-4 bg-primary-white left-1 text-primary-accent text-xs}`}>
        {
          props.placeholder || "..."
        }
      </div>
      
      <FormError>{(props.errorMessage?props.errorMessage:"")}</FormError>
    </label>
  )
}

export default Select