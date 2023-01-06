import Image from 'next/image';
import React from 'react';
import { HiDownload } from 'react-icons/hi';

import HeaderImage from '../../../public/icon/audiographmain.svg';

function CreateAudiographForm() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 px-12 py-8 pb-12">
      <div className=" relative h-48 w-3/4 justify-center">
        <Image
          alt="tt"
          src={HeaderImage}
          className="rounded-full object-contain md:rounded"
          layout="fill"
        />
      </div>
      <h1 className="pb-20 text-center text-2xl font-semibold">
        Create new audiographs
      </h1>

      <div className="group flex flex-row space-x-2">
        <select className="w-fit rounded-full border-[#7749F8] bg-[#d9cef7]  px-4 py-3 text-sm text-[#7749F8]">
          <option>Select Podcast</option>
        </select>
        <button className="w-fit rounded-full bg-[#7749F8] px-12 py-3 text-sm text-white">
          Next
        </button>
        <div className="flex w-fit  flex-row  space-x-2 whitespace-nowrap rounded-full border-[#7749F8]  bg-[#d9cef7] px-4 py-3 text-sm text-[#7749F8]">
          <div>Upload audio</div>
          <HiDownload color="#7749F8" />
        </div>
      </div>
    </div>
  );
}

export default CreateAudiographForm;
