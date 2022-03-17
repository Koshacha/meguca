import Background from "./Background";
import Image from "next/image";
import ReactIcon from "../svg/tech/react.svg";
import ReduxIcon from "../svg/tech/redux.svg";
import NextIcon from "../svg/tech/nextjs.svg";
import GoogleScriptIcon from "../svg/tech/gapps.svg";
import BitrixIcon from "../svg/tech/bitrix.svg";
import TailwindIcon from "../svg/tech/tailwind.svg";
import GulpIcon from "../svg/tech/gulp.svg";
import SassIcon from "../svg/tech/sass.svg";
import TypeScriptIcon from "../svg/tech/ts.svg";
import WebpackIcon from "../svg/tech/webpack.svg";

export default function Frameworks() {
  return (
    <section className="w-full py-16 xl:overflow-visible relative">
      <div className="max-w-6xl relative mx-auto flex sm:px-0 px-8 md:px-10 flex-col items-start sm:items-center justify-center">
        <h2 className="text-gray-900 dark:text-white text-3xl font-bold">
          I work with any solutions
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg text-left sm:text-center max-w-lg mt-5">
          In my projects, I use these and many other frameworks or libraries. If
          your project is built in something else, feel free to contact me, I am
          always open to learning new technologies. I am also open to building
          integrations for any popular third-party services. 🙌
        </p>
        <button className="text-indigo-500 font-bold text-lg mt-5 flex items-center group">
          <span>Get started</span>
          <svg
            className="w-5 h-5 group-hover:ml-1 transition-all ease-out duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-6 mt-8">
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <TypeScriptIcon className="w-12 h-12" viewBox="0 0 512 512" />
          </div>
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <ReactIcon className="w-12 h-12" />
          </div>
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <ReduxIcon className="w-12 h-12" viewBox="0 0 256 244" />
          </div>
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <NextIcon className="w-12 h-12 invert" viewBox="0 0 207 124" />
          </div>
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <GoogleScriptIcon className="w-12 h-12" viewBox="0 0 512 512" />
          </div>
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200  dark:border-gray-700 flex items-center justify-center">
            <SassIcon className="w-12 h-12" viewBox="0 0 547.8 410.6" />
          </div>
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <TailwindIcon className="w-12 h-12" viewBox="0 0 1000 1000" />
          </div>
          <div className="h-20 w-20 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
            <WebpackIcon className="w-12 h-12" viewBox="0 0 774 875.7" />
          </div>
        </div>
      </div>
      <Background>
        <div className="absolute rotate-12 md:rotate-0 right-3 md:-right-10 xl:right-24 -bottom-24 md:bottom-40 2xl:bottom-0">
          <Image
            src="/images/bg/doodle.png"
            alt=""
            width={1758 / 5}
            height={974 / 5}
            quality="100"
          />
        </div>
      </Background>
    </section>
  );
}
