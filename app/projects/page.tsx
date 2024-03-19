

import { CLientLayout, Card } from "@/components"
import { LinkPage } from "@/constants"
import { LoadingContext } from "@/contexts/loading"
import { IProject } from "@/models"
import { ProjectsPage } from "@/modules"
import ProjectsFilter from "@/modules/projects/filter"
import { getUsersAPI } from "@/services"
import { getProjectListAPI } from "@/services"
import Link from "next/link"
import toast from "react-hot-toast"


const fetchDataProject =  async (value:string)=>{

  try {
    const data = await getProjectListAPI(value)
    if(data && Array.isArray(data.content)){
      return data.content
    }
    return []
  }catch(_){
    return []
  }
}

 async function Projects() {
  const data:IProject[] | null = await fetchDataProject('')
  
  return (
    <CLientLayout>
      <ProjectsPage dataTable={data || null} />
    </CLientLayout>
  )
}

export default Projects