import Chat from '@/components/Chat';
import ChatInput from '@/components/ChatInput';

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <main className="flex h-full w-full flex-col overflow-hidden md:border-[5px] md:border-black">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </main>
  );
}

export default ChatPage;
