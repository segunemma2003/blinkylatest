import Image from 'next/image';
import React from 'react';

import Card1 from '../../public/icon/card1.svg';
import Control from '../../public/icon/control.svg';
import Play from '../../public/icon/play.svg';
import Speaker from '../../public/icon/speaker.svg';

interface Props {
  show: boolean;
}

function MyTranscript({ show }: Props) {
  return (
    <div className={`${show ? 'block' : 'hidden'} flex flex-row`}>
      <div className="flex w-1/2 flex-col  space-y-8 border-r-2 py-8 px-2">
        <div className="flex flex-col space-y-8">
          <p className="font-semibold">Edit Transcript</p>
          <textarea className="h-32 bg-[#F8F8F8] p-4">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type
          </textarea>
        </div>
      </div>
      <div className="w-1/2 space-y-4 px-8 py-16">
        <div className=" relative h-96 w-full justify-center ">
          <Image
            src={Card1}
            className="rounded-full object-contain md:rounded"
            layout="fill"
            alt="hj"
          />
        </div>
        <div className="flex flex-row items-center pb-16">
          <div className=" relative h-4 w-2/12 justify-center">
            <Image
              src={Play}
              className="rounded-full object-contain md:rounded"
              layout="fill"
              alt="hj"
            />
          </div>
          <div className=" relative h-4 w-6/12 justify-center">
            <Image
              src={Control}
              className="rounded-full object-contain md:rounded"
              layout="fill"
              alt="hj"
            />
          </div>
          <p className="ml-2">20:12</p>
          <div className=" relative h-4 w-2/12 justify-center">
            <Image
              src={Speaker}
              className="rounded-full object-contain md:rounded"
              layout="fill"
              alt="hj"
            />
          </div>
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
  );
}

export default MyTranscript;
