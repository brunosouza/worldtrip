import Head from "next/head";
import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";

import { CTA } from "../components/CTA";
import { Header } from "../components/Header/index";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";

import { getPrismicClient } from "../services/prismic";

type Continent = {
  slug: string;
  name: string;
  subheading: string;
  banner: string;
};

interface ContinentProps {
  continents: Continent[];
}

export default function Home({ continents }: ContinentProps) {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <Header />
      <Hero />
      <TravelTypes />
      <CTA continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "continent")],
    {
      fetch: ["continent.name", "continent.subheading", "continent.banner"],
      pageSize: 6,
    }
  );

  const continents = response.results.map((continent) => {
    return {
      slug: continent.uid,
      name: RichText.asText(continent.data.name),
      subheading: RichText.asText(continent.data.subheading),
      banner: continent.data.banner.url,
    };
  });

  return { props: { continents } };
};
