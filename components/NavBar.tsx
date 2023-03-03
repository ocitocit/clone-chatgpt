'use client';
import React, { useState } from 'react';
import SideBar from './SideBar';
import { GrAdd, GrClose, GrMenu } from 'react-icons/gr';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    });
    router.push(`/chat/${doc.id}`);
  };

  return (
    <header className="h-11 w-full border-b-2 border-black bg-[#10A37F] sm:h-14 md:h-full md:w-[350px]">
      <div className="flex justify-between p-2 md:hidden md:p-4">
        <button className="sm:h-12 sm:w-12" onClick={() => setNavbar(!navbar)}>
          {!navbar ? <GrMenu className="h-8 w-8" /> : <GrClose className="relative z-50 h-8 w-8" />}
        </button>
        <button className="sm:h-12 sm:w-12">
          <GrAdd onClick={createNewChat} className="h-8 w-8" />
        </button>
      </div>
      <div
        className={`aniMenu absolute top-0 z-40 h-full w-full
md:static md:w-full md:border-none ${navbar ? 'left-0' : '-left-full'}`}
      >
        <SideBar crtNewChat={createNewChat} />
      </div>
    </header>
  );
};

export default NavBar;
