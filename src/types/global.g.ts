type SignUpFormData =  {
    username:string,
    password: string,
    confirmPassword: string
}

type SignInFormData =  {
    username:string,
    password: string,
}
type JSONResponse = {
    status: "failed" | "success",
    message: unknown
}

