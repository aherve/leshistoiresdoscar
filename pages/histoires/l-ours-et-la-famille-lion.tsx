import { Box, Heading } from "@chakra-ui/react";
import { HomeLink } from "../../components/home-link";

export default function OursEtFamilleLion() {
  return (
    <>
      <Box className="story">
        <Heading as="h3"> L'Ours et la famille Lion</Heading>
        <p>
          Il était une fois une famille lion qui vivait dans la savane. Ils
          dormaient dans leur voiture parce qu'ils n'avaient pas de maison.
        </p>
        <p>
          En roulant ils ont trouvé une maison vide. C'était leur maison de
          quand ils étaient petits. Ils rentrent dedans et ferment la porte.
        </p>
        <p>
          Quand soudain, HOP ! Un ours ouvre la porte. Il était déguisé en
          tigre. Le papa lion voit les griffes et reconnaît l'ours.
        </p>
        <p>
          L'ours prend un jouet qui fait de la musique et il appuie sur les
          boutons. Puis il le rend. Il s'en va.
        </p>
        <HomeLink></HomeLink>
      </Box>
    </>
  );
}
