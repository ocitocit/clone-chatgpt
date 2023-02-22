import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params:{
    id:string
  }
}

function ChatPage({params: {id}} : Props ) {

  return (
    <main className="hw-full md:border-y-[23px] md:border-r-[23px] md:border-white">
      <div className="hw-full md:border-y-[5px] md:border-r-[5px] md:border-black">
        <section className="h-[80%] md:h-[90%]">
          <div className="relative flex h-full flex-col justify-start overflow-hidden overflow-y-auto scrollbar-hide">
            <div className="flex flex-col"></div>
                {/*chat element*/}
               <Chat/> 
           </div>
        </section>
        <section className="h-[20%] border-t-2 border-black bg-slate-600 md:h-[10%] md:border-t-[5px]">
            {/*chat element*/}
          <ChatInput/>
        </section>
      </div>
    </main>
  );
}

export default ChatPage;
