type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  console.log(chatId);

  return (
    <div className="relative flex-1 overflow-y-scroll scrollbar-hide">
      Chat
    </div>
  );
}

export default Chat;
