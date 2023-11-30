"use client"
import SignInForm from '@/components/Forms/SignInForm/SignInForm';
import SignUpForm from '@/components/Forms/SignUpForm/SignUpForm';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'


const SignInPage = () => {
  //true - show registration form
  //false show sign in form
  const [isChecked, setCheck] = useState<boolean>(false);
  const commonSwitchItemStyle  = "px-4 py-2 rounded-md col-start-1 w-1/2 text-center mx-1 transition-all duration-500";
  return (
    <div className=' mx-auto max-w-lg grid grid-cols-2 pb-14'>
      <p className=' text-4xl font-bold text-center col-span-2 capitalize mt-8'>my account</p> 
      <label className="inline-flex items-center p-2 rounded-md cursor-pointer bg-secondary-grey col-span-2 select-none my-16 max-h-14">
        <input type="checkbox" className="hidden" onChange={()=>{setCheck((state)=>!state)}}/>
        
        <span className={`${commonSwitchItemStyle} ${(!isChecked)?"bg-primary-white":"bg-secondary-grey"}`}>Sign In</span>
	      <span className={`${commonSwitchItemStyle} ${(isChecked)?"bg-primary-white":"bg-secondary-grey"}`}>Sign Up</span>
    </label>
    {
      (!isChecked)?<SignInForm className="col-span-2 flex flex-col gap-8 animate-show"/>:<SignUpForm changeForm={()=>{setCheck(false)}} className='col-span-2 flex flex-col gap-8 animate-show '/>
    }
    
    </div>
  )
}

export default SignInPage