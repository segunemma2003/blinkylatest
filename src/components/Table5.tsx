import React from 'react';
import { BiDotsVerticalRounded, BiDownload, BiEdit } from 'react-icons/bi';
import { IoArrowRedoOutline } from 'react-icons/io5';

interface Props {
  show: boolean;
}

function Table5({ show }: Props) {
  return (
    <>
      <table className={`${show ? 'block' : 'hidden'} table-auto`}>
        <thead>
          <tr className="whitespace-nowrap bg-[#EFEFEF]">
            <th className="p-2">
              <input type="checkbox" className="rounded-full" />
            </th>
            <th className="px-8 py-6">Name</th>
            <th className="px-8 py-6">Email</th>
            <th className="p-4">Ip Address</th>
            <th className="p-4">Country</th>
            <th className="p-4">Date Joined</th>
            <th className="px-8 py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm">
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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
            <td className="items-center justify-center p-6">
              <input type="checkbox" className="rounded-full" />
            </td>
            <td className="flex flex-row items-center justify-center gap-2 whitespace-nowrap px-8 py-6">
              Adeyinka Prime
            </td>
            <td className="items-center justify-center px-8 py-6 ">
              Mrprime@gmail.com
            </td>
            <td className="items-center justify-center p-6">192.168.0.1</td>
            <td className=" items-center justify-center p-6">Canada</td>
            <td className=" items-center justify-center p-6">24/06/2022</td>
            <td className="flex flex-row items-center justify-center space-x-4 px-8 py-4">
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

export default Table5;
