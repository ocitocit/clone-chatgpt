'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import SideBar from './SideBar';
import { GrAdd, GrClose, GrMenu } from 'react-icons/gr';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="md:w-[35%] 2xl:w-1/4 ">
      <nav className="hw-full border-b-2 border-solid border-black  md:border-y-[23px] md:border-l-[23px] md:border-white">
        <div className="hw-full bg-[#10A37F] md:border-[5px] md:border-solid md:border-black">
          <div
            className={`absolute top-0 left-0 h-full w-full ${navbar && ' bg-black/50'} md:hidden`}
          ></div>
          <div className="flex justify-between p-2 md:hidden md:p-4">
            <button className="relative z-50 sm:h-12 sm:w-12" onClick={() => setNavbar(!navbar)}>
              {!navbar ? <GrMenu className="h-8 w-8" /> : <GrClose className="h-8 w-8" />}
            </button>
            <button className="sm:h-12 sm:w-12">
              <GrAdd className="h-8 w-8" />
            </button>
          </div>
          <div
            className={`aniMenu absolute top-0 z-40 h-full w-11/12 border-2 border-solid border-black sm:w-4/5 md:static md:w-full md:border-none ${
              navbar ? ' box-shadow left-0' : '-left-full'
            }`}
          >
            <div className="h-full bg-[#10A37F] md:bg-transparent">
              <div className="p-2 md:hidden md:p-4">
                <div className="h-[31px] w-[31px] sm:h-12 sm:w-12" />
              </div>
              <SideBar />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
