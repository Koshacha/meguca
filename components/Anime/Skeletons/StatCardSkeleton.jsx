export default function StatCardSkeleton(props) {
  return (
    <div className="flex flex-row animate-pulse px-6 py-10 overflow-hidden bg-white rounded-xl shadow-sm duration-300 opacity-[.8]">
      <div className="ml-0">
        <div className="w-12 bg-gray-300 h-8 mb-2 rounded-md"></div>
        <div className="w-4 bg-gray-300 h-4 rounded-md"></div>
      </div>
    </div>
  );
}
