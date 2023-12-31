import { authOpt } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/app/utils/prisma';
import Button from '@/components/Button/Button';
import ChangePasswordForm from '@/components/Forms/ChangePasswordForm/ChangePasswordForm';
import ChangeUserNameForm from '@/components/Forms/ChangeUsernameForm/ChangeUserNameForm';
import TextInput from '@/components/Inputs/TextInput/TextInput';
import SettingSection from '@/components/SettingSection/SettingSetion';
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation';
import React from 'react'

const AccSettingsPage = async () => {
  const session = await getServerSession(authOpt);
  if(session?.user.provider !== "credentials")
    return notFound();
  return (
    <div className='py-4 max-w-2xl mx-auto grid gap-2'>
      <SettingSection props={{
        headerText: "Displayed name"
      }}>
        <p className=' text-lg'>You current displayed name is: <span className=' text-primary-accent'>{session?.user.name}</span> </p>
        <ChangeUserNameForm/>
      </SettingSection>
      <SettingSection props={{
        headerText: "Change your password"
      }}>
        <ChangePasswordForm/>
      </SettingSection>
    </div>
  )
}

export default AccSettingsPage