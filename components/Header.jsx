export default function Header() {
  return (
    <header className="relative w-full px-8 text-gray-700 bg-white body-font">
      <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-3xl">
        <a
          href="#_"
          className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
        >
          tails.
        </a>

        <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
          <a
            href="#_"
            className="relative font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            <span className="block">Home</span>
          </a>
          <a
            href="#_"
            className="relative font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            <span className="block">Features</span>
          </a>
          <a
            href="#_"
            className="relative font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            <span className="block">Pricing</span>
          </a>
          <a
            href="#_"
            className="relative font-medium leading-6 text-gray-600 hover:text-gray-900"
          >
            <span className="block">Blog</span>
          </a>
        </nav>

        <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}