import React from 'react';
import RandomMovie from '../components/RandomMovie';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center">
        Random Movie Generator
      </h1>
      <div className="w-full max-w-2xl">
        <RandomMovie />
      </div>
    </div>
  );
};

export default Home;
