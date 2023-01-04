import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

function Loading() {
  return (
    <div className="grid place-items-center gap-12">
      <div>
        <ImSpinner2 className="h-12 w-12  animate-spin" color="#7749F8" />
      </div>
      <div className="w-2/3">
        <h4 className="text-center text-2xl font-semibold">
          Generating new podcast
        </h4>
      </div>
    </div>
  );
}

export default Loading;
