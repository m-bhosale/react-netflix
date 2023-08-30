import React from "react";

const BackgroundImage = ({ imageUrl }) => {
  console.log("src/assets/login.jpg",imageUrl)
  return (
    <div className="backGroundImg absolute inset-0 w-full h-full overflow-hidden z-0">
      <img
        src={imageUrl}
        className="w-full h-full object-cover object-center"
        alt=""
      />
    </div>
  );
};

export default BackgroundImage;
