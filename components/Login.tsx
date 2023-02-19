'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

function Login() {
  return (
    <main className="hw-full md:border-[23px] md:border-white">
      <section className="hw-full flex flex-col items-center justify-center bg-[#10A37F] md:border-[5px] md:border-black">
        <div className="flex flex-col items-center">
          <Image
            className=" mb-6 md:h-60 md:w-60"
            src="/icons/gpt-icon.svg"
            alt=""
            height={69}
            width={69}
          />
          <div onClick={() => signIn('google')} className="relative h-10 w-52 md:h-14 md:w-72 ">
            <button className="btn btnBig aniButton justify-center bg-[#D9D9D9] hover:bg-white">
              <Image
                src="/icons/g-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mr-2 h-6 w-6"
              />
              <p className="text-base font-medium md:text-2xl">Sign In With Google</p>
            </button>
            <div className="shadowBig"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
