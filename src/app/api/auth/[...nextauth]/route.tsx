
import prisma from "@/app/utils/prisma";
import { compare } from "bcrypt";
import { AuthOptions } from "next-auth";
import NextAuth, { getServerSession } from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";


// CREDENTIALS PROVIDERS

const credProvider = CredentialsProvider({
    name: "credentials",
    credentials: {
        username: { label: "Username", type: "text"},
        password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
        if(!credentials?.password || !credentials?.password)
            return null;
        const user = await prisma.user.findFirst(
            {
                where:
                    {
                        username: credentials.username
                    }, include: {
                        options: true
                    }
            })
        if(!user)
            return null;
        const doesPassMatch = await compare(credentials.password, user.options?.hashedPassword as string);
        if(!doesPassMatch)
        {   
            return null
        } 
        else 
        {
            
            return {
                id: user.id.toString(),
                name: (user.options?.displayedName)?user.options.displayedName:user.username
            }
        }
    },
    
})


// GITHUB PROBIDER
const GHProvider = Github({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string,
})


    
export const authOpt : AuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        credProvider,
        GHProvider
        
    ],
    callbacks:{
        jwt: async ({ token, user, account }) => {
            if(account) {
                token = {...token, ...account}
                if(account.provider !== "credentials" && user)
                {
                    const dbUser = await prisma.user.findFirst(
                        {
                            where: {
                                id: user.id,
                                provider: account.provider

                            }
                        }
                    )
                    if(!dbUser) {
                        const createdUser =  await prisma.user.create(
                            {
                                data:{
                                    id: user.id as string,
                                    username: user.name as string,
                                    provider: account.provider
                                }
                            }
                        )
                    } else {
                        const updatedUser = await prisma.user.update({
                            where:{
                                id: user.id,
                                provider: account.provider
                            }, 
                            data:{
                                username: user.name as string
                            }
                        })
                    }
                }
            }
            if (user) {
              token = { ...token, ...user };
            }
            return token;
        },
          session: async ({ session, token }) => {
            if (session.user) {
              session.user = {
                ...session.user,
                ...token,
              };
            }
            return session;
          },
    },
    pages: {
        signIn: "/auth",
        signOut: "/auth/logout"
    
    },
    
}
const handler = NextAuth(authOpt);
export const getServSession = async ()=>{
    return await getServerSession(authOpt)
}
export {handler as GET, handler as POST}