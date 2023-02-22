import ChatInput from '@/components/ChatInput';
import { FiAlertTriangle, FiSun, FiZap } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="hw-full md:border-y-[23px] md:border-r-[23px] md:border-white">
      <div className="hw-full md:border-y-[5px] md:border-r-[5px] md:border-black">
        <section className="h-[80%] md:h-[90%]  ">
          <div className="relative flex h-full flex-col scrollbar-hide justify-start overflow-y-auto md:justify-center">
            <div className="flex flex-col ">
              {/* ---konten dalem scroll---  */}
              <div className="flex h-full flex-col items-center justify-center px-2">
                <h1 className="mb-20 mt-10 text-5xl font-bold md:mb-10">ChatGPT</h1>

                <div className="flex flex-col space-y-2 text-center md:flex-row md:space-y-0 md:space-x-4">
                  {/* kotak-kotak */}
                  <div className="mb-8">
                    <div className="mb-5 flex items-center justify-center md:flex-col">
                      <FiSun className="mr-2 h-6 w-6 md:mr-0 md:mb-2" />
                      <p className="text-lg font-medium">Exampel</p>
                    </div>
                    <div className="space-y-2">
                      <div className="relative flex h-16 w-64 cursor-pointer items-center">
                        <p className="btnNorm btn bg-[#D9D9D9] p-2">
                          &quot;Explain abaout Algebra&quot;
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                      <div className="relative flex h-16 w-64 cursor-pointer items-center">
                        <p className="btnNorm btn bg-[#D9D9D9] p-2">
                          &quot;Make a joke about my loneliness&quot;
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                      <div className="relative flex h-16 w-64 cursor-pointer items-center">
                        <p className="btnNorm btn bg-[#D9D9D9] p-2">
                          &quot;How Do I make a web ?&quot;
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                    </div>
                  </div>
                  {/* kotak-kotak */}
                  <div className="mb-8">
                    <div className="mb-5 flex items-center justify-center md:flex-col">
                      <FiZap className="mr-2 h-6 w-6 md:mr-0 md:mb-2" />
                      <p className="text-lg font-medium">Capabilities</p>
                    </div>
                    <div className="space-y-2">
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className=" btn bg-[#D9D9D9] p-2">
                          Remembers what user said earlier in the conversation
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className=" btn bg-[#D9D9D9] p-2">
                          Allows user to provide follow-up corrections
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className=" btn bg-[#D9D9D9] p-2">
                          Trained to decline inappropriate requests
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                    </div>
                  </div>
                  {/* kotak-kotak */}
                  <div className="mb-8">
                    <div className="mb-5 flex items-center justify-center md:flex-col">
                      <FiAlertTriangle className="mr-2 h-6 w-6 md:mr-0 md:mb-2" />
                      <p className="text-lg font-medium">Limitations</p>
                    </div>
                    <div className="space-y-2">
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className=" btn bg-[#D9D9D9] p-2">
                          May occasionally generate incorrect information{' '}
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className=" btn bg-[#D9D9D9] p-2">
                          May occasionally produce harmful instructions or biased content
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className=" btn bg-[#D9D9D9] p-2">
                          Limited knowledge of world and events after 2021
                        </p>
                        <div className="shadowNorm"></div>
                      </div>
                    </div>
                  </div>
                  {/* kotak-kotak */}
                </div>
              </div>

              {/* ---konten dalem scroll---  */}
            </div>
          </div>
        </section>
        <section className="h-[20%] border-t-2 border-black bg-slate-600 md:h-[10%] md:border-t-[5px] ">
          <ChatInput/>
        </section>
      </div>
    </main>
  );
}
