"use client"
import Button from '@/components/Button/Button'
import Select from '@/components/Inputs/Select/Select'
import TextArea from '@/components/Inputs/TextArea/TextArea'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import { ButtonType } from '@/enums/Button'
import React, { useState } from 'react'

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
  return (
    <form className='grid grid-cols-4 gap-20 pt-10'>
        <TextInput className=' row-start-1 col-start-1 col-span-2' props={{ handleChange:(e)=>{setFormData({...formData, firstName: e.currentTarget.value} )}, type: "text", placeholder:"First Name"}}/>
        <TextInput className=' row-start-1 col-start-3 col-span-2' props={{ handleChange:(e)=>{setFormData({...formData, lastName:  e.currentTarget.value} )}, type: "text", placeholder:"Last Name"}}/>
        <TextInput className=' row-start-2 col-start-1 col-span-2' props={{ handleChange:(e)=>{setFormData({...formData, mail: e.currentTarget.value} )}, type: "email", placeholder:"E-Mail"}}/>
        <Select className=' row-start-2 col-start-3 col-span-2' props={{ handleChange:(e)=>{setFormData({...formData, subject: e.currentTarget.value} )}, placeholder:"Subject", options: selOption}}/>
        <TextArea className=' row-start-3 col-start-1 col-span-4 row-span-2' props={{ handleChange:(e)=>{setFormData({...formData, })}, placeholder:"Message"}}/>
        <Button  className='row-start-5 col-start-2 col-span-2 ' props={{ type:ButtonType.fill, isSubmit: true}}>SEND</Button>
      </form>
  )
}

export default ContactForm