import React from 'react';

import Table4 from './Table4';

interface Props {
  show: boolean;
}

function MyTemplate({ show }: Props) {
  return (
    <div className={`${show ? 'block' : 'hidden'} flex flex-row`}>
      <div className="flex flex-col  space-y-8 border-r-2 py-8 px-2">
        <div className="flex flex-col space-y-8">
          <p className="font-semibold">Choose Template</p>

          <Table4 show={true} />
        </div>
      </div>
    </div>
  );
}

export default MyTemplate;
