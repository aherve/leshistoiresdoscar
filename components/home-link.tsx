import NextLink from "next/link";
import { Link, Flex, Box } from "@chakra-ui/react";

export function HomeLink() {
  return (
    <>
      <Flex width="100%" align="center" direction="column">
        <Box>
          <NextLink href="/" passHref>
            <Link>
              <b>Retour</b>
            </Link>
          </NextLink>
        </Box>
      </Flex>
    </>
  );
}
