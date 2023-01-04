/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable tailwindcss/no-custom-classname */
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

import Passport from '../../public/icon/passport.svg';

const Settings = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Home - Blinky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex h-auto  flex-row py-4">
        <Sidebar />
        <div className="w-10/12 justify-between bg-[#E5E5E5]  px-4 py-2">
          <div className="h-full bg-white px-12 py-16">
            <div className="flex w-1/2 flex-col space-y-6">
              <div className="border-b">
                <h4>Account Settings</h4>
              </div>
              <div className="flex flex-row justify-between">
                <h4>Profile</h4>
                <button className="rounded-full border border-purple-600 px-16 text-sm text-purple-600">
                  Edit
                </button>
              </div>
              <div className=" relative h-24 w-24 items-center">
                <Image
                  src={Passport}
                  className="rounded-full object-contain md:rounded"
                  layout="fill"
                  alt="hj"
                />
              </div>
              <div className="flex flex-col space-y-6 border-b-2 pt-8 pb-16">
                <div className="flex flex-row items-center space-x-3">
                  <label>Name</label>
                  <input
                    placeholder="Adeyinka Prime"
                    className="h-8 w-3/4 rounded border bg-[#F8F8F8] px-4"
                  />
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <label>Email</label>
                  <input
                    placeholder="mrprince@gmail.com"
                    className="h-8 w-3/4 rounded border bg-[#F8F8F8] px-4"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <h4>Password</h4>
                <button className="rounded-full border border-purple-600 px-4 text-sm text-purple-600">
                  Update password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
