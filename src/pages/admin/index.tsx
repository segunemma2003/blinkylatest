/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import React, { useState } from 'react';
import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai';
import { BsFillArrowDownCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { ImBin } from 'react-icons/im';

import Header from '@/components/Header';
import MultipleLineChart from '@/components/MultipleLineChart';
import Sidebar from '@/components/Sidebar';
import SingleLineChart from '@/components/SingleLineChart';
import Table1 from '@/components/Table1';
import Table2 from '@/components/Table2';
import Table3 from '@/components/Table3';

const AdminIndex = () => {
  const [show, setShow] = useState('tab1');

  return (
    <div className="h-screen">
      <Head>
        <title>Home - Blinky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex h-auto  flex-row py-4">
        <Sidebar />
        <div className="h-full w-10/12 space-y-4 bg-[#E5E5E5]  p-4">
          <div className="flex flex-row justify-evenly  whitespace-nowrap">
            <div className=" w-[9%] space-y-2 rounded-lg bg-white py-6 px-4 text-center">
              <div className="flex items-center justify-center bg-[#d9cff4] pt-2">
                <AiOutlinePlus className="h-12 w-12" color="#7749F8" />
              </div>
              <p>Add New</p>
            </div>
            <div className="flex w-[29.5%] flex-row space-x-2 whitespace-nowrap bg-white py-4">
              <div className="flex flex-col p-4">
                <p className="text-base">All Users</p>
                <p className="text-3xl">350</p>
                <p className="text-sm">50 new in the last 1 day</p>
              </div>
              <div className="flex bg-[#c9e0f8] p-4">
                <CiUser className="h-16 w-16" color="#007BFF" />
              </div>
            </div>
            <div className="flex w-[29.5%]  flex-row space-x-2 whitespace-nowrap bg-white py-4">
              <div className="flex flex-col p-4">
                <p className="text-base">All Users</p>
                <p className="text-3xl">350</p>
                <p className="text-sm">50 new in the last 1 day</p>
              </div>
              <div className="flex bg-[#c9e0f8] p-4">
                <CiUser className="h-16 w-16" color="#007BFF" />
              </div>
            </div>
            <div className="flex w-[29.5%] flex-row space-x-2 whitespace-nowrap bg-white py-4">
              <div className="flex flex-col p-4">
                <p className="text-base">All Users</p>
                <p className="text-3xl">350</p>
                <p className="text-sm">50 new in the last 1 day</p>
              </div>
              <div className="flex bg-[#c9e0f8] p-4">
                <CiUser className="h-16 w-16" color="#007BFF" />
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-row space-x-2">
            <div className="flex h-max w-4/6 flex-col space-y-4 bg-white py-8 px-4">
              <div className="flex flex-row justify-between">
                <h4>Usage Trend</h4>
                <div className="flex flex-row items-center space-x-2 rounded-lg bg-[#c5b3f8] p-2 text-[#7749F8]">
                  <AiOutlineCalendar />
                  <p>This Month </p>
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <h2 className="text-4xl font-semibold">260</h2>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center space-x-1 text-[#05CD99]">
                    <BsFillArrowDownCircleFill color="#05CD99" />
                    <p>+2.45%</p>
                  </div>
                  <p className="text-xs">260 Users this month</p>
                </div>
              </div>
              <SingleLineChart />
            </div>
            <div className="w-2/6 space-y-2 rounded-sm bg-white py-4 px-2">
              <div className="flex flex-row justify-between">
                <h4>New Users </h4>
                <BsThreeDotsVertical />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2 ">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
              </div>
              <button className="w-full rounded-lg bg-[#c6b6f3] py-2 px-12 text-[#7749F8] shadow">
                {' '}
                See all{' '}
              </button>
            </div>
          </div>
          <div className="mb-4 flex flex-row space-x-2">
            <div className="flex h-max w-4/6 flex-col space-y-4 bg-white py-8 px-4">
              <div className="flex flex-row justify-between">
                <h4>Projects</h4>
                <div className="flex flex-row items-center space-x-2 rounded-lg bg-[#c5b3f8] p-2 text-[#7749F8]">
                  <AiOutlineCalendar />
                  <p>This Month </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row items-center space-x-2 border-l-2 border-[#2F80ED] p-2">
                  <div className="flex flex-col items-center justify-start">
                    <p className="text-sm">All Projects </p>
                    <h2 className="text-2xl font-semibold">460</h2>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-1 text-[#05CD99]">
                      <BsFillArrowDownCircleFill color="#05CD99" />
                      <p>+2.45%</p>
                    </div>
                    <p className="text-xs">260 projects this month</p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 border-l-2 border-[#F2994A] p-2">
                  <div className="flex flex-col items-center justify-start">
                    <p className="text-sm">Podcasts</p>
                    <h2 className="text-2xl font-semibold">460</h2>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-1 text-[#05CD99]">
                      <BsFillArrowDownCircleFill color="#05CD99" />
                      <p>+2.45%</p>
                    </div>
                    <p className="text-xs">260 projects this month</p>
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-2 border-l-2 border-[#EB5757] p-2">
                  <div className="flex flex-col items-center justify-start">
                    <p className="text-sm">Audiographs </p>
                    <h2 className="text-2xl font-semibold">460</h2>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-1 text-[#05CD99]">
                      <BsFillArrowDownCircleFill color="#05CD99" />
                      <p>+2.45%</p>
                    </div>
                    <p className="text-xs">260 projects this month</p>
                  </div>
                </div>
              </div>
              <MultipleLineChart />
            </div>
            <div className="w-2/6 space-y-2 rounded-sm bg-white py-4 px-2">
              <div className="flex flex-row justify-between">
                <h4>Top Users </h4>
                <BsThreeDotsVertical />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2 ">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className=" h-fit w-fit rounded-full bg-[#FD6585] p-2 text-base font-semibold text-white">
                    B
                  </div>
                  <div className="flex flex-col">
                    <p className="text-semibold text-sm">Benny Chagur </p>
                    <p className="text-xs">Member</p>
                  </div>
                </div>
              </div>
              <button className="w-full rounded-lg bg-[#c6b6f3] py-2 px-12 text-[#7749F8] shadow">
                {' '}
                See all{' '}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-5 bg-white px-8 py-6">
            <div className="flex flex-row justify-between">
              <h4 className="text-1xl font-semibold">
                {show == 'tab1'
                  ? 'Recent Projects'
                  : show == 'tab2'
                  ? 'Recent Podcasts'
                  : 'Recent Audiograph'}
              </h4>
              <button
                className="border-1 flex flex-row items-center gap-4 rounded-full 
              border bg-[#7749F8] px-3 py-2 text-white"
              >
                <ImBin className="h-4 w-4" />
                Delete
              </button>
            </div>
            <div className="flex flex-col  space-y-4">
              <div className="flex flex-row gap-3">
                <button
                  onClick={() => setShow('tab1')}
                  className={`
                     ${
                       show == 'tab1'
                         ? 'border-b border-[#7749F8] text-[#7749F8]'
                         : ''
                     }
                     border-1 px-6 py-2 transition hover:border-b hover:border-[#7749F8] hover:text-[#7749F8] active:border-[#7749F8] active:text-[#7749F8]
                     `}
                >
                  {' '}
                  All Projects{' '}
                </button>
                <button
                  onClick={() => setShow('tab2')}
                  className={`
                      ${
                        show == 'tab2'
                          ? 'border-b border-[#7749F8] text-[#7749F8]'
                          : ''
                      }
                      border-1 px-6 py-2 transition hover:border-b hover:border-[#7749F8] hover:text-[#7749F8] active:border-[#7749F8] active:text-[#7749F8]
                      `}
                >
                  {' '}
                  Podcasts{' '}
                </button>
                <button
                  onClick={() => setShow('tab3')}
                  className={`
                     ${
                       show == 'tab3'
                         ? 'border-b border-[#7749F8] text-[#7749F8]'
                         : ''
                     }
                     border-1 px-6 py-2 transition hover:border-b hover:border-[#7749F8] hover:text-[#7749F8] active:border-[#7749F8] active:text-[#7749F8]
                     `}
                >
                  {' '}
                  Audiograph{' '}
                </button>
              </div>
              <Table1 show={show == 'tab1'} />
              <Table2 show={show == 'tab2'} />
              <Table3 show={show == 'tab3'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
