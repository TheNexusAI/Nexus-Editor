import React from "react";

const Images = () => {
  return (
    <div className="flex flex-col gap-2 custom-shadow rounded-2xl p-2">
      <div className="flex align-middle items-center gap-2">
        <div className="">
          <img src="/images/flower.png" alt="" className=" w-14" />
        </div>
        <div className="text-lg">
          Flowers
        </div>
      </div>
      <div className="flex align-middle items-center gap-2">
        <p className="">
          <img src="/images/rock.png" alt="" className=" w-14" />
        </p>
        <div className="text-lg">
          Rocks
        </div>
      </div>
      <div className="flex align-middle items-center gap-2">
        <div className="">
          <img src="/images/water.png" alt="" className=" w-14" />
        </div>
        <p className=" text-lg">
          Water
        </p>
      </div>
      <div className="flex align-middle items-center gap-2">
        <div className=" ">
          <img src="/images/mountain.png" alt="" className=" w-14" />
        </div>
        <p className="text-lg">
          Mountains
        </p>
      </div>
    </div>
  )
}

export default Images;