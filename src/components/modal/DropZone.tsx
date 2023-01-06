import React from 'react';
import { useDropzone } from 'React-dropzone';
import { HiDownload } from 'react-icons/hi';

interface Props {
  open: any;
  onDrop: any;
  accept: any;
}

function DropZone({ open, onDrop, accept }: Props) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    onDrop,
  });

  return (
    <div
      {...getRootProps({ className: 'dropzone' })}
      className="flex flex-col content-center items-center justify-center space-y-16 space-x-3 self-center rounded-lg border-4 border-dashed bg-gray-100 p-20  text-sm  text-[#7749F8]"
    >
      <input {...getInputProps()}></input>
      <div className="rounded-full bg-[#D9CEF7] p-2">
        <HiDownload className="h-20 w-20" color="#7749F8" />
      </div>
      <div className="flex flex-row space-x-2">
        {isDragActive ? (
          <p>Release to drop the files here</p>
        ) : (
          <>
            <p>Drag and Drop here or</p>
            <span className="text-blue-600 underline" onClick={open}>
              Select
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default DropZone;
