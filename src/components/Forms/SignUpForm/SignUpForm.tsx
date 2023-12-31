"use client"
import Button from '@/components/Button/Button'
import TextInput from '@/components/Inputs/TextInput/TextInput'
import React, {  FC, useState } from 'react'
import PasswordStrengthBar from '../PasswordStrengthBar/PasswordStrengthBar'
interface IProps {
    changeForm: Function
}

const SignUpForm : FC<IProps> = ({changeForm}) => {
    const [formData, setFormData] = useState<SignUpFormData>({username: "", password: "", confirmPassword: ""});
    const [formError, setError] = useState<SignUpFormData>({username: "", password: "", confirmPassword: ""});
    const [formLoading, setLoading] = useState<boolean>(false);
    const onSubmit = async ()=> {
        setLoading(true);
        setError({username: "", password: "", confirmPassword: ""});
        const result = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify(formData)
        })
        const data = await result.json();

        if(result.status === 400)
        if(data.status === "failed")
            setError(data.message);
        if(data.status === "success") 
            changeForm();
        setLoading(false);

    };
  return (
    <form className={`grid grid-cols-1 col-span-2 gap-6 animate-showFromRight`}>
        <TextInput  
            props={{errorMessage:formError.username ,type:"text", placeholder:"Username", handleChange: (e)=>{setFormData({...formData, username: e.target.value})}}}></TextInput>
        <TextInput props={{errorMessage:formError.password,type:"password", placeholder:"Password",handleChange: (e)=>{setFormData({...formData, password: e.target.value})}}}></TextInput>
        <PasswordStrengthBar props={{password: formData.password}}/>
        <TextInput props={{errorMessage:formError.confirmPassword, type:"password", placeholder:"Confirm Password", handleChange: (e)=>{setFormData({...formData, confirmPassword: e.target.value})}}}></TextInput>
        <Button props={{handleClick: ()=>{onSubmit()}, isDisabled: formLoading}}>Sign In</Button>
    </form>
  )
}

export default SignUpForm