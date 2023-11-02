import React, { FC, MouseEventHandler } from 'react'
interface IProps {
    props: {
        isActive: boolean,
        action: MouseEventHandler,
    }
}
const Dot: FC<IProps>= ({props}) => {
  return (
    <button type="button" onClick={props.action} className={` w-2 h-2 rounded-[50%] ${props.isActive?"bg-primary-accent":"bg-primary-white"} border-[1px] border-solid border-secondary-greyDark`}></button>
  )
}

export default Dot