export default function StatCard({ icon, value, field }) {
  return (
    <div className="flex flex-row px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#F2D7D9]  hover:to-[#D3CEDF] rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
      <div className="ml-0">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-700 group-hover:text-gray-500 font-display">
          {value}
        </h1>
        <div className="flex flex-row justify-between group-hover:text-gray-500">
          <p className="text-sm">{field}</p>
        </div>
      </div>
    </div>
  );
}
