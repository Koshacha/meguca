import Head from "next/head";
import Image from "next/image";
import { Header, Footer, Lead, Frameworks } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ilya Mazunin — JavaScript Developer</title>
      </Head>
      <Header />
      <Lead />
      <Frameworks />
      <Footer />
    </>
  );
}
