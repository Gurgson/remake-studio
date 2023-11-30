'use client'
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface IProps  { 
    children?: ReactNode
    

}
export const Providers : FC<IProps>= ({children})=>{

    return <SessionProvider>{children}</SessionProvider>

}