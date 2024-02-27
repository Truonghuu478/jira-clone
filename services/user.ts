import { ILoginUser } from '@/models/user';
import { http } from '.';





 const UserServices = ()=>{
    signIn:async (data:ILoginUser)=>{
        try {
            const response = await http.post('api/Users/signin',data);
            return response.data;
          } catch (error) {
            throw new Error('Failed to fetch posts');
          }
    }
}

export default UserServices