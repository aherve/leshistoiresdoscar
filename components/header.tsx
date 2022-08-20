import {
  Box,
  Heading,
  Container,
  Grid,
  Flex,
  Image,
  Link,
  GridItem,
  Stack,
} from "@chakra-ui/react";

import NextLink from "next/link";

export const Header = () => (
  <Box as="nav" borderBottomWidth="1px">
    <Container maxW={["container.xl", null, null, "8xl"]}>
      <Grid templateColumns={["1fr 1fr", , , "1fr 1fr 1fr"]}>
        <GridItem>
          <Flex height="100%" align="center">
            <NextLink href="/" passHref>
              <Link>
                <Heading as="h1">Les Histoires d'Oscar</Heading>
              </Link>
            </NextLink>
          </Flex>
        </GridItem>
        <GridItem colStart={[2, , , 3]}>
          <Flex align="center" height="100%" justifyContent="flex-end">
            <Stack spacing="12px" py="3" direction={["column", , , "row"]}>
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
        </GridItem>
      </Grid>
    </Container>
  </Box>
);
