'use client';

import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { RxPaperPlane } from 'react-icons/rx';
import { toast } from 'react-hot-toast';

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  //TODO: useSWR to get model
  const model = 'text-davinci-003'

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message={
      text:input,
      createdAt:serverTimestamp(),
      user:{
        _id:session?.user?.email!,
        name:session?.user?.name!,
        avatar:session?.user?.image! || `https://ui-avatars.com/api/?name${session?.user?.name}`
      }
    }

    await addDoc(collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),message)

    const notification= toast.loading('chatgpt is thinking')

    await fetch('/api/askQuestion',{
      method:'POST',
      headers:{
        'Content-Type':'aplication/json'
      },
      body:JSON.stringify({
        prompt:input,chatId,model,session
      })
    }).then(()=>{
      toast.success('chatgpt has responded',{
        id:notification,
      })
    })
  };

  return (
    <div className="bg-[#D9D9D9] text-sm">
      <form
        onSubmit={sendMessage}
        className=" flex space-x-5 border-t-2 border-black p-5 md:border-t-[5px] "
      >
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
      <div>{/* Model selection*/}</div>
    </div>
  );
}

export default ChatInput;
