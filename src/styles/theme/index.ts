import { createMuiTheme, Theme } from "@material-ui/core";
import customPalatte from "./palette.override";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const defaultTheme = createMuiTheme({
  // OVERRIDE WHAT YOU WANT HERE
  palette: customPalatte,
/*   typography: {
    button: { fontFamily: "'GmarketSansMedium', 'Roboto'" },
  }, */
});

export default defaultTheme;
