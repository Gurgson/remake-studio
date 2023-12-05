
import Button from "../Button/Button";
import { getServerSession } from "next-auth";
import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { SlLogout } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { ButtonSize } from "../Button/Button-types";
const AuthMenu = async () => {
    const session = await getServerSession(authOpt)
    return (
        <div className="flex gap-8 grow sm:grow-0 justify-end">
            {
                !session && 

            <Link href="/api/auth/signin">
                    <Button props={{size: ButtonSize.small}}>Sign In</Button>
            </Link>
            }
            {
                session && <>
                    <Link href="/account">
                        <VscAccount className=" w-8 h-8  hover:text-primary-accent cursor-pointer"/>
                    </Link>
                    <Link href="/api/auth/signout">
                        <SlLogout className=" w-8 h-8  hover:text-primary-accent cursor-pointer"/>
                    </Link>
                </>
                
            }
        </div>
  )
}

export default AuthMenu