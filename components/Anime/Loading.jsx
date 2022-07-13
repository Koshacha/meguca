import React from 'react';
import StatCardSkeleton from './Skeletons/StatCardSkeleton';
import AnimeEntrySkeleton from './Skeletons/AnimeEntrySkeleton';

export default function Loading(props) {
  return (
    <>
      <div className="container items-center px-0 m-auto mt-5 max-w-2xl">
        <div className="flex flex-wrap pb-3 lg:mx-0">
          {[1, 2, 3].map((i) => (
            <div key={`skeleton${i}`} className="w-full p-2 md:w-1/3">
              <StatCardSkeleton />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {([...new Array(20)]).map((el, i) => (
          <AnimeEntrySkeleton key={i} />
        ))}
      </div>
    </>
  );
}
