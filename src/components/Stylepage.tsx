import Image from 'next/image';
import React from 'react';

import Card1 from '../../public/icon/card1.svg';
import Control from '../../public/icon/control.svg';
import Play from '../../public/icon/play.svg';
import Speaker from '../../public/icon/speaker.svg';

interface Props {
  show: boolean;
}

function Stylepage({ show }: Props) {
  return (
    <div className={`${show ? 'block' : 'hidden'} flex flex-row`}>
      <div className="flex w-1/2 flex-col  space-y-8 border-r-2 py-8 px-2">
        <div className="flex flex-row space-x-4">
          <div className="flex w-3/4 flex-col space-y-2">
            <label>Podcast Name</label>
            <input
              placeholder="Digital Corner"
              className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
            />
          </div>
          <div className="flex w-1/4 flex-col space-y-2">
            <label>Color</label>
            <input
              placeholder="#fffffff"
              className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
            />
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="flex w-3/4 flex-col space-y-2">
            <label>Author</label>
            <input
              placeholder="Digital Corner"
              className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
            />
          </div>
          <div className="flex w-1/4 flex-col space-y-2">
            <label>Color</label>
            <input
              placeholder="#fffffff"
              className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
            />
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="flex w-3/4 flex-col space-y-2">
            <label>Font Style</label>
            <input
              placeholder="Digital Corner"
              className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
            />
          </div>
          <div className="flex w-1/4 flex-col space-y-2">
            <label>Color</label>
            <input
              placeholder="#fffffff"
              className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
            />
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div className="w-3/4 space-y-2">
            <label>Wave Form</label>
            <div className="grid grid-cols-3 gap-2">
              <input
                placeholder="Wave 1"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-2"
              />
              <input
                placeholder="Wave 2"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-2"
              />
              <input
                placeholder="Wave 3"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-2"
              />
              <input
                placeholder="Wave 1"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-2 "
              />
              <input
                placeholder="Wave 2"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-2"
              />
              <input
                placeholder="Wave 3"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-2"
              />
            </div>
          </div>
          <div className="flex w-1/4 flex-col space-y-2">
            <label>Color</label>
            <input
              placeholder="#fffffff"
              className="rounded border border-gray-600 px-6 py-2"
            />
          </div>
        </div>
        <div className="flex w-3/4 flex-col space-y-3">
          <p>Background</p>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col space-y-2">
              <label>Image</label>
              <input className="h-32 w-40 border bg-[#F8F8F8]" />
            </div>
            <div className="flex w-1/3  flex-col space-y-2">
              <label>Color</label>
              <input
                placeholder="#fffffff"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
              />
            </div>
          </div>
        </div>
        <div className="flex w-3/4 flex-col space-y-3">
          <p>Identity</p>
          <div className="flex flex-row space-x-2">
            <div className="flex flex-col space-y-2">
              <label>Avatar</label>
              <input className="h-32 w-40 border bg-[#F8F8F8]" />
            </div>
            <div className="flex w-1/3  flex-col space-y-2">
              <label>Color</label>
              <input
                placeholder="#fffffff"
                className="rounded border border-gray-600 bg-[#F8F8F8] px-6 py-2"
              />
            </div>
          </div>
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

export default Stylepage;
