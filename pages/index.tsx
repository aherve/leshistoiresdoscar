import type { NextPage } from "next";
import { Heading, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { readdir } from "node:fs/promises";
import path from "path";
import NextLink from "next/link";

export async function getServerSideProps() {
  console.log("PWD", process.cwd());
  const stories = await readdir("./pages/histoires/");
  return {
    props: {
      stories: stories.map((s) => path.parse(s).name),
    },
  };
}

const Home: NextPage<{ stories: string[] }> = (props) => {
  return (
    <>
      <Heading as="h1"> Les histoires d&apos;Oscar</Heading>
      <UnorderedList>
        {props.stories.map((story) => {
          return (
            <ListItem key={story}>
              <NextLink href={"histoires/" + story} passHref>
                <Link>{story}</Link>
              </NextLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </>
  );
};

export default Home;
