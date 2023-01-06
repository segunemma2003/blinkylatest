import { XIcon } from '@heroicons/react/outline';
import MuiModal from '@mui/material/Modal';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { BsPlayCircle } from 'react-icons/bs';
import { useRecoilState } from 'recoil';

import { modalState } from '@/atoms/modelAtom';

import Passport from '../../../public/icon/passport.svg';

function ViewVideo() {
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
    toast.dismiss();
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed inset-x-0 !top-7 z-50 mx-auto w-4/12 overflow-hidden overflow-y-scroll rounded-md"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          type="button"
          className="absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-transparent hover:bg-transparent"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        {/* <div className="relative pt-[56.25%]"> */}
        <div className="relative space-y-2 bg-white shadow-lg">
          <div className="flex flex-col space-y-4 bg-gradient-to-br from-[#97ABFF] to-[#123597]       p-12 text-white">
            <div className="flex flex-row items-center space-x-3">
              <div className=" relative h-12 w-12 items-center">
                <Image
                  alt="tt"
                  src={Passport}
                  className="rounded-full object-contain md:rounded"
                  layout="fill"
                />
              </div>
              <div className="flex flex-col p-4">
                <p className="text-xl">Digital Corner</p>
                <p className="text-xl">Adeyinka Prince</p>
              </div>
            </div>
            <div className="text-2xl">
              Audiog rams bridge the audio and visual gap by letting you share
              audio clips of your content set to an image and waveform.
            </div>
          </div>
          <div className="absolute top-[40%] left-[37%] rounded-full bg-white/30 backdrop-blur-sm">
            <BsPlayCircle className="h-24 w-24 text-white" />
          </div>
        </div>
        {/* </div> */}
      </>
    </MuiModal>
  );
}

export default ViewVideo;
