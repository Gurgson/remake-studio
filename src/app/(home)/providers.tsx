"use client"
import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface IProps  { 
    children?: ReactNode
}
export const Providers : FC<IProps>= ({children})=>{

    return <SessionProvider>{children}</SessionProvider>

}