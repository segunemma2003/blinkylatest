import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function login() {
  return (
    <div className="h-screen">
      <Head>
        <title>Home - Blinky</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid h-screen place-items-center bg-[#FFFFFF]">
        <div className="flex h-fit w-8/12  flex-row shadow-lg">
          <div className="w-1/2 space-y-16 bg-gradient-to-br from-[#43CBFF] to-[#7749F8] py-28 px-12">
            <h1 className="text-2xl font-semibold text-[#7749F8]">Blinky</h1>
            <h4 className="text-3xl font-bold text-white">
              Convert your twitter threads or spaces into a podcast.
            </h4>
          </div>
          <div className="w-1/2 py-28 px-12">
            <div className="w-10/12 space-y-3">
              <p className="text-sm">Welcome back! 👋</p>
              <p className="text-base font-semibold">Login to your account </p>
              <div className="space-y-2">
                <label className="text-sm">Email</label>
                <input
                  className="w-full rounded border-2  px-4 py-2 text-black"
                  placeholder="Please enter your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Password</label>
                <input
                  className="w-full rounded border-2  px-4 py-2 text-black"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <Link
                href="/register"
                className="text-xs text-[#0066FF]  underline"
              >
                Forgot password
              </Link>
              <button className="w-full rounded-full bg-[#7749F8] px-12 py-4 text-white">
                Login
              </button>
              <div className="flex flex-row justify-center space-x-2">
                <p>New user ?</p>
                <Link href="/register" className="underline">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
