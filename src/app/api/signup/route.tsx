import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
export async function POST(req:Request) {
    const err : SignUpFormData = {
        username: "",
        password: "",
        confirmPassword: ""
    }
    const body : SignUpFormData =  await req.json();
    const prisma = new PrismaClient;
    try {
        const {username, password, confirmPassword} = body;
        if(!username)
            err.username = "Please provide your username"
        if(username.length < 5 || username.length > 15)
            err.username = "Please provide correct username. Username should have between 5 and 15 characters"
        if(!password)
            err.password = "Please provide your password"
        if(password.length < 5 || password.length > 20)
            err.password = "Please probide corrent password which has at least 5 characters and less then 20 characters";
        if(password !== confirmPassword)
            err.confirmPassword = "Your passwords does not match." 
        if(Object.values(err).some((v)=>v))
            throw new Error(JSON.stringify(err))
        const hashPassword = await bcrypt.hash(body.password, 12);
        const user = await prisma.user.create({data: {
            username: body.username,
            hashedPassword: hashPassword
        }});
        
        return NextResponse.json<JSONResponse>({
            status: "success",
            message: "User created"
        }, {status: 200})  
        
    } catch (error) {
        console.log(error);
        if(error instanceof PrismaClientKnownRequestError)
        {
            switch (error.code) {
                case 'P2002':
                    err.username = "Username already exists. Please provide diffrent username. "
                    break;
                default:
                    break;
            }
        }
        
        return NextResponse.json<JSONResponse>({
            status: "failed",
            message: err
        }, {status: 400})
    } 
}