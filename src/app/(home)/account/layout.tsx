import { authOpt } from '@/app/api/auth/[...nextauth]/route';
import AccNavigationItem from '@/components/Navigation/AccountNavigation/AccNavigationItem';
import { TLinks } from '@/components/Navigation/LinkPropType'
import nextAuth, { getServerSession } from 'next-auth';
import React, { FC, ReactNode } from 'react'
interface IProps {
    children: ReactNode
}
const AccountLayout : FC<IProps> = async ({children}) => {
    const session = await getServerSession(authOpt);

    const basicUrl = "/account/";
    const link : Array<TLinks> = [
        
        {
            href : `${basicUrl}likes`,
            innerText : "Likes History"
        },
        {
            href : `${basicUrl}comments`,
            innerText : "Comments History"
        },
    ]
    if(session?.user.provider === "credentials")
        console.log(link.unshift(
            {
                href : `${basicUrl}settings`,
                innerText : "Settings"
            }))
   
    return (
    <>
        <h1 className='text-center font-bold text-4xl'>Your Account</h1>
        <div className=' border-b-2 my-2 border-secondary-grey flex gap-3 box-border'>
            {
                link.map((item, index)=><AccNavigationItem key={`account-link-${index}`} data={item}/>)
            }
        </div>
        {children}
    </>
  )
}

export default AccountLayout