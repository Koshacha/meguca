import React from 'react';

export default function AnimeList({ data }) {
  const listOrder = ['CURRENT', 'COMPLETED', 'DROPPED', 'PLANNING'];
  const lists = listOrder.map((status) => {
    for (const list of data) {
      if (list.status === status) {
        return list;
      }
    }
  });
  return (
    <>
      {lists.map(({ name, entries }) => (
        <React.Fragment key={name}>
          <h3 className="font-bold text-xl tracking-tight mb-6 mt-4 text-gray-900 font-sans">
            {name}
          </h3>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Score
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Progress
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {entries.map(({ media, progress, score }) => (
                  <tr
                    key={media.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 dark:text-white whitespace-pre-wrap"
                    >
                      {media.title.romaji}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {score !== 0 ? score : ''}
                    </td>
                    <td className="px-3 py-2 text-center">
                      {progress}/{media.episodes}
                    </td>
                    <td className="px-3 py-2 text-center">{media.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

// media:
// duration: 25
// episodes: 22
// format: "TV"
// id: 21366
// isAdult: false
// isFavourite: false
// title: {__typename: 'MediaTitle', romaji: '3-gatsu no Lion', native: '３月のライオン'}
// __typename: "Media"
// [[Prototype]]: Object
// progress: 22
// score: 8
// status: "CURRENT"
