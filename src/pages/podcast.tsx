/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import React from 'react';
import { ImBin } from 'react-icons/im';
import { useRecoilState, useRecoilValue } from 'recoil';

import Header from '@/components/Header';
import CreatePodcastModal from '@/components/modal/CreatePodcastModal';
import Sidebar from '@/components/Sidebar';
import Table1 from '@/components/Table1';

import { modalStatePodcast } from '../atoms/modelAtom';

const Podcast = () => {
  const showModal = useRecoilValue(modalStatePodcast);
  const [, setShowModal] = useRecoilState(modalStatePodcast);

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
          <div className="mb-4 flex flex-row justify-between bg-[#ffffff] p-16">
            <h1 className="text-2xl font-bold">Create new podcast</h1>
            <button
              onClick={() => setShowModal(true)}
              className="rounded-full bg-[#7749F8] px-8 py-2 text-white"
            >
              Create{' '}
            </button>
          </div>
          <div className="flex flex-col space-y-5 bg-white px-8 py-6">
            <div className="flex flex-row justify-between">
              <h4 className="text-1xl font-semibold">Podcast</h4>
              <button
                className="border-1 flex flex-row items-center gap-4 rounded-full 
              border bg-[#7749F8] px-3 py-2 text-white"
              >
                <ImBin className="h-4 w-4" />
                Delete
              </button>
            </div>
            <div className="flex flex-col  space-y-4">
              <Table1 show={true} />
            </div>
          </div>
          {showModal && <CreatePodcastModal />}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
