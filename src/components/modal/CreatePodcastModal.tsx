import { XIcon } from '@heroicons/react/outline';
import MuiModal from '@mui/material/Modal';
import toast, { Toaster } from 'react-hot-toast';
import { useRecoilState } from 'recoil';

import { modalStatePodcast } from '@/atoms/modelAtom';

import CreatePodCastForm from './CreatePodCastForm';
import Loading from './Loading';
import PodcastReady from './PodcastReady';

function CreatePodcastModal() {
  const [showModal, setShowModal] = useRecoilState(modalStatePodcast);
  const showLoading = false;
  const showForm = false;
  const showPodcast = true;

  const handleClose = () => {
    setShowModal(false);
    toast.dismiss();
  };

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed inset-x-0 !top-7 z-50 mx-auto w-5/12 overflow-hidden overflow-y-scroll rounded-md"
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
        <div
          className={` ${showLoading && 'py-48'} 
          ${showPodcast && 'pt-24'}
          relative grid  place-items-center gap-6 space-y-2 rounded-lg bg-white  shadow-lg`}
        >
          {showForm && <CreatePodCastForm />}
          {showLoading && <Loading />}
          {showPodcast && <PodcastReady />}
        </div>
        {/* </div> */}
      </>
    </MuiModal>
  );
}

export default CreatePodcastModal;
