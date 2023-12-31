import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const icon = <Image alt="logo" src="/logo-empty-black.svg" height={75} width={75} className=""/>;
export const toastUnsupported = ()=>toast("Feature not supported", {type: "warning"})
export const toastMessage = (mess: string)=>{
    toast(mess, {
        type: "info", 
        icon: icon

    })
}
export const toastUnauthorized = ()=> toast(<p>You are not authorized, please sign in first</p>, {type: "warning", icon: icon} )