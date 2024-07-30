import React from 'react';
import Carousel from './Carousel';
import ImageScroll from './ImageScroll';
import LastPage from './LastPage';
import SecondPage from './SecondPage';
import './App.css';

function App() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-200 items-center min-h-screen p-4">
      
      <div className="w-full md:w-1/4 p-4">
        <Carousel />
      </div>

      <div className="w-full md:w-1/2 flex justify-center p-4">
        <SecondPage />
      </div>

      <div className="w-full md:w-1/4 p-4 flex-grow">
        <LastPage />
        <ImageScroll />
      </div>
    </div>
  );
}

export default App;
