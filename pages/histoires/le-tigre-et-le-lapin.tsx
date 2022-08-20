import { Box, Heading, Image } from "@chakra-ui/react";
import { HomeLink } from "../../components/home-link";

export default function TigreEtLapin() {
  return (
    <>
      <Box className="story">
        <Heading as="h3"> Le tigre et le lapin</Heading>
        <Image src="/tigre-et-lapin.jpg" alt="la famille lion"></Image>
        <p> C'est une histoire de tigre.</p>
        <p>
          Ce tigre était si fort qu'il pouvait porter un camion. Il était parti
          se promener et n'avait pas pensé à fermer sa maison.
        </p>
        <p>
          Alors un ours est rentré, il a pris de la viande pour ses petits et a
          laissé le frigo ouvert.
        </p>
        <p>
          En rentrant, le tigre se rend compte qu'il n'a plus de viande. Comme
          il était un peu magicien, il est allé chez ses voisins lapins et a
          transformé une carotte en très gros morceau de viande, presque gros
          comme un camion.
        </p>
        <HomeLink></HomeLink>
      </Box>
    </>
  );
}
