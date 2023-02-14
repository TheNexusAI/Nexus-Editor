import { BsImage } from "react-icons/bs";
import { ImMagicWand } from "react-icons/im";
import { FaSlidersH } from "react-icons/fa";
import { BsCrop } from "react-icons/bs";
import { AiOutlineLineChart } from "react-icons/ai";
import { RxText } from "react-icons/rx";
import { MdOutlineBrush } from "react-icons/md";
import { BiBrightnessHalf } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";
import { BsEyedropper } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosColorFilter } from "react-icons/io";
import { IoIosImages } from "react-icons/io";
import { BsImageAlt } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { MdFormatLineSpacing } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import {RiReplyAllFill} from "react-icons/ri";
import Icon from "./Icon";

const Icons = () => {
  return (
    <div className="flex flex-wrap justify-center p-5 my-8 custom-shadow rounded-2xl gap-x-7 gap-y-5">
      <Icon>
        <BsImage />
      </Icon>
      <Icon>
        <ImMagicWand />
      </Icon>
      <Icon>
        <IoIosColorFilter />
      </Icon>
      <Icon>
        <FaSlidersH />
      </Icon>
      <Icon>
        <BsCrop />
      </Icon>
      <Icon>
        <AiOutlineLineChart />
      </Icon>
      <Icon>
        <IoIosImages />
      </Icon>
      <Icon>
        <RxText />
      </Icon>
      <Icon>
        <MdOutlineBrush />
      </Icon>
      <Icon>
        <BiBrightnessHalf />
      </Icon>
      <Icon>
        <BsImageAlt />
      </Icon>
      <Icon>
        <AiFillEye />
      </Icon>
      <Icon>
        <MdFormatLineSpacing />
      </Icon>
      <Icon>
        <FaRegDotCircle />
      </Icon>
      <Icon>
        <MdRefresh />
      </Icon>
      <Icon>
        <BsEyedropper />
      </Icon>
      <Icon>
        <BsImages />
      </Icon>
      <Icon>
        <RiReplyAllFill />
      </Icon>
      <Icon>
        <BiSave />
      </Icon>
      <Icon>
        <RiDeleteBin5Fill />
      </Icon>
    </div>
  );
};

export default Icons;
