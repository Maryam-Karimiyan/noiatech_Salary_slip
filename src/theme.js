import { createTheme } from "@mui/material";

const getTheme = () =>
  createTheme({
    palette: {
      background: {
        default: "#F5FAFF", // رنگ پس‌زمینه کل صفحات
      },
      primary: {
        main: "#007BFF",
        light: "#A8D2FF",
        dark: "#040C7E",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#A0A3E6",
        light: "#D8EBFF",
        contrastText: "#9A9BAD",
      },
    },
    typography: {
      fontFamily: "IRANSansXFaNum,IRANSansX, Arial, sans-serif", // فونت اصلی برای متن‌ها
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "IRANSansXFaNum,IRANSansX, Arial, sans-serif", // اعمال فونت روی کل body
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: "IRANSansXFaNum,IRANSansX, Arial, sans-serif",
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            fontFamily: "IRANSansXFaNum,IRANSansX, Arial, sans-serif",
            color: "#1D1E24",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontFamily: "IRANSansXFaNum,IRANSansX, Arial, sans-serif",
            color: "#1D1E24",
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            fontFamily: "IRANSansXFaNum,IRANSansX, Arial, sans-serif",
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
            fontFamily: "IRANSansXFaNum,IRANSansX, Arial, sans-serif",
          },
        },
      },
    },
  });
export default getTheme;
