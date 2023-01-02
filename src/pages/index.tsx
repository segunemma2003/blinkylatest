/* eslint-disable eqeqeq */
/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ImBin } from 'react-icons/im';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Table1 from '@/components/Table1';
import Table2 from '@/components/Table2';
import Table3 from '@/components/Table3';

import HeaderImage from '../../public/podcast-audience/bro.svg';

const Index = () => {
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
        <div className="h-full w-10/12 justify-between bg-[#E5E5E5]  px-4 py-2">
          <div className="mb-4 flex flex-row bg-[#ffffff] p-16">
            <div className="flex w-1/2 flex-col space-y-6">
              <h3 className="text-4xl">
                Convert your twitter threads or spaces into a podcast
              </h3>
              <div>
                <div className="focus-within:text-black-900 relative w-full text-black">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="focus:shadow-outline p-1 focus:outline-none"
                    >
                      <svg
                        fill="none"
                        color="grey"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="border-1 bg-grey-900 border-grey w-full 
                    rounded-full border border-[#010101] py-2 pl-10 text-sm text-black 
                    focus:bg-white focus:text-gray-900 focus:outline-none"
                    placeholder="Paste Twitter thread or recorded space’s link...."
                  />
                </div>
                <Link href="/" className="pl-8 text-xs underline">
                  Use custom text
                </Link>
              </div>
              <div className="group flex flex-row space-x-3">
                <select className="border-1 rounded-full border border-[#7749F8] px-4 py-3 text-[#7749F8]">
                  <option>Select Voice</option>
                </select>
                <select className="border-1 rounded-full border border-[#7749F8] px-4 py-3 text-[#7749F8]">
                  <option>Select Language</option>
                </select>
                <button className="w-64 rounded-full bg-[#7749F8] px-4 py-3 text-white">
                  Generate
                </button>
              </div>
            </div>
            <div className="w-1/2 pl-5">
              <div className=" relative h-full w-full justify-center">
                <Image
                  src={HeaderImage}
                  className="rounded-sm object-contain md:rounded"
                  layout="fill"
                  alt="hj"
                />
              </div>
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

export default Index;
