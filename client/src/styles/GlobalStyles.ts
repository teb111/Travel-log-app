import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
const { fonts, fontSizes, colors } = theme;

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "calibre";
  src: url("../fonts/Calibre-Regular/Calibre-Regular.woff");
}



  *::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Calibre", "San Francisco", "SF Pro Text", -apple-system;
  font-size: ${fontSizes.base};
  text-rendering: optimizeLegibility;
   color: ${colors.black};
   scroll-behavior: smooth;
}

body::-webkit-scrollbar {
  width: 5px;
  border-radius: 100px;
}

body::-webkit-scrollbar-track {
  border-radius: 100px;
}

body::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 250px;
}

.arrowStyling {
  margin-bottom: 35px;
}

.arrowStyling div:nth-child(1), .arrowStyling div:last-child{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 41px;
}

.arrowStyling .styles-module_item-tracker__3bypy {
  flex-direction: row !important;
 
}






`;
