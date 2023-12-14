

import { User, getServerSession } from "next-auth";
import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { SlLogout } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import Button from "@/components/Button/Button";
import { ButtonSize } from "@/components/Button/Button-types";

const AuthPanel = async () => {
    const session  = await getServerSession(authOpt);
    // console.log(session);
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

export default AuthPanel