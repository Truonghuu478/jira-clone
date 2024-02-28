import  { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

// Giải mã token JWT
export const decodeAndVerifyToken = (token: string) => {
  try {
    const decodedToken: any = jwtDecode(token)
    const currentTime = Date.now() / 1000

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      toast.error("User đang hết hạn")
      return null
    }

    return decodedToken

  } catch (error) {
    toast.error("Lỗi khi giải mã và kiểm tra token:")
    return null;
  }
}

export const getCookieValue = (name: string): string | null => {
  const cookies = document.cookie.split(";"); 
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1)
    }
  }
  return null
}

export const saveSessionToCookie = (token: string) => {
    document.cookie = `session_token=${token}; secure; sameSite=strict`;
  }