import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Normalize} from 'styled-normalize';

ReactDOM.render(
  <StrictMode>
    <Normalize />
    <App />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
