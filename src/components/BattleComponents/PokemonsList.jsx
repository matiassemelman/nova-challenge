import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import data from "../../../pokemon.json";
import MobileContext from "../../utils/MobileContext";

const pokemons = data.pokemon;

export const PokemonsList = () => {
  const isMobile = useContext(MobileContext);

  return (
    <Box display="flex">
      {isMobile ? "Mobile View" : "Desktop View"}
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id}>
          <CardContent>
            <img src={pokemon.imageUrl} alt={pokemon.name} width="150" />
            <Typography variant="h5">{pokemon.name}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
