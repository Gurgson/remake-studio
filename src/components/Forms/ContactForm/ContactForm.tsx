"use client"
import { warnUnsupported } from '@/app/utils/toast'
import Button from '@/components/Button/Button'
import Select from '@/components/Inputs/Select/Select'
import TextArea from '@/components/Inputs/TextArea/TextArea'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import React, { FormEvent, useState } from 'react'

const blankFormData : ContactFormData = {
    firstName: "",
    lastName: "",
    mail: "",
    subject: "",
    message: ""
}

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>(blankFormData);
    const selOption = ["General question", "Refunds", "Payments", "Account", "Feedback", "Business", "Other"]
    const onSubmit = (e: FormEvent)=>{
      e.preventDefault();
    }
    return (
    <form className='grid sm:grid-cols-4 grid-cols-1 w-4/5 gap-14' onSubmit={onSubmit}>
        <TextInput className=' sm:col-span-2 col-span-4' props={{ handleChange:(e)=>{setFormData({...formData, firstName: e.currentTarget.value} )}, type: "text", placeholder:"First Name"}}/>
        <TextInput className='sm:col-span-2 col-span-4' props={{ handleChange:(e)=>{setFormData({...formData, lastName:  e.currentTarget.value} )}, type: "text", placeholder:"Last Name"}}/>
        <TextInput className='sm:col-span-2 col-span-4' props={{ handleChange:(e)=>{setFormData({...formData, mail: e.currentTarget.value} )}, type: "email", placeholder:"E-Mail"}}/>
        <Select className='sm:col-span-2 col-span-4' props={{ handleChange:(e)=>{setFormData({...formData, subject: e.currentTarget.value} )}, placeholder:"Subject", options: selOption}}/>
        <TextArea className='col-span-4 row-span-2' props={{ handleChange:(e)=>{setFormData({...formData, })}, placeholder:"Message"}}/>
        <Button  className='sm:col-span-2 sm:col-start-2 col-span-4' props={{  handleClick: warnUnsupported}}>SEND</Button>
    </form>
  )
}

export default ContactForm