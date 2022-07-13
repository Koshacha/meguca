import Image from 'next/image';

export default function Lead(props) {
  return (
    <div className="flex flex-row px-4 items-center w-full m-auto mb-5 max-w-2xl">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black font-display">
          Kyubey
        </h1>
        <h2 className="text-gray-700 mb-4 font-sans">
          Being meguca is <span className="font-semibold">suffering</span>
        </h2>
      </div>
      <div className="w-[110px] sm:w-[176px] mt-5 md:mt-0 relative mb-8 sm:mb-0 ml-auto">
        <Image
          className="rounded-full"
          src={'/images/hana.jpeg'}
          alt="hana"
          width={256}
          height={256}
        />
      </div>
    </div>
  );
}