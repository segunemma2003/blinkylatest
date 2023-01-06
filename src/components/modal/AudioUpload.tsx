import cuid from 'cuid';
import React, { useCallback, useState } from 'react';

import DropZone from './DropZone';

function AudioUpload() {
  const [, setImages] = useState({});
  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    acceptedFiles.map((file: Blob) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages({ id: cuid(), src: e.target?.result });
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <div className="flex w-4/5  flex-col justify-center space-y-6 pb-24 text-center ">
      <div>
        <h4 className="text-center text-2xl ">Upload your audio file</h4>
        <p className="text-sm text-[#4F5867]">mp3, wav....</p>
      </div>
      <DropZone open={() => {}} onDrop={onDrop} accept={'image/*'} />
    </div>
  );
}

export default AudioUpload;
