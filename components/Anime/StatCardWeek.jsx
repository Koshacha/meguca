import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function StatCardWeek({ icon, value, field }) {
  return (
    <div className="flex flex-row px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-[#F2D7D9]  hover:to-[#D3CEDF] rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
      <div className="flex flex-row justify-between items-center">
        <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
          <FontAwesomeIcon
            className="h-6 w-6 group-hover:text-gray-50"
            icon={icon}
          />
        </div>
      </div>
      <div className="ml-6">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 group-hover:text-gray-50">
          {value}
        </h1>
        <div className="flex flex-row justify-between group-hover:text-gray-200">
          <p>{field}</p>
        </div>
      </div>
    </div>
  );
}
