"use client"
import Button from '@/components/Button/Button'
import { ButtonType } from '@/enums/Button'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutPage = () => {
    const router = useRouter();
  return (
    <div className=' gap-3 flex justify-center items-center flex-col min-h-[65vh] animate-show duration-200'>
        <p className=' text-2xl'>Do you want to <span className=' font-semibold text-primary-accent'>sign out? </span></p>
        <div className='grid grid-cols-2 gap-2'>
            <Button props={{
                type: ButtonType.fill,
                isSmall: true,
                handleClick: ()=>{
                    signOut({
                        "redirect": true,
                        "callbackUrl": "/"
                    })
                    
                }
            }}>
                Sign Out
            </Button>
            <Button props={{
                type: ButtonType.outlined,
                isSmall: true,
                handleClick: ()=>{
                    router.back();
                    
                }
            }}>
                Stay
            </Button>
        </div>
        
    </div>
  )
}

export default LogoutPage