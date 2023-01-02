import Link from 'next/link';
import React from 'react';
import { BiMicrophone } from 'react-icons/bi';
import { BsSoundwave } from 'react-icons/bs';
import { CiMicrophoneOn } from 'react-icons/ci';
import { GiSoundWaves } from 'react-icons/gi';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

function Sidebar() {
  return (
    <div className="w-2/12 space-y-72  py-8 px-2">
      <div className="flex flex-col space-y-2 text-sm">
        <Link
          className="flex flex-row items-center gap-2
              rounded-full px-2 py-3 text-[#333333] hover:bg-[#7749F8] hover:text-white hover:opacity-80"
          href="/"
        >
          <MdOutlineDashboardCustomize className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          className="flex flex-row items-center gap-2
              rounded-full px-2 py-3 text-[#333333] hover:bg-[#7749F8] hover:text-white hover:opacity-80"
          href="/"
        >
          <CiMicrophoneOn className="h-4 w-4" />
          Create New Podcast
        </Link>
        <Link
          className="flex flex-row items-center gap-2
              rounded-full px-2 py-3 text-[#333333] hover:bg-[#7749F8] hover:text-white hover:opacity-80"
          href="/"
        >
          <BiMicrophone className="h-4 w-4" />
          All Podcasts
        </Link>
        <Link
          className="flex flex-row items-center gap-2
             rounded-full px-2 py-3 text-[#333333] hover:bg-[#7749F8] hover:text-white hover:opacity-80"
          href="/"
        >
          <GiSoundWaves className="h-4 w-4" />
          Create New Audiograph
        </Link>
        <Link
          className="flex flex-row items-center gap-2
              rounded-full px-2 py-3 text-[#333333] hover:bg-[#7749F8] hover:text-white hover:opacity-80"
          href="/"
        >
          <BsSoundwave className="h-4 w-4" />
          All Audiographs
        </Link>
      </div>
      <div className="space-y-4 p-4">
        <div className="flex flex-col bg-[#FAFAFA] px-3 py-2 text-sm">
          <p>Adeyinka Prince</p>
          <p>mrprince@gmail.com</p>
        </div>
        <div className="flex flex-col space-y-3 px-3 py-4 shadow-lg">
          <Link href="/">Settings</Link>
          <Link href="/">Help</Link>
          <Link href="/">Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
