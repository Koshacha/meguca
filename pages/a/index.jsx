import Head from 'next/head';
import { Lead } from '../../components/Lead';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyubey’s anime list</title>
      </Head>
      <Lead />
    </>
  );
}
