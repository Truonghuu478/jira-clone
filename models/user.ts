import { loginUserSchema } from "@/utils";
import { InferType } from "yup";



export interface ILoginUser{
    email:string,
    password:string
}
export type LoginUserInput = InferType<typeof loginUserSchema>
