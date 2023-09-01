import React from 'react';

const BackgroundImage = ({ imageUrl }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <img
        src={imageUrl}
        className="min-w-full min-h-full object-cover object-center"
        alt=""
      />
    </div>
  );
};

export default BackgroundImage;
