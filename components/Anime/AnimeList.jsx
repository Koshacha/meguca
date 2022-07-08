import React from 'react';
import _ from 'lodash';

export default function AnimeList({ data }) {
  const listOrder = ['CURRENT', 'COMPLETED', 'DROPPED', 'PLANNING'];
  const lists = listOrder.map((status) => {
    for (const list of data) {
      if (list.status === status) {
        // отсортировали по дате
        let entries = _.sortBy(
          list.entries,
          (o) => `${o.media.startDate?.year}${o.media.startDate?.month}`
        );

        entries.map((o) => {
          for (const node of o.media.relations?.nodes) {
            const id = node.id;
            console.log();
          }
          return o;
        });
        // console.log({ ...list, entries });
        return { ...list, entries };
      }
    }
  });

  return (
    <>
      {lists.map(({ name, entries }) => (
        <React.Fragment key={name}>
          <h3 className="font-bold text-xl text-center tracking-tight mb-6 mt-4 text-gray-900 font-sans">
            {name}
          </h3>
          <div className="relative bg-white overflow-x-auto shadow-md sm:rounded-lg w-full">
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
