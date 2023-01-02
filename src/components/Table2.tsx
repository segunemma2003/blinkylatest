import React from 'react';
import { BiDotsVerticalRounded, BiDownload, BiEdit } from 'react-icons/bi';
import { GiSoundWaves } from 'react-icons/gi';
import { IoArrowRedoOutline } from 'react-icons/io5';

interface Props {
  show: boolean;
}

function Table2({ show }: Props) {
  return (
    <>
      <table className={`${show ? 'block' : 'hidden'} table-auto`}>
        <thead>
          <tr className="bg-[#EFEFEF]">
            <th className="p-4">
              <input type="checkbox" className="" />
            </th>
            <th className="px-16 py-4">Title</th>
            <th className="px-8 py-4">Length</th>
            <th className="px-8 py-4">Status</th>
            <th className="px-8 py-4">Date</th>
            <th className="px-12 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm">
            <td className="items-center justify-center px-4 py-8">
              <input type="checkbox" className="" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 px-16 py-4">
              <div className="h-fit w-fit rounded-full bg-[#EB5757] p-2">
                <GiSoundWaves className="h-4 w-4" />
              </div>
              Podcast Episode 1
            </td>
            <td className="items-center justify-center px-8 py-4">02:34</td>
            <td className="items-center justify-center px-8 py-4">
              <div className="w-fit rounded-full bg-[#56C456] px-4 py-2 text-center">
                Published
              </div>
            </td>
            <td className=" items-center justify-center px-8 py-4">
              01/06/2022
            </td>
            <td className="flex flex-row items-center justify-center space-x-4 px-12 py-4">
              <button>
                <BiEdit className="h-4 w-4 text-[#7749F8]" />
              </button>
              <button>
                <BiDownload className="h-4 w-4 text-[#56C456]" />
              </button>
              <button>
                <IoArrowRedoOutline className="h-4 w-4 text-[#0066FF]" />
              </button>
              <button>
                <BiDotsVerticalRounded className="h-4 w-4 text-[#000000]" />
              </button>
            </td>
          </tr>
          <tr className="text-sm">
            <td className="items-center justify-center px-4 py-8">
              <input type="checkbox" className="" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 px-16 py-4">
              <div className="h-fit w-fit rounded-full bg-[#EB5757] p-2">
                <GiSoundWaves className="h-4 w-4" />
              </div>
              Podcast Episode 1
            </td>
            <td className="items-center justify-center px-8 py-4">02:34</td>
            <td className="items-center justify-center px-8 py-4">
              <div className="w-fit rounded-full bg-[#56C456] px-4 py-2 text-center">
                Published
              </div>
            </td>
            <td className=" items-center justify-center px-8 py-4">
              01/06/2022
            </td>
            <td className="flex flex-row items-center justify-center space-x-4 px-12 py-4">
              <button>
                <BiEdit className="h-4 w-4 text-[#7749F8]" />
              </button>
              <button>
                <BiDownload className="h-4 w-4 text-[#56C456]" />
              </button>
              <button>
                <IoArrowRedoOutline className="h-4 w-4 text-[#0066FF]" />
              </button>
              <button>
                <BiDotsVerticalRounded className="h-4 w-4 text-[#000000]" />
              </button>
            </td>
          </tr>
          <tr className="text-sm">
            <td className="items-center justify-center px-4 py-8">
              <input type="checkbox" className="" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 px-16 py-4">
              <div className="h-fit w-fit rounded-full bg-[#EB5757] p-2">
                <GiSoundWaves className="h-4 w-4" />
              </div>
              Podcast Episode 1
            </td>
            <td className="items-center justify-center px-8 py-4">02:34</td>
            <td className="items-center justify-center px-8 py-4">
              <div className="w-fit rounded-full bg-[#56C456] px-4 py-2 text-center">
                Published
              </div>
            </td>
            <td className=" items-center justify-center px-8 py-4">
              01/06/2022
            </td>
            <td className="flex flex-row items-center justify-center space-x-4 px-12 py-4">
              <button>
                <BiEdit className="h-4 w-4 text-[#7749F8]" />
              </button>
              <button>
                <BiDownload className="h-4 w-4 text-[#56C456]" />
              </button>
              <button>
                <IoArrowRedoOutline className="h-4 w-4 text-[#0066FF]" />
              </button>
              <button>
                <BiDotsVerticalRounded className="h-4 w-4 text-[#000000]" />
              </button>
            </td>
          </tr>
          <tr className="text-sm">
            <td className="items-center justify-center px-4 py-8">
              <input type="checkbox" className="" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 px-16 py-4">
              <div className="h-fit w-fit rounded-full bg-[#EB5757] p-2">
                <GiSoundWaves className="h-4 w-4" />
              </div>
              Podcast Episode 1
            </td>
            <td className="items-center justify-center px-8 py-4">02:34</td>
            <td className="items-center justify-center px-8 py-4">
              <div className="w-fit rounded-full bg-[#56C456] px-4 py-2 text-center">
                Published
              </div>
            </td>
            <td className=" items-center justify-center px-8 py-4">
              01/06/2022
            </td>
            <td className="flex flex-row items-center justify-center space-x-4 px-12 py-4">
              <button>
                <BiEdit className="h-4 w-4 text-[#7749F8]" />
              </button>
              <button>
                <BiDownload className="h-4 w-4 text-[#56C456]" />
              </button>
              <button>
                <IoArrowRedoOutline className="h-4 w-4 text-[#0066FF]" />
              </button>
              <button>
                <BiDotsVerticalRounded className="h-4 w-4 text-[#000000]" />
              </button>
            </td>
          </tr>
          <tr className="text-sm">
            <td className="items-center justify-center px-4 py-8">
              <input type="checkbox" className="" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 px-16 py-4">
              <div className="h-fit w-fit rounded-full bg-[#EB5757] p-2">
                <GiSoundWaves className="h-4 w-4" />
              </div>
              Podcast Episode 1
            </td>
            <td className="items-center justify-center px-8 py-4">02:34</td>
            <td className="items-center justify-center px-8 py-4">
              <div className="w-fit rounded-full bg-[#56C456] px-4 py-2 text-center">
                Published
              </div>
            </td>
            <td className=" items-center justify-center px-8 py-4">
              01/06/2022
            </td>
            <td className="flex flex-row items-center justify-center space-x-4 px-12 py-4">
              <button>
                <BiEdit className="h-4 w-4 text-[#7749F8]" />
              </button>
              <button>
                <BiDownload className="h-4 w-4 text-[#56C456]" />
              </button>
              <button>
                <IoArrowRedoOutline className="h-4 w-4 text-[#0066FF]" />
              </button>
              <button>
                <BiDotsVerticalRounded className="h-4 w-4 text-[#000000]" />
              </button>
            </td>
          </tr>
          <tr className="text-sm">
            <td className="items-center justify-center px-4 py-8">
              <input type="checkbox" className="" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 px-16 py-4">
              <div className="h-fit w-fit rounded-full bg-[#EB5757] p-2">
                <GiSoundWaves className="h-4 w-4" />
              </div>
              Podcast Episode 1
            </td>
            <td className="items-center justify-center px-8 py-4">02:34</td>
            <td className="items-center justify-center px-8 py-4">
              <div className="w-fit rounded-full bg-[#56C456] px-4 py-2 text-center">
                Published
              </div>
            </td>
            <td className=" items-center justify-center px-8 py-4">
              01/06/2022
            </td>
            <td className="flex flex-row items-center justify-center space-x-4 px-12 py-4">
              <button>
                <BiEdit className="h-4 w-4 text-[#7749F8]" />
              </button>
              <button>
                <BiDownload className="h-4 w-4 text-[#56C456]" />
              </button>
              <button>
                <IoArrowRedoOutline className="h-4 w-4 text-[#0066FF]" />
              </button>
              <button>
                <BiDotsVerticalRounded className="h-4 w-4 text-[#000000]" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table2;
