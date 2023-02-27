'use client';
import React, { useState } from 'react';
import SideBar from './SideBar';
import { GrAdd, GrClose, GrMenu } from 'react-icons/gr';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="h-11 w-full bg-[#10A37F] border-black border-b-2 sm:h-14 md:h-full md:w-[350px]">
      <div className="flex justify-between p-2 md:hidden md:p-4">
        <button className="sm:h-12 sm:w-12" onClick={() => setNavbar(!navbar)}>
          {!navbar ? <GrMenu className="h-8 w-8" /> : <GrClose className="relative z-50 h-8 w-8" />}
        </button>
        <button className="sm:h-12 sm:w-12">
          <GrAdd className="h-8 w-8" />
        </button>
      </div>
      <div
        className={`aniMenu :w absolute top-0 z-40 h-full w-full
md:static md:w-full md:border-none ${navbar ? ' box-shadow left-0' : '-left-full'}`}
      >
        <SideBar />
      </div>
    </header>
  );
};

export default NavBar;
