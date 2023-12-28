import React, { FC, MouseEventHandler } from 'react'
interface IProps {
    props: {
        isActive: boolean,
        action: MouseEventHandler,
    }
}
const Dot: FC<IProps>= ({props}) => {
  return (
    <button type="button" onClick={props.action} className={` select-none hover:scale-110   w-3 h-3 sm:w-4 sm:h-4 rounded-[50%] ${props.isActive?" scale-125  border-primary-accent":"bg-primary-white"} border-[1px] border-solid border-secondary-greyDark`}></button>
  )
}

export default Dot