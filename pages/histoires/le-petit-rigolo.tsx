import { Box, Heading } from "@chakra-ui/react";
import { HomeLink } from "../../components/home-link";
export default function PetitRigolo() {
  return (
    <>
      <Box className="story">
        <Heading as="h3">L'hitoire du petit rigolo </Heading>
        <p>
          Il était une fois, un très grand personage qui était rigolo. Il était
          humain mais ses pieds étaient des sabots de cheval.
        </p>
        <p>
          Un jour il rencontre des gens, mais ils se moquent de lui. Donc il a
          décidé de se déguiser en tigre pour leur faire peur, pour qu'ils
          s'enfuient et ne se moquent plus de lui.
        </p>
        <p>
          Les autres ont eu très peur, et se sont enfuis loin. Et du coup
          maintenant les deux rigolos ils sont tranquilles.
        </p>
        <HomeLink></HomeLink>
      </Box>
    </>
  );
}
