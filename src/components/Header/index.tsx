import { Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex w="100%" maxWidth={1480} h="100" mx="auto" as="header">
      {/* <IconButton
        aria-label="Voltar"
        icon={<Icon as={RiArrowLeftSLine} />}
        fontSize="24"
        variant="unstyled"
        my="auto"
      ></IconButton> */}
      <Image w={184} h={45} m="auto" src="../images/logo.svg" alt="WorldTrip" />
    </Flex>
  );
}
