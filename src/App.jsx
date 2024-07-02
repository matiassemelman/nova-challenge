import "./App.css";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Title } from "./components/Title";
import { PokemonBattle } from "./components/BattleComponents";
import MobileContext from "./utils/MobileContext";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MobileContext.Provider value={isMobile}>
      <Box>
        <Title text="Battle of Pokemons" />
        <PokemonBattle />
      </Box>
    </MobileContext.Provider>
  );
}

export default App;
