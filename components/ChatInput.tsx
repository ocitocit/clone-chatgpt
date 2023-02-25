'use client'

import { useState } from 'react';
import { RxPaperPlane } from 'react-icons/rx';

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');

  return (
    <>
      <form action="submit" className="space-x-5 p-5 ">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Tell me what your desire?"
        />
        <button type="submit">
          <RxPaperPlane className="h-4 w-4" />
        </button>
      </form>
      <div>{/* Model selection*/}</div>
    </>
  );
}

export default ChatInput;
