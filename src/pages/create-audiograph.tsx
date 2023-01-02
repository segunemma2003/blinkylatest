/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import React, { useState } from 'react';

import Header from '@/components/Header';
import MyTemplate from '@/components/MyTemplate';
import MyTranscript from '@/components/MyTranscript';
import Sidebar from '@/components/Sidebar';
import Stylepage from '@/components/Stylepage';

const CreateAudiograph = () => {
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

            <div className="flex flex-col">
              <div className="border-1 flex flex-row gap-3 border-b">
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
                  Style{' '}
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
                  Transcript{' '}
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
                  Template{' '}
                </button>
              </div>
              <Stylepage show={show === 'tab1'} />
              <MyTranscript show={show === 'tab2'} />
              <MyTemplate show={show === 'tab3'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAudiograph;
