import React from "react";
import { TbLoader } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { TbSquarePlus } from "react-icons/tb";
import { TbFocusCentered } from "react-icons/tb";
import { TbGridDots } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-10 align-middle ">
      <div className="flex gap-4 align-middle w-3/5">
        <div className="p-2 bg-white border border-solid rounded-full border-slate-300">
          <TbLoader fontSize={50} />
        </div>
        <div className="p-3 bg-white border border-solid rounded-full border-slate-300">
          <FaBars fontSize={40} />
        </div>
        <div className="flex px-6 py-3 align-middle bg-white border border-solid rounded-full border-slate-300 w-2/3 relative">
          <input type="text" placeholder="Flower" className="text-xl outline-none w-full " />
          <div className=" pt-1 absolute right-4 flex gap-4 align-middle justify-center">
            <TbSquarePlus size={35} />
            <TbFocusCentered size={35} />
          </div>
        </div>
      </div>
      <div className="flex align-middle gap-4">
        <div className="p-2 bg-white border border-solid rounded-full border-slate-300">
          <TbGridDots fontSize={50} />
        </div>
        <div className="bg-white border border-solid rounded-full border-slate-300">
          <img src="/images/selfi.png" alt="" className=" w-16" />
        </div>
      </div>
    </div>
  )
}

export default Header;