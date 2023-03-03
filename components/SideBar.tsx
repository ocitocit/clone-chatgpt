'use client';

import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from './NewChat';
import Image from 'next/image';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import ChatRow from './ChatRow';
import ModelSelection from './ModelSelection';

type Props = {
  crtNewChat: () => Promise<void>;
};

function SideBar({ crtNewChat }: Props) {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
  );

  return (
    <>
      <div className="flex h-full w-full flex-col border-2 border-black bg-[#10A37F] md:border-y-[5px] md:border-l-[5px] md:border-black">
        <NewChat crtNewChat={crtNewChat} />
        <ModelSelection />
        <div className="flex-1 overflow-y-scroll scrollbar-hide ">
          <div className="flex flex-col items-center space-y-2 pt-4">

            {loading && (<div className='animate-pulse text-center'><p>Loading Chats...</p></div>)}

            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center border-t-2 border-t-black h-24 md:h-36 md:border-t-[5px]">
          <div className="relative">
            {session && (
              <Image
                onClick={() => signOut()}
                className="btnNorm relative z-10 border-2 border-black bg-[#D9D9D9] hover:bg-white md:w-24 md:border-[3px] md:h-24"
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
