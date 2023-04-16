import { DocumentData } from 'firebase/firestore';
import Image from 'next/image';

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === 'ChatGPT';

  return (
    <div className="relative px-5 pt-5 md:px-10 ">
      <div
        className={`whitespace-pre-line box-shadow mx-auto flex border-2 border-black p-5 ${
          !isChatGPT && 'flex-row-reverse bg-[#D9D9D9]'
        }`}
      >
        <img
          src={message.user.avatar}
          alt=""
          className={`h-8 w-8 border-2 border-black md:h-12 md:w-12 ${isChatGPT ? 'mr-5' : 'ml-5'}`}
        />
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
