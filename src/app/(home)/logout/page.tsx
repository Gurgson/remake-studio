"use client"
import Button from '@/components/Button/Button'
import { ButtonType } from '@/enums/Button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutPage = () => {
    const router = useRouter();
  return (
    <div className='flex justify-center items-center min-h-[65vh] animate-show duration-200'>
        <Button props={{
            type: ButtonType.fill,
            handleClick: ()=>{
                signOut({
                    "redirect": true,
                    "callbackUrl": "/"
                })
                
            }
        }}>
            Sign Out
        </Button>
    </div>
  )
}

export default LogoutPage