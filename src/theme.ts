import { unstable_createMuiStrictModeTheme as createTheme } from "@mui/material"

/* CSS HEX */
// --persian-red: #BD402Eff;
// --international-klein-blue: #2828A3ff;
// --china-rose: #96586Bff;
// --ultra-violet: #6561A1ff;
// --finn: #5E2A64ff;


const theme = createTheme({
  palette: {
    primary: {
      main: '#BD402E'
    }
  },
  typography: {
    fontFamily: 'IBM Plex Sans'
  }
})
  
export default theme