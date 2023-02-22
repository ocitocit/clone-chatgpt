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
      <div className="flex h-[90%] w-full flex-col items-center sm:h-[85%] md:h-full">
        <NewChat />
        <div className="h-[90%] w-full overflow-y-auto scrollbar-hide">
          <div className="mt-8 flex w-full flex-col items-center space-y-3">
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
        <div className="mb-10 flex h-auto w-full items-center justify-center self-end border-t-2 border-t-black pt-8 sm:mb-6 md:border-t-[5px]">
          <div className="relative ">
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
