

import { CLientLayout, Card } from "@/components"
import { LinkPage } from "@/constants"
import { ProjectsTab } from "@/modules"
import ProjectsFilter from "@/modules/projects/filter"
import Link from "next/link"

export default function Home() {


  return (
    <CLientLayout>

      <div className="">
        {/* Link  */}
        <div className="bg-[#eeeeee] py-2 px-3">
          <ul className="flex">
            <li><Link className="text-primary_700" href={LinkPage.projects}>
              Trang chủ</Link> </li> <span className="px-2">/</span>
            <li className="text-gray-600">Danh sách dự án</li>
          </ul>
        </div>
        {/* card  */}
        <Card>
          {/* Header Card  */}
          <div className="flex justify-between items-center bg-secondary_700 text-white p-4 rounded-t-lg overflow-hidden">
            <h2 className="text-2xl">Danh sách dự án</h2>
            <div className="flex">
              <button className="bg-blue-500 hover:bg-blue-700 py-[6px] px-[16px] rounded min-w-[64px]">Thêm dự án</button>
            </div>
          </div>
          {/* filter  */}
          <ProjectsFilter/>

        </Card>
        <Card className="">
          <ProjectsTab
            dataTable={[]} />

        </Card>
      </div>


    </CLientLayout>

  )
}

