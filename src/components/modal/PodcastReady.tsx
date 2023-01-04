import Image from 'next/image';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

import Control from '../../../public/icon/control.svg';
import Play from '../../../public/icon/play.svg';

function PodcastReady() {
  return (
    <div className="flex w-3/4  flex-col justify-center space-y-6 pb-32 text-center ">
      <div className="flex h-1/3 w-1/3 content-center items-center justify-center self-center rounded-full bg-[#e0daf0]  p-3">
        <BsCheck2Circle color="#7749F8" className="h-full w-full" />
      </div>
      <div>
        <h4 className="text-center text-2xl font-semibold">
          Your podcast is ready!
        </h4>
      </div>

      <div className="flex w-3/4 flex-row content-center items-center justify-center space-x-3 self-center rounded-full bg-[#c8b8f4] py-2 px-4  text-sm      text-[#7749F8] ">
        <div className=" relative h-4 w-6 justify-center ">
          <Image
            src={Play}
            className="rounded-full object-contain md:rounded"
            layout="fill"
            alt="hj"
          />
        </div>
        <p>00:00</p>
        <div className=" relative h-4 w-64 justify-center ">
          <Image
            src={Control}
            className="rounded-full object-contain md:rounded"
            layout="fill"
            alt="hj"
          />
        </div>
        <p>04:00</p>
      </div>
      <div className="flex  flex-row justify-between text-sm">
        <button className="rounded-full border bg-[#ecebf0] px-6 py-2 text-[#7748F8]  transition hover:border-[#7749F8] hover:bg-[#7749F8] hover:text-white">
          Edit Details
        </button>
        <button className="rounded-full border bg-[#ecebf0] px-6 py-2 text-[#7748F8]  transition hover:border-[#7749F8] hover:bg-[#7749F8] hover:text-white">
          Download
        </button>
        <button className="rounded-full border bg-[#ecebf0] px-6 py-2 text-[#7748F8]  transition hover:border-[#7749F8] hover:bg-[#7749F8] hover:text-white">
          Share{' '}
        </button>
      </div>
    </div>
  );
}

export default PodcastReady;
