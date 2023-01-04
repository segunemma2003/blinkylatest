import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import HeaderImage from '../../../public/podcast-audience/bro.svg';

function CreatePodCastForm() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 px-12 py-8 pb-12">
      <div className=" relative h-80 w-3/4 justify-center">
        <Image
          alt="tt"
          src={HeaderImage}
          className="rounded-full object-contain md:rounded"
          layout="fill"
        />
      </div>
      <h1 className="text-center text-2xl font-bold">
        Create new podcast from your twitter thread
      </h1>
      <div className="w-full">
        <div className="relative w-full justify-center text-black focus:text-black">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:shadow focus:outline-none"
            >
              <svg
                fill="none"
                color="gray"
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
            className="w-full rounded-full border border-gray-200 bg-[#FAFAFA] py-2 pl-10 text-sm text-black 
                    focus:bg-white focus:outline-none"
            placeholder="Paste Twitter thread or recorded space’s link...."
          />
        </div>
        <Link
          href="/"
          className="grid  justify-center place-self-center pl-8 text-center text-xs underline"
        >
          Use custom text
        </Link>
      </div>
      <div className="group flex flex-row space-x-2">
        <select className="w-fit rounded-full border border-[#7749F8]  px-4 py-3 text-sm text-[#7749F8]">
          <option>Select Voice</option>
        </select>
        <select className="w-fit rounded-full border border-[#7749F8] px-4 py-3 text-sm text-[#7749F8]">
          <option>Select Language</option>
        </select>
        <button className="w-1/3 rounded-full bg-[#7749F8] px-4 py-3 text-sm text-white">
          Generate
        </button>
      </div>
    </div>
  );
}

export default CreatePodCastForm;
