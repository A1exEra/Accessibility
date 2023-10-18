// globalStyles.ts
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
:root {
  background-color: #fff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Ubuntu', sans-serif;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  cursor: pointer;
}
`;

export default GlobalStyle;
