/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import React from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Table3 from '@/components/Table3';

const Temple = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Home - Blinky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex h-auto  flex-row py-4">
        <Sidebar />
        <div className="h-full w-10/12 justify-between bg-[#E5E5E5]  px-4 py-2 ">
          <div className="flex flex-col space-y-8 bg-white px-8 py-6">
            <div className="flex flex-row justify-between">
              <h4 className="text-1xl font-semibold">Choose Template</h4>
            </div>
            <div className="flex flex-col  space-y-4">
              <Table3 show={true} />
              <div className="flex justify-end">
                <button className="rounded-lg bg-[#7749F8] px-6 py-2 text-white shadow-lg">
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temple;
