import {Home, Report} from './Pages';
import {ChakraProvider} from '@chakra-ui/react';

import {DndProvider} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(): JSX.Element {
  return (
    <DndProvider options={HTML5toTouch}>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/report/:reportID">
              <Report />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </DndProvider>
  );
}

export default App;
