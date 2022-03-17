import Link from "next/link";
import Image from "next/image";
import Background from "./Background";
import TwitterIcon from "../svg/twitter.svg";
import GithubIcon from "../svg/github.svg";
import UpworkIcon from "../svg/upwork.svg";

export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <Link href="https://twitter.com/eceqe">
            <a className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <TwitterIcon class="w-6 h-6" viewBox="0 0 24 24" />
            </a>
          </Link>
          <Link href="https://github.com/Koshacha">
            <a className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <GithubIcon className="w-6 h-6" viewBox="0 0 24 24" />
            </a>
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01355186bd65b2bf29">
            <a className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Upwork</span>
              <UpworkIcon className="w-6 h-6" viewBox="0 0 60 50" />
            </a>
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          {new Date().getFullYear()}, Ilya Mazunin
        </p>
      </div>
      <Background>
        <div className="absolute hidden md:block md:left-28 xl:left-1/4 md:bottom-5 xl:-bottom-10">
          <Image
            src="/images/bg/spring-3.png"
            alt=""
            width={694 / 7}
            height={796 / 7}
            quality="100"
          />
        </div>
      </Background>
    </footer>
  );
}
