import { createTheme } from "@mui/material";

const getTheme = (mde) =>
  createTheme({
    palette: {
      background: {
        default: "#45474b", // رنگ پس‌زمینه کل صفحات
        paper: "#ffffff", // رنگ پس‌زمینه‌ی کامپوننت‌های سطحی مثل Card, Paper
      },
      primary: {
        main: "#FFA800",
        light: "#45474b",
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
