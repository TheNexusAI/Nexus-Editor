import { useState, useRef, useEffect } from "react";

const Slider = ({ text, iniPercent }) => {
  const pointer = useRef(null);
  const container = useRef(null);
  const [percent, setPercent] = useState(iniPercent);

  const MAX = 207;
  // let movable = false;
  const [movable, setMovable] = useState(false);

  const onChangePercent = (e) => {
    const offset = e.clientX - container.current.getBoundingClientRect().x;
    if (!movable || offset > 207) return;
    const percent = parseInt((offset / MAX) * 100);
    setPercent(percent);
    pointer.current.style.left = offset + "px";
  };

  useEffect(() => {
    const offset = (MAX * iniPercent) / 100;
    pointer.current.style.left = offset + "px";
    window.addEventListener(
      "mouseup",
      () => {
        setMovable(false);
      },
      true
    );
  }, []);

  return (
    <div className="text-xl mb-3" ref={container} onMouseMove={onChangePercent}>
      {text}
      <span className="float-right">{percent}%</span>
      <hr className="mt-4 border-gray-600 border-y-[1px]" />
      <div
        ref={pointer}
        className="w-3 h-3 border-2 border-gray-800 rounded-full mt-[-7px] circle bg-white cursor-pointer relative"
        onMouseDown={() => {
          setMovable(true);
        }}
      ></div>
    </div>
  );
};

export default Slider;
