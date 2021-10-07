import {Home} from './Pages';
import {ChakraProvider} from '@chakra-ui/react';

import {DndProvider} from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

function App(): JSX.Element {
  return (
    <DndProvider options={HTML5toTouch}>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </DndProvider>
  );
}

export default App;
