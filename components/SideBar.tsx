import Image from 'next/image';
import { GoPlus } from 'react-icons/go';
import { BiMessageAltDetail, BiTrash } from 'react-icons/bi';

function SideBar() {
  return (
    // button add chat
    <aside className="mt-6 flex flex-col items-center justify-center space-y-2">
      <div className="relative mb-1 h-14 w-4/5">
        <button className="btn btnBig aniButton group justify-center bg-[#10A37F] hover:bg-white ">
          <GoPlus className="h-8 w-8 text-white group-hover:text-[#10a37f]" />
        </button>
        <div className="shadowButton"></div>
      </div>
      {/* dummy button */}
      <div className="flex h-11 w-4/5 justify-between">
        <div className="relative h-full w-4/5">
          <button className="aniButton btn btnNorm bg-white hover:bg-[#10a37f] hover:text-white">
            <BiMessageAltDetail className="mx-1 h-5 w-5 " />
            Messages...
          </button>
          <div className="shadowButton"></div>
        </div>
        <div className="relative h-full w-[18%]">
          <button className="aniButton btn btnNorm justify-center bg-white hover:bg-[#F86250] hover:text-white">
            <BiTrash className="h-5 w-5" />
          </button>
          <div className="shadowButton"></div>
        </div>
      </div>
      {/* ====================== */}
      {/* if got map x2 */}
      <div className="flex h-11 w-4/5 justify-between">
        <div className="relative h-full w-4/5">
          <button className="aniButton btn btnNorm bg-white hover:bg-[#10a37f] hover:text-white">
            <BiMessageAltDetail className="mx-1 h-5 w-5 " />
            Messages...
          </button>
          <div className="shadowButton"></div>
        </div>
        <div className="relative h-full w-[18%]">
          <button className="aniButton btn btnNorm justify-center bg-white hover:bg-[#F86250] hover:text-white">
            <BiTrash className="h-5 w-5" />
          </button>
          <div className="shadowButton"></div>
        </div>
      </div>
      {/* ====================== */}
    </aside>
  );
}

export default SideBar;
