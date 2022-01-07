import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export function CityCard({ image, city, country, flag }: CityCardProps) {
  return (
    <Box width="256px" height="279px" borderRadius="4" bg="#fff">
      <Image
        src={image}
        alt={`${city} - ${country}`}
        objectFit="cover"
        height="173px"
        borderTopLeftRadius="4"
        borderTopRightRadius="4"
      />
      <Flex
        px="24px"
        height="106px"
        border="1px"
        borderTop="none"
        borderColor="highlight.100"
        borderBottomLeftRadius="4"
        borderBottomRightRadius="4"
        paddingTop="18px"
      >
        <Box width="calc(100% - 30px)">
          <Text
            fontSize="20px"
            fontWeight="600"
            color="dark.headings_text"
            lineHeight="25px"
            marginBottom="12px"
          >
            {city}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            color="dark.info"
            lineHeight="26px"
          >
            {country}
          </Text>
        </Box>
        <Flex alignItems="center">
          <Image
            width="30px"
            height="30px"
            src={flag}
            alt={country}
            overflow="hidden"
            borderRadius="full"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
