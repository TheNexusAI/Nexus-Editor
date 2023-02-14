import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftSideBar from "../components/sidebar/LeftSideBar";
import RightSideBar from "../components/sidebar/RightSideBar";
import Icons from "../components/Icons/Icons";
import { VscSearch } from "react-icons/vsc";
import Images from "../components/images/images";
import Slider from "../components/Slider/slider";
import MainContent from "../components/sidebar/MainContent";
import { MdFlare } from "react-icons/md";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full">
        <LeftSideBar>
          <div className="flex items-center px-6 py-2 align-middle bg-white rounded-full custom-shadow border border-slate-300 relative">
            <input
              type="text"
              placeholder="Flower"
              className="text-gray-700 outline-none text-md"
            />
            <div className=" absolute right-4">
              <VscSearch />
            </div>
          </div>
          <Icons />
          <Images />
          <div className="p-5 mt-5 custom-shadow rounded-2xl">
            <Slider text="Artistic" iniPercent={96} />
            <Slider text="Beautiful" iniPercent={81} />
            <Slider text="Light" iniPercent={11} />
            <Slider text="Randomness" iniPercent={4} />
          </div>
        </LeftSideBar>
        <MainContent>
          <div className=" text-base">
            The pilot, cyborg, and conscious cube traveled through the neverending landscape. Once beyond view of the outside world they would be marooned eternally in this illusion unless they could find the nexus. Suddenly the conscious cube luminesced and hovered in one direction. Did its entangler locate the secrete of the universe? ...
          </div>
        </MainContent>
        <RightSideBar>
          <div className="flex items-center px-6 py-2 align-middle bg-white rounded-full custom-shadow border border-slate-300 justify-between">
            <div className=" text-base">A purple lakeview</div>
            <div className="">
              <MdFlare size={25} />
            </div>
          </div>
          <div className="custom-shadow rounded-2xl py-5 px-6 my-8 text-base font-normal h-[27vh]">
            Suddenly, a crystal cyber dragon appeared! Swiftly, The  cyborg flashed dual laser beams from its two palms!
          </div>
          <div className=" flex flex-col custom-shadow rounded-3xl h-[37vh]">
            <img src="/images/paint.png" alt="" className=" w-full" />
            <div className=" px-3">

              <Slider text="Zoom" iniPercent={50} />
            </div>

          </div>
        </RightSideBar>
      </main>
    </div>
  );
}
