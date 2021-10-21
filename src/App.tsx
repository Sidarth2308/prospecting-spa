import {Home, Report} from './Pages';
import {ChakraProvider} from '@chakra-ui/react';

import {DndProvider} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {extendTheme, ThemeConfig} from '@chakra-ui/react';
import NotFound from './Pages/not-found';
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({config});

function App(): JSX.Element {
  return (
    <DndProvider options={HTML5toTouch}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/report/:reportID">
              <Report />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </DndProvider>
  );
}

export default App;
