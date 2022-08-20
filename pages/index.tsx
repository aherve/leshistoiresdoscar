import type { NextPage } from "next";
import { Box, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import NextLink from "next/link";

type Story = {
  slug: string;
  link: string;
};

const stories: Story[] = [
  {
    slug: "le-chien-le-chat-et-la-grenouille",
    link: "Le chien, le chat et la grenouille",
  },
  {
    slug: "l-ours-et-la-famille-lion",
    link: "L'ours et la famille lion",
  },
  {
    slug: "la-famille-lion",
    link: "La famille lion",
  },
  {
    slug: "le-tigre-et-le-lapin",
    link: "Le tigre et le lapin",
  },
  {
    slug: "le-petit-rigolo",
    link: "L'histoire du petit rigolo",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Box className="home">
        <UnorderedList>
          {stories.map((story) => {
            return (
              <ListItem key={story.slug}>
                <NextLink href={"histoires/" + story.slug} passHref>
                  <Link>{story.link}</Link>
                </NextLink>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
    </>
  );
};

export default Home;
