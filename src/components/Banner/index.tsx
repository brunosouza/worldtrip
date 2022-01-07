import { Box, Image, Text } from "@chakra-ui/react";

interface BannerProps {
  name: string;
  image: string;
}

export function Banner({ name, image }: BannerProps) {
  return (
    <Box position="relative" marginBottom="80px">
      <Image src={image} alt={name} />
      <Text
        position="absolute"
        top="369px"
        left="140px"
        color="light.headings_text"
        fontSize="48px"
        fontWeight="600"
      >
        {name}
      </Text>
    </Box>
  );
}
