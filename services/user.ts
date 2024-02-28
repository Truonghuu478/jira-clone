import { ILoginUser, UserLoginResp } from '@/models/user';
import { http } from '.';
import { HTTPResponse } from '@/models';



 export const signInAPI =  async (data: ILoginUser) => {
  try {
    const resp:HTTPResponse<UserLoginResp> = await http.post('api/Users/signin', data)

    if(resp && resp.content){
      return resp.content
    }

  } catch (error:any) {
    throw new Error(error.response?.data?.message || 'Đã có lỗi xảy ra khi đăng nhập');
  }
};

