import Image from 'next/image';
import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

import Passport from '../../public/icon/passport.svg';

interface Props {
  show: boolean;
}

function Table3({ show }: Props) {
  return (
    <div
      className={`${show ? 'block' : 'hidden'} grid w-full grid-cols-4 gap-4`}
    >
      <div className="relative space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#97ABFF] to-[#123597]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
        <button className="absolute top-1/4 left-1/4">
          <BsPlayCircle className="h-24 w-24 text-white" />
        </button>
      </div>

      <div className="space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#F571A7] to-[#1155FD]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#7DA0BC] to-[#1DFCE2]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className="space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#97ABFF] to-[#123597]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>

      <div className="space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#F571A7] to-[#1155FD]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#7DA0BC] to-[#1DFCE2]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className="space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#97ABFF] to-[#123597]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>

      <div className="space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#F571A7] to-[#1155FD]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#7DA0BC] to-[#1DFCE2]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className="space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#97ABFF] to-[#123597]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>

      <div className="space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#CE9FFC] to-[#7367F0]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#F571A7] to-[#1155FD]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col p-4">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
      <div className=" space-y-2 bg-white shadow-lg">
        <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#7DA0BC] to-[#1DFCE2]       p-4 text-white">
          <div className="flex flex-row space-x-3">
            <div className=" relative h-12 w-12 items-center">
              <Image
                src={Passport}
                className="rounded-full object-contain md:rounded"
                layout="fill"
                alt="hj"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm">Digital Corner</p>
              <p className="text-xs">Adeyinka Prince</p>
            </div>
          </div>
          <div>
            Audiog rams bridge the audio and visual gap by letting you share
            audio clips of your content set to an image and waveform.
          </div>
        </div>
        <div className="flex flex-col space-y-2 p-4">
          <p className="text-base">Audiograph EP 1</p>
          <p className="text-sm">01/06/2022</p>
        </div>
      </div>
    </div>
  );
}

export default Table3;
