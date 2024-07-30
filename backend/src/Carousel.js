// src/Carousel.js
import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const images = [
    "/image3.jpeg",
    "/image2.jpeg",
    "/download.jpeg"
  ];

  return (
    <div className="w-full flex flex-col items-center border-gray-200 rounded-lg">
      <div className="relative w-72 h-96 overflow-hidden border border-gray-200 rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-none">
                 <h1 className='flex justify-center bold'>{`slide ${index+1}`}</h1>
              <div className="w-full h-full flex justify-center items-center bg-gray-300">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4">
        {images.map((_, index) => (
            
          <div
            key={index}
            className={`w-3 h-3 mx-1.5 rounded-full cursor-pointer ${activeIndex === index ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
      <button className="mt-5 px-4 py-2 bg-blue-300 text-white rounded">
        Static Button
      </button>
    </div>
  );
};

export default Carousel;
