export default function AnimeEntrySkeleton() {
  return (
    <div className="flex flex-row gap-3 w-full px-2 pl-0 bg-white rounded-xl shadow-sm animate-pulse">
      <div className="relative min-w-[100px] min-h-[141px] bg-gray-300 rounded-md rounded-r-none overflow-hidden">
      </div>
      <div className='w-full'>
        <h4 className="mt-1 mb-2 font-bold leading-5 w-1/2 h-5 rounded-md bg-gray-300"></h4>
        <div className="mb-4 w-20 h-4 rounded-md bg-gray-300"></div>
        <div className="mb-1 w-full h-2 rounded-md bg-gray-300"></div>
        <div className="mb-1 w-full h-2 rounded-md bg-gray-300"></div>
        <div className="mb-1 w-full h-2 rounded-md bg-gray-300"></div>
        <div className="mb-1 w-full h-2 rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
}
