import Image from 'next/image';
import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';

import Passport from '../../public/icon/passport.svg';

function Header() {
  return (
    <div className="flex h-fit w-full flex-row px-3 py-4 pb-2">
      <div className="w-2/12 text-2xl font-semibold text-[#7749F8]">Blinky</div>
      <div className="flex w-10/12 flex-row justify-between px-3">
        <div className="relative text-black focus-within:text-zinc-900">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:shadow focus:outline-none"
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
            className="w-80 rounded-full border py-2 pl-10 text-sm text-black focus:bg-white focus:text-gray-900 focus:outline-none"
            placeholder="Search..."
          />
        </div>
        <div className="flex flex-row space-x-4">
          <IoIosNotificationsOutline className="h-6 w-6 place-self-center" />
          <div className="flex w-fit  flex-row items-center space-x-2 rounded-full border px-2">
            <div className=" relative h-8 w-8 justify-center">
              <Image
                src={Passport}
                className=" rounded-sm object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <p>Adeyinka Prince</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
