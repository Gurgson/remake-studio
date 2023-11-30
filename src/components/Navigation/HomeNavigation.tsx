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
          href:"/posts",
          innerText:"What's new"
        },
        {
          href:"/projects",
          innerText:"Our latest work"
        },{
          href:"/contact",
          innerText:"Our cast"
        },
        
      ]
    const session = await getServerSession(authOpt);
      console.log(session?.user);
  return (
    <nav className='flex justify-between items-center'>
        <Logo/>
        <div className='flex'>
            {links.map((link, index)=><NavItem props={{
                data: link,

            }} key={`navigation-item-${index}`}/>)}
        </div>
        <AuthMenu/>
    </nav>
  )
}

export default HomeNavigation