import { FiSun } from 'react-icons/fi';

export default function Home() {
  return (
    <main className="hw-full md:border-y-[23px] md:border-r-[23px] md:border-white">
      <div className="hw-full md:border-y-[5px] md:border-r-[5px] md:border-black">
        <section className="h-[80%] md:h-[90%]  ">
          <div className="relative flex h-full flex-col justify-start overflow-y-auto md:justify-center">
            <div className="flex flex-col ">
              {/* ---konten dalem scroll---  */}
              <div className="flex h-full flex-col items-center justify-center px-2">
                <h1 className="mb-20 mt-10 text-5xl font-bold">ChatGPT</h1>

                <div className="flex flex-col space-y-2 text-center md:flex-row md:space-y-0 md:space-x-4">
                  {/* kotak-kotak */}
                  <div>
                    <div className="mb-5 flex flex-col items-center justify-center">
                      <FiSun />
                      <p>Exampel</p>
                    </div>
                    <div className="space-y-2">
                      <div className="relative flex h-16 w-64 cursor-pointer items-center">
                        <p className="btnNorm btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                      <div className="relative flex h-16 w-64 cursor-pointer items-center">
                        <p className="btnNorm btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                      <div className="relative flex h-16 w-64 cursor-pointer items-center">
                        <p className="btnNorm btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                    </div>
                  </div>
                  {/* kotak-kotak */}
                  <div>
                    <div className="mb-5 flex flex-col items-center justify-center">
                      <FiSun />
                      <p>Exampel</p>
                    </div>
                    <div className="space-y-2">
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className="infoText btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className="infoText btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className="infoText btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                    </div>
                  </div>
                  {/* kotak-kotak */}
                  <div>
                    <div className="mb-5 flex flex-col items-center justify-center">
                      <FiSun />
                      <p>Exampel</p>
                    </div>
                    <div className="space-y-2">
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className="infoText btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className="infoText btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
                      </div>
                      <div className="relative flex h-16 w-64 items-center  ">
                        <p className="infoText btn bg-[#D9D9D9] p-2">
                          &quot;Lorem ipsum dolor sit amet consectetur adipisicing ?&quot;
                        </p>
                        <div className="shadowButton"></div>
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
        <section className="h-[20%] border-t-2 border-black bg-slate-600 md:h-[10%] md:border-t-[5px] "></section>
      </div>
    </main>
  );
}
