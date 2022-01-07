import Head from "next/head";
import { Banner } from "../components/Banner";
import { ContinentBio } from "../components/ContinentBio";
import { Header } from "../components/Header";
import { TopCities } from "../components/TopCities";

export default function Cotinent() {
  return (
    <>
      <Head>
        <title>Continent | worldtrip</title>
      </Head>
      <Header />
      <Banner name="Europa" image="/images/banners/europa.png" />
      <ContinentBio
        description="A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste."
      />
      <TopCities />
    </>
  );
}
