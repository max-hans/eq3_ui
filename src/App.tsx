import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { ChakraProvider, Grid, Link } from "@chakra-ui/react";
import Heaters from "./Routes/Heaters";
import Settings from "./Routes/Settings";
import theme from "./theme";

import Nav from "./Components/Nav";

const templateAreas = `
"header"
"content"
"footer"
`;

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Grid
          templateRows="auto 1fr auto"
          templateAreas={templateAreas}
          h="100vh"
          w="100vw"
          m={0}
        >
          <Nav>
            <Link fontWeight="bold" as={RouterLink} to="/">
              Räume
            </Link>
            <Link as={RouterLink} to="/settings">
              Einstellungen
            </Link>
          </Nav>
          <Switch>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Heaters />
            </Route>
          </Switch>
        </Grid>
      </Router>
    </ChakraProvider>
  );
};

export default App;
