import axios from "axios";

export const http = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_HOST,
    timeout:1000,

})

// http.interceptors.request.use((configs)=>{
//     return configs
// },//error
// (error)=>{
//     return error
// })

http.interceptors.response.use((configs)=>{
    return configs
},//error
(error)=>{
    console.log('response',error);
    
    return error
})

http.defaults.headers.common["TokenCybersoft"] = process.env.NEXT_PUBLIC_TOKEN_CYBERSOFT

 
export {default as UserServices} from "./user"