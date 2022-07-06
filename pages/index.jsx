import Head from 'next/head';
import { Lead } from '../components/Lead';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ilya Mazunin — JavaScript Developer</title>
      </Head>
      <Lead />
    </>
  );
}
