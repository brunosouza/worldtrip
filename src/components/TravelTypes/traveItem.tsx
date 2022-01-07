import { Box, Image, Text } from "@chakra-ui/react";

interface TravelItemProps {
  imagePath: string;
  text: string;
}

export function TravelItem({ imagePath, text }: TravelItemProps) {
  return (
    <Box align="center">
      <Image w="85px" h="85px" src={imagePath} alt={text} mb="6" />
      <Text color="dark.headings_text" fontWeight="700" fontSize={24}>
        {text}
      </Text>
    </Box>
  );
}
