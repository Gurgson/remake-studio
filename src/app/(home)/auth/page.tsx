import AuthForm from '@/components/FormAuth/FormAuth'
import { getServerSession } from 'next-auth'
import { notFound, redirect } from 'next/navigation';
import React from 'react'

const AuthPage = async () => {
  const session = await getServerSession();
  if(session)
    redirect("/");
  return (
    <AuthForm/>
  )
}

export default AuthPage