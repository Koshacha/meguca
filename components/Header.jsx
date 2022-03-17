import Link from "next/link";
import LampSvg from "../svg/lamp.svg";

export default function Header() {
  return (
    <header className="relative w-full px-8 text-gray-700 bg-white body-font">
      <div className="container flex flex-row flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-4xl">
        <Link href="/">
          <a className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
            ilya.
          </a>
        </Link>
        <nav className="top-0 left-0 z-0 flex items-center justify-center w-auto md:w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
          <Link href="/posts">
            <a className="relative font-medium leading-6 text-gray-600 hover:text-gray-900">
              <span className="block">Posts</span>
            </a>
          </Link>
          <Link href="/projects">
            <a className="relative font-medium leading-6 text-gray-600 hover:text-gray-900">
              <span className="block">Showcase</span>
            </a>
          </Link>
          <Link href="/contact">
            <a className="relative font-medium leading-6 text-gray-600 hover:text-gray-900">
              <span className="block">Contacts</span>
            </a>
          </Link>
        </nav>
        <div className="relative hidden md:inline-flex z-10 items-center space-x-3 md:ml-5 lg:justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <button className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
              <LampSvg className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </button>
          </span>
        </div>
      </div>
    </header>
  );
}
