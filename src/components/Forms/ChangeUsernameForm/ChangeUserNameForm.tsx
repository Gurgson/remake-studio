"use client"
import { NewUsernameData } from '@/app/api/settings/username/route'
import { toastMessage } from '@/app/utils/toast'
import Button from '@/components/Button/Button'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const emptyData :NewUsernameData = {
  newUsername: ""
}

const ChangeUserNameForm = () => {
  const [formData, setFomData] = useState<NewUsernameData>(emptyData)
  const [formError, setFormError] = useState<NewUsernameData>(emptyData)
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const onSubmit = async ()=>{
    setLoading(true)
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/settings/username`,
      {
        method: "POST",
        body: JSON.stringify(formData)
      }
    )
    if(res.status.toString().startsWith("4"))
    {
      const body : JSONResponse<NewUsernameData> = await res.json();
      setFormError(body.message);
      
    }
    if(res.status === 201)
    {
      const body : JSONResponse<string> = await res.json();
      toastMessage(body.message);
      setFomData(emptyData);
      router.refresh();
    }
    setLoading(false)
  }
  return (
    <form className='grid sm:w-3/4 mx-auto gap-2 py-4'>
    <TextInput props={{ handleChange:(e)=>setFomData({...formData, newUsername: e.currentTarget.value}), type: "text", placeholder: "Your new username", errorMessage: formError.newUsername}}/>
    <p className=' text-xs text-secondary-greyDark'>
      <span className=' text-primary-accent'>*</span> 
      This doesn&apos;t change your username you sign in with, but name thats other users see when you comment etc..
    </p>
    <Button props={{handleClick: onSubmit, isDisabled: loading}}>
      Confirm        
    </Button>
  </form>
  )
}

export default ChangeUserNameForm