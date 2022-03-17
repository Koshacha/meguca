import Background from "./Background";
import Image from "next/image";
import ButtonArrowSvg from "../svg/button-arrow.svg";

export default function Lead() {
  return (
    <section className="relative flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
      <div className="relative max-w-4xl px-10 text-center text-white auto lg:px-0">
        <div className="flex flex-col w-full md:flex-row justify-between">
          <div className="flex flex-col items-start">
            <h1 className="relative flex flex-col text-5xl font-extrabold text-left text-black mb-6">
              JavaScript Developer
              <span className="">for your next project</span>
            </h1>
            <h2 className="text-left text-gray-500 xl:text-xl mb-8">
              Let’s create awesome apps together. I hope you consider me to be
              part of your business. I look forward to fruitful cooperation.
              Contact me so we can discuss your project as soon as possible.
            </h2>
            <button className="inline-flex items-center h-10 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
              Get started{" "}
              <ButtonArrowSvg
                className="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
              />
            </button>
          </div>
          <div className="relative h-64 mt-12 md:-mt-16 md:h-96"></div>
        </div>
        <div className="my-16 border-b border-gray-300 lg:my-24"></div>
      </div>
      <Background>
        <div className="absolute left-44 top-0">
          <Image
            src="/images/bg/ball.png"
            alt=""
            width={426 / 2.5}
            height={427 / 2.5}
            quality="100"
          />
        </div>
        <div className="absolute left-28 bottom-20">
          <Image
            src="/images/bg/spring.png"
            alt=""
            width={296 / 2.5}
            height={294 / 2.5}
            quality="100"
          />
        </div>
        <div className="absolute right-32 top-28">
          <Image
            src="/images/bg/spring-2.png"
            alt=""
            width={368 / 2.5}
            height={418 / 2.5}
            quality="100"
          />
        </div>
        <div className="absolute right-64 bottom-16">
          <Image
            src="/images/bg/dango.png"
            alt=""
            width={334 / 2.5}
            height={518 / 2.5}
            quality="100"
          />
        </div>
      </Background>
    </section>
  );
}
