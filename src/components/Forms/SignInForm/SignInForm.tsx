"use client"
import Button from '@/components/Button/Button'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import Github from 'next-auth/providers/github'
import { signIn, useSession,  } from 'next-auth/react'
import {  redirect, useRouter } from 'next/navigation'
import React, { FC, FormEvent, use, useCallback, useEffect, useState } from 'react'
import { LuGithub } from "react-icons/lu";

const blankFormData : SignInFormData = {
  username: "", 
  password: ""
};
const SignInForm  :FC = () => {
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
      callbackUrl: ""
    });
    if(response?.status === 500)
      return setLoading(false), setError({...err, username: "Unknown error, try again"})
    if(response?.status === 401)
      return setLoading(false), setError({...err, username: "Cannot find given account, please provide crendtials again"});
    
    // response ok
    router.refresh();
    router.back();

  };
  return (
    <>
      <form className={` col-span-2 grid grid-cols-1 gap-8 animate-show`}>
        <TextInput className='' props={{errorMessage: err.username, type: "text", placeholder: "Username", handleChange:(e)=>{setCredentials({...credentials, username: e.target.value})}} }></TextInput>
        <TextInput props={{errorMessage:err.password, type: "password", placeholder: "Password",handleChange:(e)=>{setCredentials({...credentials, password: e.target.value})}} }></TextInput>
        <Button props={{isSubmit: true, isDisabled:isLoading, handleClick: onSubmit}}>Sign In With Your Credentials </Button>
        <div className='text-center flex  justify-around w-full items-center'>
          <hr className=' w-1/3 bg-primary-accent'/>      
          <span className=' text-primary-accent'> OR</span>
          <hr className=' w-1/3 bg-primary-accent'/>
        </div>
        {/* //TODO:  other auth methods*/}
      </form>
      <div className='col-span-2 grid py-6 gap-6'>
        <Button className="flex gap-4 justify-center items-center" props={{handleClick:()=>signIn("github", {callbackUrl:"/"})}} > 

            <LuGithub className="text-4xl" />
            <span>Sign Up with Github </span>
        </Button>
      </div>
    </>
  )
   
    
}

export default SignInForm