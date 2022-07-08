import Head from 'next/head';
import { Lead } from '../components/Lead';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ilya Mazunin — JavaScript Developer</title>
        <meta
          name="description"
          content="Let’s create awesome apps together. I hope you consider me to be part of your business. I look forward to fruitful cooperation."
        />
      </Head>
      <Lead />
    </>
  );
}
