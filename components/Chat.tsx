'use client';

import { db } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { RxDoubleArrowDown } from "react-icons/rx";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
        orderBy('createdAt', 'asc')
      )
  );

  return (
    <div className="relative flex-1 overflow-y-scroll py-3 scrollbar-hide">
      {messages?.empty && (
        <>
          <p className='mt-10 text-center'>Type something in bellow to get started!</p>
          <RxDoubleArrowDown className='h-10 w-10 mx-auto mt-5 animate-bounce'/>
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
}

export default Chat;
