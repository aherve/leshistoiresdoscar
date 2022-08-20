import { Box, Heading } from "@chakra-ui/react";
import { HomeLink } from "../../components/home-link";

export default function ChatChienGrenouille() {
  return (
    <>
      <Box className="story">
        <Heading as="h3"> Le chien, le chat, et la grenouille</Heading>
        <p>Il était une fois un chien, un chat et une grenouille.</p>
        <p>
          Ils se promenaient dans la campagne quand soudain ils ont tout de
          suite trouvé une maison. Une grande maison en briques avec une
          cheminée et une porte rouge et un toit en tuiles.
        </p>
        <p>
          Ils rentrent tous dans la maison et ils y font des activités. Le chien
          dessine. Le chat peint. Et la grenouille fait des puzzles.
        </p>
        <p>Quand soudain ils entendent TOC TOC TOC. Et c'était un jaguar !</p>
        <p>
          Le chat vient ouvrir. Le jaguar était venu demander à boire pour sa
          maman. Ils n'avaient plus rien à boire depuis le petit-déjeuner. Le
          chat lui donne son verre d'eau de quand il était petit. Le jaguar dit
          merci et s'en va avec le verre.
        </p>
        <p>Et le chat, le chien et la grenouille continuent leurs activités.</p>
        <HomeLink></HomeLink>
      </Box>
    </>
  );
}
