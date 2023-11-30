"use client"
import Button from '@/components/Button/Button'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import { ButtonType } from '@/enums/Button'
import { TextInputType } from '@/enums/TextInput'
import { signIn, useSession,  } from 'next-auth/react'
import {  useRouter } from 'next/navigation'
import React, { FC, FormEvent, use, useCallback, useEffect, useState } from 'react'
import { FaSquareGithub, FaSquareFacebook, FaSquareGooglePlus } from "react-icons/fa6";
interface IProps{
  className : string
}
const blankFormData : SignInFormData = {
  username: "", 
  password: ""
};
const SignInForm  :FC<IProps> = ({className}) => {
  const router = useRouter();
  //form data
  const [credentials, setCredentials] = useState<SignInFormData>(blankFormData);
  //
  const [isLoading, setLoading] = useState<boolean>(false);
  // form errors
  const [err, setError] = useState<SignInFormData>(blankFormData);
  const onSubmit =  async (e: FormEvent)=>{
    e.preventDefault();
    setLoading(true);
    setError(blankFormData);
    const response = await signIn("credentials", {
      ...credentials,
      redirect: false,
    });
    if(response?.status === 500)
      return setLoading(false), setError({...err, username: "Unknown error, try again"})
    if(response?.status === 401)
      return setLoading(false), setError({...err, username: "Cannot find given account, please provide crendtials again"});
    
    // response ok
    router.refresh();
    router.push("/");

  };
  return (
    <form className={`${className}`}>
      <TextInput props={{errorMessage: err.username, type: TextInputType.text, placeholder: "Username", handleChange:(e)=>{setCredentials({...credentials, username: e.target.value})}} }></TextInput>
      <TextInput props={{errorMessage:err.password, type: TextInputType.password, placeholder: "Password",handleChange:(e)=>{setCredentials({...credentials, password: e.target.value})}} }></TextInput>
      <Button props={{isSubmit: true,isDisabled:isLoading,type: ButtonType.fill, handleClick: onSubmit}}>Sign In With Your Credentials </Button>
      <div className='text-center flex  justify-around w-full items-center'>
        <hr className=' w-1/3 bg-primary-accent'/>      
        <span className=' text-primary-accent'> OR</span>
        <hr className=' w-1/3 bg-primary-accent'/>
      </div>
      {/* //TODO:  other auth methods*/}
      <div className='flex flex-wrap justify-around item-center'>
        <FaSquareFacebook className=" w-20 h-20 hover:text-primary-accent duration-200 cursor-pointer hover:scale-110 "/>
        <FaSquareGithub className=" w-20 h-20 hover:text-primary-accent duration-200 cursor-pointer hover:scale-110 "/>
        <FaSquareGooglePlus className=" w-20 h-20 hover:text-primary-accent duration-200 cursor-pointer hover:scale-110 "/>
      </div>
    </form>
  )
}

export default SignInForm