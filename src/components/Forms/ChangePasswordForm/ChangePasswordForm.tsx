"use client"
import { ResetPasswordData } from '@/app/api/settings/password/route'
import { toastMessage } from '@/app/utils/toast'
import Button from '@/components/Button/Button'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import React, { useState } from 'react'
import PasswordStrengthBar from '../PasswordStrengthBar/PasswordStrengthBar'
const emptyData : ResetPasswordData = {
  currentPassword:"",
  newPassword:"",
  repeatNewPassword:""
}
const ChangePasswordForm = () => {
  const [formData, setFomData] = useState<ResetPasswordData>(emptyData)
  const [formError, setFormError] = useState<ResetPasswordData>(emptyData)
  const [loading, setLoading] = useState<boolean>(false)
  const onSubmit = async ()=>{
    setLoading(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/settings/password`,
      {
        method: "POST",
        body: JSON.stringify(formData)
      }
    )
    if(res.status.toString().startsWith("4"))
    {
      const body : JSONResponse<ResetPasswordData> = await res.json();
      setFormError(body.message);
      
    }
    if(res.status === 201)
    {
      const body : JSONResponse<string> = await res.json();
      toastMessage(body.message);
      setFomData(emptyData);
    }
    setLoading(false)
  }
  return (
    <form className='grid sm:w-3/4 mx-auto gap-4 py-4'>
          <TextInput props={{errorMessage: formError.currentPassword ,handleChange:(e)=>setFomData({...formData, currentPassword: e.currentTarget.value}) , type: "password", placeholder:"Current password"}}/>
          <TextInput props={{errorMessage: formError.newPassword ,handleChange:(e)=>setFomData({...formData, newPassword: e.currentTarget.value}) , type: "password", placeholder:"New password"}}/>
          <PasswordStrengthBar props={{password: formData.newPassword}}/>
          <TextInput props={{errorMessage: formError.repeatNewPassword ,handleChange:(e)=>setFomData({...formData, repeatNewPassword: e.currentTarget.value}) , type: "password", placeholder:"Confirm new password"}}/>
          <Button props={{handleClick: onSubmit, isDisabled: loading}}>
            Confirm
          </Button>
        </form>
  )
}

export default ChangePasswordForm