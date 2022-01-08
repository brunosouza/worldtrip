import { useEffect, useState } from "react";
import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiper.module.css";

type Continent = {
  slug: string;
  name: string;
  subheading: string;
  banner: string;
};

interface ContinentProps {
  continents: Continent[];
}

export function Slider({ continents }: ContinentProps) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(continents);
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      className={styles.mySwiper}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {countries.map((country) => {
        return (
          <SwiperSlide key={country.uid}>
            <Box position="relative">
              <Link href={`/continent/${country.slug}`}>
                <VStack w="100%" position="absolute" top="180px" zIndex="5">
                  <Text
                    fontWeight="700"
                    fontSize="48px"
                    color="light.headings_text"
                    lineHeight="72px"
                  >
                    {country.name}
                  </Text>
                  <Text
                    fontWeight="700"
                    fontSize="24px"
                    color="light.info"
                    lineHeight="36px"
                    marginTop="0"
                  >
                    {country.subheading}
                  </Text>
                </VStack>
                <img src={country.banner} alt={country.name} />
              </Link>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
