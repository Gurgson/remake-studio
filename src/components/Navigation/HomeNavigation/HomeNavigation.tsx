import React,{FC} from 'react'
import HomeNavigationItem from './HomeNavigationItem'
import { TLinks } from '../LinkPropType';
import Logo from '@/components/Logo/Logo';
import AuthPanel from '../AuthPanel/AuthMenu';

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
      const navItems = links.map((link, index)=><HomeNavigationItem props={{
        data: link,

    }} key={`navigation-item-${index}`}/>);
  return (
    <nav className=' drop-shadow-sm  sticky w-full py-4 z-40 flex justify-between items-center border-b-2 border-b-secondary-grey  bg-primary-white'>
        <Logo/>

        
        <div className='hidden sm:flex flex-1 justify-end px-6 '>
            {navItems}
        </div>
        <AuthPanel/>
  

          <label className="peer overflow-hidden sm:hidden ml-10 w-10 h-10  z-30 relative inline-flex items-center cursor-pointer p-1">
            <input type="checkbox" value="" className="sr-only peer"/>
            <span className="rounded-sm peer-checked:bg-primary-accent  peer-checked:rotate-45 peer-checked:translate-y-[16px] duration-500 absolute top-0 right-0 bg-primary-black w-full h-1"></span>
            <span className="rounded-sm peer-checked:bg-primary-accent peer-checked:opacity-0 duration-500 absolute top-1/2 -translate-y-1/2 right-0 bg-primary-black w-4/5 h-1"></span>
            <span className="rounded-sm  peer-checked:w-full peer-checked:bg-primary-accent  peer-checked:-rotate-45 peer-checked:-translate-y-[16px]  duration-500 absolute bottom-0 right-0 bg-primary-black w-3/5 h-1"></span>
            <div className='text-xl gap-5 px-10 justify-center items-end flex flex-col bg-primary-white border-r-2  peer-checked:-left-[50%] -left-[150%] duration-500 sm:hidden z-50 fixed top-0  w-screen h-screen'>          
              <Logo/>
              {navItems}
            </div>
        </label>
    </nav>
  )
}

export default HomeNavigation