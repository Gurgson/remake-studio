import { ChangeEvent, HTMLInputTypeAttribute } from "react"

export type TStandardInputProps<T> = {
    placeholder?: string 
    handleChange?: (e: ChangeEvent<T>)=>void,
    errorMessage?: string 
}
export type TTextInputProps = TStandardInputProps<HTMLInputElement> & {
    type: HTMLInputTypeAttribute 
}
export type TSelectProps =  TStandardInputProps<HTMLSelectElement> & {
    options: Array<string>
}

export interface IInput<T> {
    className?: string,
    props: T 

}