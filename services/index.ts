import { TOKEN } from "@/constants";
import { decodeAndVerifyToken, getCookieValue } from "@/utils";
import axios, { AxiosResponse } from "axios";
import test from "node:test";

export const http = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_HOST,
    timeout:3000,

})



http.interceptors.request.use(
    (config) => {

    const assetsToken = getCookieValue(TOKEN.SESSION_TOKEN)
      
    if(assetsToken){
      http.defaults.headers.common["Authorization"] = `Bearer ${assetsToken}`
    }
      return config;
    },
    (error) => {
      // Xử lý lỗi khi gửi request
      return Promise.reject(error);
    }
  );

http.interceptors.response.use((configs:AxiosResponse<any>)=>{
    return configs.data
},//error
(error)=>{
    return Promise.reject(error);
})



http.defaults.headers.common["TokenCybersoft"] = process.env.NEXT_PUBLIC_TOKEN_CYBERSOFT

export * from "./user"