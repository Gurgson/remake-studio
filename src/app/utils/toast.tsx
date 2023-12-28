import Image from "next/image";
import { toast } from "react-toastify";

export const warnUnsupported = ()=>toast("Feature not supported", {type: "warning"})
export const toastMessage = (mess: string)=>{
    toast(mess, {
        type: "info", 
        icon: <Image alt="logo" src="/logo-empty-black.svg" height={75} width={75} className=""/>

    })
}