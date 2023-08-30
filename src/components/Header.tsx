import React from 'react';

const Header = () => {
  return (
    <div className="relative md:px-4 md:py-2">
      <img
        className="w-28 mx-auto md:mx-0 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 md:static"
        src="src/assets/logo.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
