/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

import Control from '../../public/icon/control.svg';
import Play from '../../public/icon/play.svg';

const CreatePodcast = () => {
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
          <div className="flex flex-col space-y-5 bg-white px-8 py-6">
            <div className="flex flex-row justify-between">
              <h4 className="text-1xl font-semibold">Edit Audiograph</h4>
              <button
                className="border-1 flex flex-row items-center gap-4 rounded-full 
              border bg-purple-100 px-3 py-2 text-[#7749F8]"
              >
                Cancel
              </button>
            </div>

            <div className="flex flex-col border-t-2">
              <div className={`flex flex-row`}>
                <div className="flex w-1/2 flex-col  space-y-8 border-r-2 py-8 px-2">
                  <div className="flex flex-col space-y-8">
                    <label className="font-semibold">Transcript text</label>
                    <input className="h-8 rounded-lg border-2 bg-[#F8F8F8] p-4 shadow" />
                  </div>
                  <div className="flex flex-col space-y-8">
                    <label className="font-semibold">Transcript text</label>
                    <textarea className="h-96 rounded-sm bg-[#F8F8F8] p-4">
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type
                    </textarea>
                  </div>
                </div>
                <div className="w-1/2  space-y-48 px-8 py-16">
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-2">
                      <label>Voice </label>
                      <select className="rounded-full border-2 px-2 py-3">
                        <option>Select voice </option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label>Language </label>
                      <select className="rounded-full border-2 px-2 py-3">
                        <option>Select Language </option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label>Speed </label>
                      <div className="group flex flex-row justify-between space-x-2">
                        <div className="h-12 w-1/4 rounded-full border-2 px-4 py-2 text-center">
                          0.5X
                        </div>
                        <div className="h-12 w-1/4 rounded-full border-2 px-4 py-2 text-center">
                          1X
                        </div>
                        <div className="h-12 w-1/4 rounded-full border-2 px-4 py-2 text-center">
                          1.5X
                        </div>
                        <div className="h-12 w-1/4 rounded-full border-2 px-4 py-2 text-center">
                          2X
                        </div>
                      </div>
                    </div>
                    <button className="w-full rounded-full bg-[#7749F8] py-2 font-semibold text-white">
                      Generate
                    </button>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row items-center">
                      <div className=" relative h-4 w-2/12 justify-center">
                        <Image
                          src={Play}
                          className="rounded-full object-contain md:rounded"
                          layout="fill"
                          alt="hj"
                        />
                      </div>
                      <p>00:00</p>
                      <div className=" relative h-4 w-6/12 justify-center">
                        <Image
                          src={Control}
                          className="rounded-full object-contain md:rounded"
                          layout="fill"
                          alt="hj"
                        />
                      </div>
                      <p className="ml-2">20:12</p>
                    </div>
                    <div className="flex flex-row justify-center space-x-8">
                      <button className="w-1/3 whitespace-nowrap rounded-full border border-purple-500 px-3 py-2 text-purple-500 hover:bg-purple-800 hover:text-white">
                        Save Changes
                      </button>
                      <button className="w-1/3 whitespace-nowrap rounded-full border border-purple-500 px-3 py-2 text-purple-500 hover:bg-purple-800 hover:text-white">
                        Download
                      </button>
                      <button className="w-1/3 whitespace-nowrap rounded-full border border-purple-500 px-3 py-2 text-purple-500 hover:bg-purple-800 hover:text-white">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePodcast;
