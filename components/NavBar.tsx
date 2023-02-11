'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="h-full w-full md:w-[305px]">
      <nav className="h-full w-full border-b-2 border-solid border-black  md:border-y-[23px] md:border-l-[23px] md:border-white">
        <div className="h-full w-full bg-[#10A37F] md:border-[5px] md:border-solid md:border-black">
          <div className="flex justify-between p-2 md:hidden md:p-4">
            <button onClick={() => setNavbar(!navbar)}>
              <Image
                className="relative z-50 sm:h-12 sm:w-12"
                src={navbar ? '/icons/x-icon.svg' : '/icons/bars.svg'}
                alt=""
                width={23}
                height={23}
              />
            </button>
            <button>
              <Image
                className="sm:h-12 sm:w-12 md:hidden"
                src="/icons/plus.svg"
                alt=""
                width={23}
                height={23}
              />
            </button>
          </div>
          <div
            className={`absolute top-0 h-screen w-4/5 border-2 border-solid border-black bg-red-600 transition-all duration-300 ease-in md:static md:h-full md:border-none ${
              navbar ? ' box-shadow left-0 ' : '-left-full'
            }`}
          >
            <div>
              <div className=" ">plus</div>
              <div>chat</div>
              <div>chat</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
