'use client';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { GoPlus } from 'react-icons/go';
import { db } from '../firebase';

function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    });
    console.log(doc)
    router.push(`/chat/${doc.id}`);

  };

  return (
    <div onClick={createNewChat} className="relative mb-1 h-14 w-4/5">
      <button className="btn btnBig aniButton group justify-center bg-[#10A37F] hover:bg-white ">
        <GoPlus className="h-8 w-8 text-white group-hover:text-[#10a37f]" />
      </button>
      <div className="shadowBig"></div>
    </div>
  );
}

export default NewChat;
