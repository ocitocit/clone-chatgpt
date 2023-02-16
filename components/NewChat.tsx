import React from 'react';
import { GoPlus } from 'react-icons/go';

function NewChat() {
  return (
    <div className="relative mb-1 h-14 w-4/5">
      <button className="btn btnBig aniButton group justify-center bg-[#10A37F] hover:bg-white ">
        <GoPlus className="h-8 w-8 text-white group-hover:text-[#10a37f]" />
      </button>
      <div className="shadowButton"></div>
    </div>
  );
}

export default NewChat;
