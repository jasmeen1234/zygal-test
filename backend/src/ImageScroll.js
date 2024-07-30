import React from 'react';

const images = Array(3).fill(0); // Example data

const ImageScroll = () => {
  return (
    <div className="h-3/5 overflow-y-scroll scrollbar-hide">
      {images.map((_, index) => (
        <div key={index} className="h-40 bg-gray-300 m-2">
          <img
            src={`https://via.placeholder.com/150?text=Image+${index + 1}`}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageScroll;
