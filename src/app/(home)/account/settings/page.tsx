import { authOpt } from '@/app/api/auth/[...nextauth]/route'
import SettingHeader from '@/components/headers/SettingHeader';
import { getServerSession } from 'next-auth'
import React from 'react'

const AccSettingsPage = async () => {
  const session = await getServerSession(authOpt);
  return (
    <div className='py-4 max-w-2xl mx-auto'>
      <SettingHeader props={{
        headerText: "Account"
      }}>

      </SettingHeader>
    </div>
  )
}

export default AccSettingsPage