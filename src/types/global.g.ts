type SignUpFormData =  {
    username:string,
    password: string,
    confirmPassword: string
}

type SignInFormData =  {
    username:string,
    password: string,
}
type ContactFormData =  {
    firstName:string,
    lastName: string,
    mail: string,
    subject: string,
    message: string,
}
type JSONResponse<T>= {
    status: "failed" | "success",

    message: T
}

