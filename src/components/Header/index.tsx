import { Flex, Icon, IconButton, Image, Link } from "@chakra-ui/react";
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
      <Link href="/" m="auto" unstyled>
        <Image w={184} h={45} src="../images/logo.svg" alt="WorldTrip" />
      </Link>
    </Flex>
  );
}
