import { createTheme } from "@mui/material";

const getTheme = (mde) =>
  createTheme({
    palette: {
      primary: {
        main: "#007BFF",
        light: "#A8D2FF",
        dark: "#040C7E",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#D9D9D9",
        contrastText: "#FFF9EF",
      },
    },
    typography: {
      fontFamily: "IRANSansXFaNum, Arial, sans-serif", // فونت اصلی برای متن‌ها
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "IRANSansXFaNum, Arial, sans-serif", // اعمال فونت روی کل body
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: "IRANSansXFaNum, Arial, sans-serif",
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            fontFamily: "IRANSansXFaNum, Arial, sans-serif",
          },
        },
      },
    },
  });
export default getTheme;
