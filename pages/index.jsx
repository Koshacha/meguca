import Head from "next/head";
import Image from "next/image";
import { Header, Footer, Lead, Frameworks } from "../components";

export default function Home() {
  return (
    <>
      <Header />
      <Lead />
      <Frameworks />
      <Footer />
    </>
  );
}
