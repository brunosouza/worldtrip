import { Box, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { CgInfo } from "react-icons/cg";

interface ContinentBioProps {
  description: string;
}

export function ContinentBio({ description }: ContinentBioProps) {
  return (
    <Flex
      width="100%"
      maxWidth={1160}
      mx="auto"
      marginBottom="80px"
      justifyContent="space-between"
    >
      <Text
        width="calc(100% - 490px)"
        fontSize="24px"
        lineHeight="36px"
        color="dark.headings_text"
      >
        {description}
      </Text>
      <HStack spacing="42px">
        <Box align="center">
          <Text
            fontSize="48px"
            fontWeight="600"
            color="highlight.100"
            lineHeight="72px"
          >
            50
          </Text>
          <Text
            fontSize="24px"
            fontWeight="600"
            color="dark.headings_text"
            lineHeight="36px"
          >
            países
          </Text>
        </Box>
        <Box align="center">
          <Text
            fontSize="48px"
            fontWeight="600"
            color="highlight.100"
            lineHeight="72px"
          >
            60
          </Text>
          <Text
            fontSize="24px"
            fontWeight="600"
            color="dark.headings_text"
            lineHeight="36px"
          >
            línguas
          </Text>
        </Box>
        <Box align="center">
          <Text
            fontSize="48px"
            fontWeight="600"
            color="highlight.100"
            lineHeight="72px"
          >
            27
          </Text>
          <Text
            fontSize="24px"
            fontWeight="600"
            color="dark.headings_text"
            lineHeight="36px"
            whiteSpace="nowrap"
            as="div"
            alignItems="center"
            display="flex"
          >
            cidades + 100{" "}
            <Tooltip
              hasArrow
              label="Possui cidades top 100 visitadas no mundo"
              bg="gray.300"
              color="black"
            >
              <span>
                <CgInfo />
              </span>
            </Tooltip>
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
}
