import { Flex } from "@chakra-ui/react";
import { TravelItem } from "./traveItem";

export function TravelTypes() {
  return (
    <Flex w="1160px" mx="auto" justifyContent="space-between">
      <TravelItem imagePath="/images/cocktail.svg" text="vida noturna" />
      <TravelItem imagePath="/images/surf.svg" text="praia" />
      <TravelItem imagePath="/images/building.svg" text="moderno" />
      <TravelItem imagePath="/images/museum.svg" text="clássico" />
      <TravelItem imagePath="/images/earth.svg" text="e mais..." />
    </Flex>
  );
}
