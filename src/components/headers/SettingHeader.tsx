import React, { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
    props: {
        headerText: ReactNode | string
    }
}

const SettingHeader : FC<IProps> = ({children, props}) => {
  return (
    <div>
        <p className=' text-2xl text-secondary-greyDark font-medium border-b-2 border-secondary-greyDark'>{props.headerText}</p>
        <div>
            {children}
        </div>
    </div>
  )
}

export default SettingHeader