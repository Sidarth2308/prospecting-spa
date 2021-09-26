import {createGlobalStyle} from 'styled-components';
import backgroundImage from './assets/background.svg';
export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body{
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size:cover;

    background-position: center center;
    background-attachment: fixed;
}`;
