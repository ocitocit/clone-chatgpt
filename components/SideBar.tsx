'use client';

import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from './NewChat';
import Image from 'next/image';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import ChatRow from './ChatRow';

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
  );

  return (
    <>
      <div className="flex h-full w-full bg-[#10A37F] flex-col border-2 border-black md:border-l-[5px] md:border-y-[5px] md:border-black">
        <NewChat />
        <div className="flex-1 overflow-y-scroll scrollbar-hide ">
          <div className='flex flex-col space-y-2 items-center pt-8'>
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
          </div>
        </div>
       
        <div className='md:border-t-[5px] border-t-black border-t-2 p-6 flex items-center justify-center'>
          <div className="relative">
            {session && (
              <Image
                onClick={() => signOut()}
                className="btnNorm relative z-10 border-2 border-black bg-[#D9D9D9] hover:bg-white sm:w-24 sm:border-[3px] md:h-24"
                src={session.user?.image!}
                width={60}
                height={60}
                alt="Profile Picture"
              />
            )}
            <div className="shadowNorm"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
