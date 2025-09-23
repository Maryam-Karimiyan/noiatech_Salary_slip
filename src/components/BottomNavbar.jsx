import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box } from "@mui/material";
import { HomeIcon, Users2Icon, UserIcon, SalarySlipIcon } from "../assets";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function BottomNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [value, setValue] = useState(0);

  const baseMenuItems = [
    {
      icon: (isActive) => (
        <UserIcon fill={isActive ? "primary.main" : "secondary.main"} />
      ),
      label: "پروفایل",
      path: "/profile",
    },
    {
      icon: (isActive) => (
        <SalarySlipIcon fill={isActive ? "primary.main" : "secondary.main"} />
      ),
      label: user === "admin" ? "فیش های حقوقی" : "فیش حقوقی",
      path: "/salary",
    },
    {
      icon: (isActive) => (
        <HomeIcon fill={isActive ? "primary.main" : "secondary.main"} />
      ),
      label: "خانه",
      path: "/",
    },
  ];

  const adminExtraItems = [
    {
      icon: (isActive) => (
        <Users2Icon fill={isActive ? "primary.main" : "secondary.main"} />
      ),
      label: "پرسنل",
      path: "/staff",
    },
  ];

  const menuItems =
    user === "admin" ? [...baseMenuItems, ...adminExtraItems] : baseMenuItems;

  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => {
      return item.path === location.pathname;
    });

    setValue(currentIndex);
  }, [location.pathname]);

  return (
    <Box
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
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: "inherit",
          py: 4,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // navigate(menuItems[newValue].path);
        }}
      >
        {menuItems.map((item, index) => {
          return (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon(value === index)}
              sx={{
                "& .MuiBottomNavigationAction-label": {
                  fontSize: 14,
                  fontWeight: 700,
                  marginTop: 0.5,
                },
              }}
            />
          );
        })}
      </BottomNavigation>
    </Box>
  );
}
