import { createTheme } from "@mui/material";

const getTheme = () =>
  createTheme({
    background: {
      default: "#F5FAFF", // رنگ پس‌زمینه کل صفحات
    },
    palette: {
      primary: {
        main: "#007BFF",
        light: "#A8D2FF",
        dark: "#040C7E",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#A0A3E6",
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

      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            fontFamily: "IRANSansXFaNum, Arial, sans-serif",
          },
          label: {
            // رنگ متن در حالت پیش‌فرض (غیرفعال)
            color: "#A0A3E6",
            "&.Mui-selected": {
              color: "#007BFF",
            },
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
