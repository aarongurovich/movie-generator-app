import React from 'react';
import RandomMovie from '../components/RandomMovie';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Random Movie Generator</h1>
      <RandomMovie />
    </div>
  );
};

export default Home;
