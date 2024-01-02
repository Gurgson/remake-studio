import AuthForm from '@/components/FormAuth/FormAuth'
import { Metadata } from 'next';
import { getServerSession } from 'next-auth'
import {  redirect } from 'next/navigation';
import React from 'react'
export const metadata : Metadata = {
  title: `${process.env.WEBSITE_NAME} - Authorization`,
}
const AuthPage = async () => {
  const session = await getServerSession();

  return (
    <AuthForm/>
  )
}

export default AuthPage