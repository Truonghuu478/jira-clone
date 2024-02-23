

import { CLientLayout, Card } from "@/components"
import { LinkPage } from "@/constants"
import { ProjectTabs } from "@/modules"
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
          <form className="p-3">
            <div className="grid grid-cols-6 gap-4">
              <div className="w-full">
                <label className="mb-2 block font-bold">
                  Tên dư án
                </label>
                <input className="block p-2 border rounded w-full" type="string" value="" placeholder="Nhập tên dự án" />
              </div>
              <div className="">
                <label className="mb-2 block font-bold">
                  Tên danh mục
                </label>
                <input className="block p-2 border rounded w-full" type="string" value="" placeholder="Nhập tên danh mục" />
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button className="mr-3 bg-btn_reset hover:bg-btn_reset_hover py-[6px] px-[16px] rounded min-w-[64px]">
                Làm mới
              </button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 py-[6px] px-[16px] rounded min-w-[64px] text-white">
                Áp dụng
              </button>
            </div>
          </form>

        </Card>
        <Card className="">
          <ProjectTabs
            dataTable={[]} />

        </Card>
      </div>


    </CLientLayout>

  )
}


const getServerSideProps = (async (ctx:any)=>{
    const props:any = {}
    props.projects  = []


    const slug = ctx.params
    console.log('getServerSideProps',slug);

    return {
      props
    }
  }
)