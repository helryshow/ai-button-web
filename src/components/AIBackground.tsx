
import React from 'react';

const AIBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] bg-ai-blue opacity-10 rounded-full filter blur-3xl animate-pulse-scale"></div>
      <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] bg-ai-purple opacity-10 rounded-full filter blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-ai-green opacity-10 rounded-full filter blur-3xl animate-pulse-scale" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default AIBackground;
