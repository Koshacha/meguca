import Head from 'next/head';
import { useQuery } from '@apollo/client';
import ANIME_LIST from '../../graphql/list.graphql';
import Container from '../../components/Anime/Container';
import Lead from '../../components/Anime/Lead';
import Stat from '../../components/Anime/Stat';
import AnimeList from '../../components/Anime/AnimeList';
import Loading from '../../components/Anime/Loading';

export default function AnimePage() {
  const { loading, error, data } = useQuery(ANIME_LIST, {
    variables: {
      user: 'nobaka',
      userId: 159035,
    },
  });

  let Content;

  if (loading) {
    Content = <Loading />;
  } else if (error) {
    console.error(error);
    Content = (
      <div
        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 w-full"
        role="alert"
      >
        <h3 className="font-semibold">Error!</h3>
        Check the console for details.
      </div>
    );
  } else {
    Content = (
      <>
        <Stat data={data.User.statistics.anime} />
        <AnimeList data={data.MediaListCollection.lists} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Kyubey’s anime list</title>
      </Head>
      <Container>
        <Lead />
        {Content}
      </Container>
    </>
  );
}
