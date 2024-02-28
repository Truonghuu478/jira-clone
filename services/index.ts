import axios, { AxiosResponse } from "axios";

export const http = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_HOST,
    timeout:1000,

})

http.interceptors.request.use(
    (config) => {
      // Thêm logic xử lý trước khi gửi request (nếu cần)
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