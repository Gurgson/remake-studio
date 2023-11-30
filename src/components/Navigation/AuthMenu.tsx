
import { signIn, signOut } from "next-auth/react";
import Button from "../Button/Button";
import { ButtonType, OutlinedButtonColor } from "@/enums/Button";
import { getServerSession } from "next-auth";
import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { SlLogout } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
const AuthMenu = async () => {
    const session = await getServerSession(authOpt)
    console.log("client",session)
    return (
        <div className="flex gap-8">
            {
                !session && 

            <Link href="/api/auth/signin">
                    <Button props={{type:ButtonType.fill, isSmall: true}}>Sign In</Button>
            </Link>
            }
            {
                session && <>
                    <VscAccount className=" w-8 h-8  hover:text-primary-accent cursor-pointer"/>

                    <Link href="/api/auth/signout">
                        <SlLogout className=" w-8 h-8  hover:text-primary-accent cursor-pointer"/>
                    </Link>
                </>
                
            }
        </div>
  )
}

export default AuthMenu