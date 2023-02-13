import React from "react";
import { GiSunflower } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" px-8 py-10 flex justify-between align-middle">
      <div className=" flex align-middle gap-4">
        <div className=" border-solid border rounded-full bg-white border-slate-300">
          <GiSunflower fontSize={60} />
        </div>
        <div className="border-solid border rounded-full bg-white border-slate-300 p-3">
          <FaBars fontSize={40} />
        </div>
        <div className=" border-solid border rounded-full bg-white border-slate-300 px-6 py-3 align-middle flex">
          <input type="text" placeholder="Flower" className=" text-xl outline-none" />
        </div>
      </div>
      <div className="flex align-middle"></div>
    </div>
  )
}

export default Header;