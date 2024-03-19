import { HTTPResponse, IProject } from "@/models";
import { http } from ".";


export const getProjectListAPI =  async (params: string)=> {
    try {
      const resp:HTTPResponse<Array<IProject>> = await http.get(`api/Project/getAllProject??keyword=${params}`)
  
      return resp
  
    } catch (error:any) {
      throw new Error(error);
    }
  };