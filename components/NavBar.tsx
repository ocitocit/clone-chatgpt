'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="m-0 md:h-full md:w-[305px]">
      <nav className="md h-full w-full border-b-2 border-solid border-black md:border-y-[23px] md:border-l-[23px] md:border-white">
        <div
          className={`flex h-full w-full ${navbar ? 'flex-col' : 'flex-row'} ${
            !navbar && 'justify-between'
          } bg-[#10A37F] py-2 px-2 md:justify-center md:border-[5px] md:border-solid md:border-black`}
        >
          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <Image
                  className="sm:h-12 sm:w-12"
                  src="/icons/x-icon.svg"
                  alt=""
                  width={23}
                  height={23}
                />
              ) : (
                <Image
                  className="sm:h-12 sm:w-12"
                  src="/icons/bars.svg"
                  alt=""
                  width={23}
                  height={23}
                />
              )}
            </button>
          </div>
          {navbar ? (
            <Image
              className="hidden sm:h-12 sm:w-12 md:hidden"
              src="/icons/plus.svg"
              alt=""
              width={23}
              height={23}
            />
          ) : (
            <Image
              className="sm:h-12 sm:w-12 md:hidden"
              src="/icons/plus.svg"
              alt=""
              width={23}
              height={23}
            />
          )}

          <div className={`md:block ${navbar ? 'block' : 'hidden'}`}>
            <div className="my-4 ">plus</div>
            <div>chat</div>
            <div>chat</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
