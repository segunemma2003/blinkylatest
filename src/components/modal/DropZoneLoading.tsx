import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

function DropZoneLoading() {
  return (
    <div className="flex w-4/5  flex-col justify-center space-y-2 text-center ">
      <div>
        <h4 className="text-center text-4xl ">Uploading</h4>
        <p className="text-sm text-[#4F5867]">mp3, wav....</p>
      </div>
      <div className="flex w-4/5 flex-col content-center items-center justify-center space-y-16  self-center rounded-lg border-4 border-dashed bg-gray-100 p-8  text-sm  text-[#7749F8]">
        <div>
          <ImSpinner2 className="h-8 w-8  animate-spin" color="#7749F8" />
        </div>
        <p>15%</p>
      </div>
    </div>
  );
}

export default DropZoneLoading;
