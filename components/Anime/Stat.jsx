import StatCard from './StatCard';
import StatCardWeek from './StatCardWeek';
import { faT, faD, faM } from '@fortawesome/free-solid-svg-icons';

export default function Stat({ data }) {
  return (
    <div className="container items-center px-0 m-auto mt-5 max-w-2xl">
      <div className="flex flex-wrap pb-3 lg:mx-0">
        <div className="p-2 w-1/2">
          <StatCard
            field={'Total Anime Watched'}
            value={data.statuses[0].count}
            icon={faT}
          />
        </div>
        <div className="p-2 w-1/2">
          <StatCard
            field={'Days Watched'}
            value={Math.round((data.minutesWatched / 60 / 24) * 100) / 100}
            icon={faD}
          />
        </div>
        {/* <div className="p-2 w-1/3">
          <StatCard field={'Mean Score'} value={data.meanScore} icon={faM} />
        </div> */}
      </div>
    </div>
  );
}

/*
<ul className="w-full sm:w-4/5 text-xs sm:text-sm justify-center lg:justify-end items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
          <li>
            <button className="px-4 py-2 bg-indigo-500 rounded-full text-sm text-gray-100 hover:bg-indigo-700 hover:text-gray-200">
              30 days
            </button>
          </li>
          <li>
            <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
              90 days
            </button>
          </li>
          <li>
            <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
              6 months
            </button>
          </li>
          <li>
            <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200">
              12 months
            </button>
          </li>
        </ul>
        */
