import { Flex, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex
      w="100%"
      h={335}
      mb={114}
      bgImage="url(/images/stars.png)"
      bgRepeat="no-repeat"
      pt="80px"
      position="relative"
    >
      <Flex w="100%" maxWidth={1160} mx="auto" direction="column">
        <Text
          fontSize="36px"
          fontWeight="500"
          lineHeight="54px"
          color="light.headings_text"
          mb="5"
        >
          5 Continentes,
          <br />
          infinitas possibilidades.
        </Text>
        <Text
          fontSize="20px"
          fontWeight="400"
          lineHeight="30px"
          maxWidth={525}
          color="light.headings_text"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
        <Image
          w="417.15px"
          h="270.74px"
          src="/images/airplane.svg"
          alt="Ilustração de um avião"
          position="absolute"
          top="86px"
          right="146.8px"
          rotate="3deg"
        />
      </Flex>
    </Flex>
  );
}
