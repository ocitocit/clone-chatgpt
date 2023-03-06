'use client';

import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { RxPaperPlane } from 'react-icons/rx';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';
import Image from 'next/image';

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name${session?.user?.name}`
      }
    };

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    );

    const notification = toast.loading('Loading ...');

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session
      })
    }).then(() => {
      toast.success('Done!', {
        id: notification
      });
    });
  };

  return (
    <div className="relative mx-auto mb-3 h-12 w-[93%] md:mb-6 md:w-[95%]">
      <form onSubmit={sendMessage} className="btn box-shadow flex bg-[#d9d9d9] p-2">
        <input
          className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-green-400"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Tell me what your desire?"
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="text-[#10A37F] hover:opacity-50 disabled:cursor-not-allowed disabled:text-gray-400"
        >
          <RxPaperPlane className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
