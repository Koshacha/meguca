import React from 'react';
import _ from 'lodash';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

export default function AnimeList({ data }) {
  const listOrder = ['CURRENT', 'COMPLETED'];
  const colors = {
    Watching: 'bg-Watching text-gray-50',
    Completed: 'bg-Completed text-gray-600',
  };
  const lists = listOrder.map((status) => {
    for (const list of data) {
      if (list.status === status) {
        // отсортировали по дате
        let entries = _.sortBy(
          list.entries,
          (o) => `${o.media.startDate?.year}${o.media.startDate?.month}`
        );

        entries = entries.map((o) => {
          let relations = o.media.relations?.nodes?.filter(
            ({ type }) => type === 'ANIME'
          );
          relations = relations.reduce((acc, node) => {
            const exist = entries.filter((o) => o.media.id === node.id);
            if (exist.length) return [...acc, exist[0]];
            return acc;
          }, []);
          return { ...o, relations };
        });

        entries = _.sortBy(list.entries, (o) => `${o.media.title.romaji}`);

        return { ...list, entries };
      }
    }
  });

  return (
    <div className="relative w-full flex flex-row flex-wrap m-auto gap-y-4 mt-5">
      {lists.map(({ name, entries }) => (
        <React.Fragment key={name}>
          {entries.map(({ media, progress, score }) => (
            <div
              key={media.id}
              className="flex flex-row gap-3 w-full sm:w-1/2 lg:w-1/3 px-2"
            >
              <div className="relative min-w-[100px] min-h-[141px] rounded-md overflow-hidden">
                <Image
                  className={cn({
                    [`blur-sm`]: media.isAdult,
                  })}
                  src={media.coverImage.medium}
                  alt=""
                  layout="fill"
                />
                <div
                  className={cn(
                    'absolute bottom-0 w-full z-10 text-sm text-center lowercase',
                    `${colors[name]}`
                  )}
                >
                  {name}
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-bold leading-5 w-full">
                  {media.title.romaji}
                </h4>
                <div className="flex items-center mb-1 leading-5 w-full font-sans text-gray-600 text-sm">
                  {progress == media.episodes || progress != 0
                    ? `${media.episodes} ep`
                    : `${progress} of ${media.episodes} ep`}

                  {score !== 0 && (
                    <>
                      <FontAwesomeIcon
                        className="w-1 h-1 px-1"
                        icon={faCircle}
                      />
                      {score}
                      <FontAwesomeIcon className="w-2 h-2 pl-1" icon={faStar} />
                    </>
                  )}
                </div>
                <p
                  className="line-clamp-4 leading-5 text-gray-500 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: media.description.split('(Source')[0],
                  }}
                ></p>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
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
