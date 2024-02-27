import { object, string } from "yup";

export const loginUserSchema = object({
    email: string().email("Vui lòng nhập email thích hợp").required("Vui lòng nhập email"),
    password: string().required("Vui lòng nhập mật khẩu").min(6, 'mật khẩu phải trên 6 kí tự ')
  });