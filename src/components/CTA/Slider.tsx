import { useEffect, useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiper.module.css";

export function Slider() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries([
      {
        heading: "África",
        subheading: "Berço da Humanidade",
        image: "/images/africa.png",
      },
      {
        heading: "América do Norte",
        subheading: "A Cidade que nunca dorme",
        image: "/images/new-york.png",
      },
      {
        heading: "América do Sul",
        subheading: "Visite Machu Picchu",
        image: "/images/machu-picchu.png",
      },
      {
        heading: "Asia",
        subheading: "Sabedoria milenar",
        image: "/images/fuji.png",
      },
      {
        heading: "Europa",
        subheading: "Castelo da princesa",
        image: "/images/neuschwanstein.png",
      },
      {
        heading: "Oceania",
        subheading: "Cultura Maori",
        image: "/images/oceania.png",
      },
    ]);
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      className={styles.mySwiper}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      {countries.map((country) => {
        return (
          <SwiperSlide>
            <Box position="relative">
              <VStack w="100%" position="absolute" top="180px" zIndex="5">
                <Text
                  fontWeight="700"
                  fontSize="48px"
                  color="light.headings_text"
                  lineHeight="72px"
                >
                  {country.heading}
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
              <img src={country.image} alt={country.heading} />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
