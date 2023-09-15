import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-6 pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold  text-2xl md:text-4xl">{title}</h1>
      <p className="md:inline-block py-6 hidden text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg">
          ▶Play
        </button>
        <button className="bg-gray-500 md:inline-block hidden text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
