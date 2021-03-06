import { Box, Flex, Text } from "@chakra-ui/react";

import { Slider } from "./Slider";

type Continent = {
  slug: string;
  name: string;
  subheading: string;
  banner: string;
};

interface ContinentProps {
  continents: Continent[];
}

export function CTA({ continents }: ContinentProps) {
  return (
    <Flex w="100%" maxWidth={1240} mx="auto" mb="40px" flexDirection="column">
      <Text
        fontSize={36}
        align="center"
        color="dark.headings_text"
        lineHeight="54px"
        mx="auto"
        mb="52px"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <Box w="1240px" h="450px">
        <Slider continents={continents} />
      </Box>
    </Flex>
  );
}
