import { db } from '../firebase';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { BiMessageAltDetail, BiTrash } from 'react-icons/bi';

type Props = {
  id: string;
};

function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
  );

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [id, pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id));
    router.replace('/');
  };

  return (
    <Link className="flex h-11 w-4/5 justify-between" href={`chat/${id}`}>
      <div className="relative w-4/5">
        <button
          className={`aniButton btn btnNorm hover:bg-green-400 hover:text-white ${
            active ? 'bg-green-400 text-white' : 'bg-white text-black'
          }`}
        >
          <div className='w-5 h-5 mx-1'>

          <BiMessageAltDetail className="w-5 h-5" />
          </div>
          <p className="truncate">
            {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
          </p>
        </button>
        <div className="shadowNorm"></div>
      </div>
      <div className="relative h-full w-[18%]">
        <button
          onClick={removeChat}
          className={`aniButton btn btnNorm justify-center  hover:bg-[#F86250] hover:text-white ${
            active ? 'bg-[#F86250] text-white' : 'bg-white'
          }`}
        >
          <BiTrash className="h-5 w-5" />
        </button>
        <div className="shadowNorm"></div>
      </div>
    </Link>
  );
}

export default ChatRow;
