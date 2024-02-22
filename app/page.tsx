
import { CLientLayout, Card, DelIcon, EditIcon, Pagination } from "@/components"
import { LinkPage } from "@/constants"
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
          {/* list project  */}
          <div className="grid p-4">
            
          <table className="table table-auto hover:table-fixed">
              <thead >
                <tr className="bg-[#e5e5e5]  table-row align-middle">
                  <td className="table-col font-bold">STT</td>
                  <td className="table-col font-bold">Tên dự án</td>
                  <td className="table-col font-bold">Tên danh mục</td>
                  <td className="table-col font-bold">Bí danh</td>
                  <td className="table-col font-bold">Người tạo</td>
                  <td className="table-col font-bold">Thành viên</td>
                  <td className="table-col font-bold">Mô tả</td>
                  <td className="table-col font-bold">Thao tác</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-col">
                    1
                  </td>
                  <td className="table-col">
                    <Link href={`/projects/123`}>
                      Internal accounting
                    </Link>
                  </td>
                  <td className="table-col">Website</td>
                  <td className="table-col">1233</td>
                  <td className="table-col">Truong</td>
                  <td className="table-col">
                    <ul>
                      <li>
                        truong
                      </li>
                      <li>
                        vy
                      </li>
                    </ul>
                  </td>
                  <td className="table-col">mo ta ....</td>
                  <td className="table-col">
                    <div className="flex items-center">
                      <button className="border hover:bg-slate-300 font-bold py-2 px-4 rounded ">
                        <DelIcon className="w-4 text-white" />
                      </button>
                      <button className="border hover:bg-slate-300 font-bold py-2 px-4 rounded ml-2">
                        <EditIcon className="w-4 text-white" />
                      </button>
                    </div>
                  </td>

                </tr>


              </tbody>
            </table>
            <Pagination className={"col-span-3"} />
          </div>
        </Card>
      </div>


    </CLientLayout>

  )
}
