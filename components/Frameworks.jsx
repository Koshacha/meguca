import Background from "./Background";
import Image from "next/image";
import ReactIcon from "../svg/tech/react.svg";
import ReduxIcon from "../svg/tech/redux.svg";
import NextIcon from "../svg/tech/nextjs.svg";
import GoogleScriptIcon from "../svg/tech/gapps.svg";
import GatsbyIcon from "../svg/tech/gatsby.svg";
import VueIcon from "../svg/tech/vue.svg";

export default function Frameworks() {
  return (
    <section className="w-full py-16 overflow-visible bg-white relative">
      <div className="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
        <h2 className="text-gray-900 text-3xl font-bold">
          I work with 1,000+ apps.
        </h2>
        <p className="text-gray-600 text-lg text-left sm:text-center max-w-lg mt-5">
          We have built integrations to work seemlessly with Zapier referred to
          as Zaps. This means that you can connect our app with thousands of
          other popular third-party services 🙌
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
        <div className="flex flex-wrap justify-start sm:grid sm:grid-cols-4 md:grid-cols-7 gap-6 mt-8">
          <div className="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
            <ReactIcon className="w-12 h-12" />
          </div>
          <div className="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
            <ReduxIcon className="w-12 h-12" viewBox="0 0 256 244" />
          </div>
          <div className="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
            <NextIcon className="w-12 h-12" viewBox="0 0 207 124" />
          </div>
          <div className="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
            <GoogleScriptIcon className="w-12 h-12" viewBox="0 0 512 512" />
          </div>
        </div>
      </div>
      <Background>
        <div className="absolute left-1/3 -top-32">
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
