import { Box, Heading, Image } from "@chakra-ui/react";
import { HomeLink } from "../../components/home-link";
export default function FamilleLion() {
  return (
    <>
      <Box className="story">
        <Heading as="h3"> La famille Lion</Heading>
        <Image src="/famille-lion.jpg" alt="la famille lion"></Image>
        <p>
          Il était une fois une famille lion, qui vivait dans une maison dans la
          savane. le papa aimait dessiner, surtout des courgettes. La maman
          faisait des puzzles avec des étoiles. La grande soeur aimait lire des
          livres et la petite soeur faisait la course avec les gazelles.
        </p>
        <p>
          Une fois, la petite soeur est allé tellement loin qu'elle s'est
          perdue. Elle était dans un autre vilalge en Afrique. C'était le
          village des zèbres.
        </p>
        <p>
          Elle a prévenu les zèbres qu'elle avait vu des crocodiles qui
          arrivaient. Maintenant elle fait la course avec les zèbres et les
          gazelles.
        </p>
        <p>
          Heureusement elle rencontre une lionne qui lui montre le chemin pour
          rentrer à sa maison. En rentrant toute la famille se fait un gros
          câlin.
        </p>
        <HomeLink></HomeLink>
      </Box>
    </>
  );
}
