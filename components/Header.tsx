
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center py-16 px-4 shadow-lg">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
        Jay Jay
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
        From Argentina | Building fun projects in my free time
      </p>
    </header>
  );
};

export default Header;
