import {
  Box,
  Heading,
  Container,
  Spacer,
  Flex,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";

import NextLink from "next/link";

export const Header = () => (
  <Box as="nav" borderBottomWidth="1px">
    <Container maxW={["container.xl", null, null, "8xl"]}>
      <Flex height="100%" align="center">
        <Flex align="center">
          <Flex direction="column" align="center">
            <NextLink href="/" passHref>
              <Link>
                <Heading as="h1">Les Histoires d'Oscar</Heading>
              </Link>
            </NextLink>
            <Box>
              <i>Histoires écrites par Oscar Hervé</i>
            </Box>
          </Flex>
        </Flex>
        <Spacer></Spacer>
        <Flex align="center" height="100%" justifyContent="flex-end">
          <Stack spacing="12px" py="3">
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src="/oscar.jpg"
                  height="100px"
                  cursor="pointer"
                  alt="Exomodule"
                />
              </Link>
            </NextLink>
          </Stack>
        </Flex>
      </Flex>
    </Container>
  </Box>
);
