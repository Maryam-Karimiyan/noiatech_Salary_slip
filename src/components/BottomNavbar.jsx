import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import { HomeIcon, CartIcon, UserIcon, MoreIcon } from "../assets";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function BottomNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const menueItems = [
    {
      icon: (isActive) => (
        <MoreIcon fill={isActive ? "primary.main" : "primary.light"} />
      ),
      label: "بیشتر",
      path: "/more",
    },
    {
      icon: (isActive) => (
        <UserIcon fill={isActive ? "primary.main" : "primary.light"} />
      ),
      label: "ورود",
      path: "/login" || "/register",
    },

    {
      icon: (isActive) => (
        <CartIcon fill={isActive ? "primary.main" : "primary.light"} />
      ),
      label: "سبد خرید",
      path: "/cart/cart",
    },
    {
      icon: (isActive) => (
        <HomeIcon fill={isActive ? "primary.main" : "primary.light"} />
      ),
      label: "خانه",
      path: "/",
    },
  ];
  useEffect(() => {
    const currentIndex = menueItems.findIndex((item) => {
      if (item.label === "ورود") {
        return (
          location.pathname.startsWith("/login") ||
          location.pathname.startsWith("/register")
        );
      }
      return item.path === location.pathname;
    });

    setValue(currentIndex);
  }, [location.pathname]);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 20,
        left: 10,
        right: 10,
        borderRadius: "10px",
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ bgcolor: "secondary.contrastText", borderRadius: "inherit" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(menueItems[newValue].path);
        }}
      >
        {menueItems.map((item, index) => {
          return (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon(value === index)}
              sx={{
                color: "primary.light",
                "&.Mui-selected": {
                  color: value === index ? "primary.main" : "",
                },
                "& .MuiBottomNavigationAction-label": {
                  fontSize: 10,
                  fontWeight: 700,
                  marginTop: 0.5,
                },
              }}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}
