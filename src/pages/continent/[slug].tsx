import Head from "next/head";
import { GetServerSideProps } from "next";
import { RichText } from "prismic-dom";

import { Banner } from "../../components/Banner";
import { ContinentBio } from "../../components/ContinentBio";
import { Header } from "../../components/Header";
import { TopCities } from "../../components/TopCities";

import { getPrismicClient } from "../../services/prismic";

interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    subheading: string;
    cover: string;
    description: string;
  };
}

export default function Cotinent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
      </Head>
      <Header />
      <Banner name={continent.name} image={continent.cover} />
      <ContinentBio description={continent.description} />
      <TopCities />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID("continent", String(slug), {});

  const continent = {
    slug: response.uid,
    name: RichText.asText(response.data.name),
    subheading: RichText.asText(response.data.subheading),
    cover: response.data.cover.url,
    description: RichText.asText(response.data.description),
  };

  return { props: { continent } };
};
