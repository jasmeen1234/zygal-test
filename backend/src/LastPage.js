import React from 'react';

const avatars = Array(7).fill(0); // Example data

const LastPage = () => {
  return (
    <div className="overflow-x-scroll scrollbar-hide flex space-x-4 p-2">
      {avatars.map((_, index) => (
        <div key={index} className="flex-none">
          <img src="/download.jpeg" alt="Avatar" width={50} height={50} style={{borderRadius:"40px"}} />
        </div>
      ))}
    </div>
  );
};

export default LastPage;
