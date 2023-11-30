import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, User } from "@prisma/client";
import { compare } from "bcrypt";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


// CREDENTIALS PROVIDERS
const prisma = new PrismaClient();
const credProvider = CredentialsProvider({
    name: "credentials",
    credentials: {
        username: { label: "Username", type: "text"},
        password: { label: "Password", type: "password" }
    },
    async authorize(credentials) {
        if(!credentials?.password || !credentials?.password)
            return null;
        const user = await prisma.user.findUnique({where:
        {
            username: credentials.username
        }})
        if(!user)
            return null;
        const doesPassMatch = await compare(credentials.password, user.hashedPassword);
        if(!doesPassMatch)
            return null;
        console.log(user);
        return {
            id: user.id,
            username: user.username

        }
    },
    
})

    
export const authOpt : AuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_URL,
    providers: [
        credProvider,
        
    ],
    callbacks:{
        jwt: async ({ token, user }) => {
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
        signOut: "/logout"
    
    },
    
}
const handler = NextAuth(authOpt);
export {handler as GET, handler as POST}