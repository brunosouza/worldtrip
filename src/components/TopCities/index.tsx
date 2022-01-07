import { Box, Flex, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

export function TopCities() {
  return (
    <Flex
      width="100%"
      maxWidth={1160}
      mx="auto"
      marginBottom="35px"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Text
        color="dark.headings_text"
        fontSize="36px"
        lineHeight="54px"
        fontWeight="500"
        marginBottom="40px"
      >
        Cidades +100
      </Text>
      <Flex width="100%" flexWrap="wrap">
        <CityCard
          city="Londres"
          country="England"
          flag="/images/flags/uk.png"
          image="/images/fuji.png"
        />
      </Flex>
    </Flex>
  );
}
