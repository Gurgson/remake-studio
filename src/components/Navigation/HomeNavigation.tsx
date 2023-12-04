import React,{FC} from 'react'
import Logo from '../Logo/Logo'
import { TLinks } from '@/types/NavItem'
import NavItem from './NavItem'
import { getServerSession } from 'next-auth'
import { authOpt } from '@/app/api/auth/[...nextauth]/route'
import AuthMenu from './AuthMenu'


const HomeNavigation : FC = async () => {
    const links : Array<TLinks>= [
        {
          href:"/projects",
          innerText:"Projects"
        },
        {
          href:"/blog/0",
          innerText:"Blog"
        },
        {
          href:"/contact",
          innerText:"Contact"
        }
        
      ]
    // const session = await getServerSession(authOpt);
      // console.log(session?.user);
  return (
    <nav className='flex justify-between items-center border-b-2 border-b-secondary-grey pb-2'>
        <Logo/>
        <div className='flex flex-1 justify-end px-6'>
            {links.map((link, index)=><NavItem props={{
                data: link,

            }} key={`navigation-item-${index}`}/>)}
        </div>
        <AuthMenu/>
    </nav>
  )
}

export default HomeNavigation