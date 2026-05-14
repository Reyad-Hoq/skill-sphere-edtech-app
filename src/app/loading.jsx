import React from 'react';

const loading = () => {
  return (
    <div>
      <div className='min-h-screen flex items-center justify-center flex-col space-y-3'>
        <span className="loading loading-spinner loading-xl"></span>
        <p>loading.....</p>
      </div>
    </div>
  );
};

export default loading;