import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftSideBar from "../components/sidebar/LeftSideBar";
import RightSideBar from "../components/sidebar/RightSideBar";
import Icons from "../components/Icons/Icons";
import { VscSearch } from "react-icons/vsc";
import Images from "../components/images/images";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <LeftSideBar>
          <div className="flex items-center px-6 py-2 align-middle bg-white rounded-full custom-shadow border border-slate-300">
            <input
              type="text"
              placeholder="Flower"
              className="text-gray-700 outline-none text-md"
            />
            <VscSearch />
          </div>
          <Icons />
          <Images />
        </LeftSideBar>
        <div className="flex-auto"></div>
        <RightSideBar></RightSideBar>
      </main>
    </div>
  );
}
