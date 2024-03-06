import { IProjectCategory } from "@/models"



export const LinkPage = {
  projects: "/"
}

export const LANGUAGES = [
  { id: 'VN', label: "Tiếng việt", url: 'https://img.icons8.com/?size=48&id=60257&format=png' },
  { id: 'EN', label: "English", url: 'https://img.icons8.com/?size=48&id=15532&format=png' }
]


export const TOKEN = {
  SESSION_TOKEN:'session_token'
}
export const CONTENT: Array<IProjectCategory> = [
  {
    "id": 0,
    "projectCategoryName": "Tất cả"
  },
  {
    "id": 1,
    "projectCategoryName": "Dự án web"
  },
  {
    "id": 2,
    "projectCategoryName": "Dự án phần mềm"
  },
  {
    "id": 3,
    "projectCategoryName": "Dự án di động"
  }
]