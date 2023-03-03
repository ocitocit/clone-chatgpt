import { GoPlus } from 'react-icons/go';

type Props={
  crtNewChat:()=> Promise<void>
}

function NewChat({crtNewChat}:Props) {


   return (
    <div className="flex w-full items-center justify-center pt-11 pb-2 md:pt-0">
      <div onClick={crtNewChat} className="relative h-14 w-4/5 md:mt-5">
        <div>
          <button className="btn btnBig aniButton group h-full justify-center bg-[#10A37F] hover:bg-white ">
            <GoPlus className="h-8 w-8 text-white group-hover:text-[#10a37f]" />
          </button>
          <div className="shadowBig"></div>
        </div>
      </div>
    </div>
  );
}

export default NewChat;
