import { User } from '@prisma/client';
import 'next-auth'
import { Account, DefaultUser } from 'next-auth'

declare module 'next-auth' {

    interface Session {
        user: {

        } & DefaultUser & Account & User
    } 
   
}