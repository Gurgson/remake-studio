import React, { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
    props: {
        headerText: ReactNode | string
    }
}

const SettingSection : FC<IProps> = ({children, props}) => {
  return (
    <section className='mx-2 py-2 grid gap-1'>
        <p className='text-2xl font-semibold'>{props.headerText}</p>
        <div>
            {children}
        </div>
    </section>
  )
}

export default SettingSection