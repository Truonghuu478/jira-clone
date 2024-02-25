import React from 'react'

 function ProjectsFilter() {
  return (
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
  )
}

export default ProjectsFilter