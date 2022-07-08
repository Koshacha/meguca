import StatCardSkeleton from './Skeletons/StatCardSkeleton';

export default function Loading(props) {
  return (
    <>
      <div className="container items-center px-0 m-auto mt-5">
        <div className="flex flex-wrap pb-3 lg:mx-0">
          {[1, 2, 3].map((i) => (
            <div key={`skeleton${i}`} className="w-full p-2 md:w-1/3">
              <StatCardSkeleton />
            </div>
          ))}
        </div>
      </div>
      {/* <AnimeList data={data.MediaListCollection.lists} /> */}
    </>
  );
}
