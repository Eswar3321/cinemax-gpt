import React from 'react'
import { Info } from 'lucide-react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute w-full aspect-video pt-[20%] px-4 md:px-12">
      <h1 className="text-2xl md:text-6xl font-bold text-white">{title}</h1>
      <p className="md:w-1/3 my-4 text-white">{overview}</p>
      <div className="flex gap-3 my-4">
        <button className="cursor-pointer bg-white text-black !rounded-none !px-8 !py-1 m-0 outline-none hover:opacity-80 transition">▶ Play</button>
        <button className="cursor-pointer !bg-grey-500 border flex place-items-center gap-1 border-white !rounded-none !px-5 !py-1 m-0 outline-none hover:opacity-80 transition">
          <Info className="w-4 h-4" />More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;
