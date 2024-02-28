import { loginUserSchema } from "@/utils";
import { InferType } from "yup";



export interface ILoginUser{
    email:string,
    password:string
}


export interface UserLoginResp {
    id: 6349,
    email: string,
    avatar: string,
    phoneNumber: string,
    name: string,
    accessToken: string
}
export type LoginUserInput = InferType<typeof loginUserSchema>


