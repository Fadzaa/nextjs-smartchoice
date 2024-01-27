import React from 'react';
import Image from 'next/image';

function PresidenCard({ image, title, isActive, onHover }) {
  return (
    <div 
      className={`group ${
        isActive ? "w-24 lg:w-[387px] cursor-pointer" : "w-[55px] lg:w-[120px]"
      } h-[200px] lg:h-[473px] rounded-lg lg:rounded-2xl flex flex-col justify-end relative overflow-hidden me-3 lg:ms-4 transition-all duration-500`}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <Image
        className="h-full w-full absolute object-cover transform group-hover:scale-110 transition-transform duration-500"
        src={image}
        alt={title}
      />

      <div
        className={
          isActive
            ? "bg-primary w-20 h-11 lg:w-[280px] lg:h-24  mb-4 lg:mb-8 px-2 lg:px-7 py-2 lg:py-4 absolute tracking-wider rotate-0 transform transition-all duration-500"
            : "bg-primary w-20 h-11 lg:w-[94px] lg:h-24  mb-4 lg:mb-8 px-2 lg:px-7 py-1 lg:py-2 absolute tracking-wider -rotate-90 transform transition-all duration-500"
        }
      >
        <h1 className="font-medium w-full text-sm lg:text-[32px] leading-4 lg:leading-10 text-white">
          {isActive ? ` ${title}` : title}
        </h1>
      </div>
    </div>
  );
}

export default PresidenCard;