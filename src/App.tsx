/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Home} from './Pages';
import {ChakraProvider} from '@chakra-ui/react';
import {DndProvider} from 'react-dnd';

import {HTML5Backend} from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    </DndProvider>
  );
}

export default App;
