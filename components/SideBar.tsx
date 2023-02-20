'use client';

import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { BiMessageAltDetail, BiTrash } from 'react-icons/bi';
import NewChat from './NewChat';
import Image from 'next/image';

function SideBar() {
  const { data: session } = useSession();

const [chats,loading,error]=useCollection(
    session && 
  )

  return (
    <>
      <div className="flex h-[90%] flex-col items-center justify-between md:h-full">
        <div className="mt-6 flex w-full flex-col items-center justify-center space-y-2">
          {/*button add chat*/}
          <NewChat />
          {/* dummy chat list */}
          <div className="flex h-11 w-4/5 justify-between">
            <div className="relative w-4/5">
              <button className="aniButton btn btnNorm bg-white hover:bg-[#10a37f] hover:text-white">
                <BiMessageAltDetail className="mx-1 h-5 w-5 " />
                Messages...
              </button>
              <div className="shadowNorm"></div>
            </div>
            <div className="relative h-full w-[18%]">
              <button className="aniButton btn btnNorm justify-center bg-white hover:bg-[#F86250] hover:text-white">
                <BiTrash className="h-5 w-5" />
              </button>
              <div className="shadowNorm"></div>
            </div>
          </div>
          {/* ====================== */}
        </div>
        <div className="relative mb-3 sm:mb-7">
          {session && (
            <Image
              onClick={() => signOut()}
              className="btnNorm relative z-10 border-2 border-black bg-[#D9D9D9] hover:bg-white sm:h-24 sm:w-24 sm:border-[3px]"
              src={session.user?.image!}
              width={60}
              height={60}
              alt="Profile Picture"
            />
          )}
          <div className="shadowNorm"></div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
