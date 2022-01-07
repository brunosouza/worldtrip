import Head from "next/head";
import { CTA } from "../components/CTA";
import { Header } from "../components/Header/index";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <Hero />
      <TravelTypes />
      <CTA />
    </>
  );
}
