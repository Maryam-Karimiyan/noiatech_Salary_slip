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
      icon: UserIcon,
      label: "پروفایل",
      path: `/${user}/profile`,
    },
    {
      icon: SalarySlipIcon,
      label: "فیش حقوقی",
      path: `/${user}/salary`,
    },
    {
      icon: HomeIcon,
      label: "خانه",
      path: `/${user}`,
    },
  ];

  // const menuItems =
  //   user === "admin" ? [...baseMenuItems, ...adminExtraItems] : baseMenuItems;
  const menuItems = [...baseMenuItems];

  if (user === "admin") {
    const adminExtraItem = {
      icon: Users2Icon,

      label: "پرسنل",
      path: `/${user}/personels`,
    };
    menuItems.splice(1, 0, adminExtraItem);
    menuItems[2].label = "فیش های حقوقی";
  }

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
          navigate(menuItems[newValue].path);
        }}
      >
        {menuItems.map((item, index) => {
          return (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={
                <item.icon
                  fill={value === index ? "primary.main" : "secondary.main"}
                />
              }
              sx={{
                p: 0,
                "& .MuiBottomNavigationAction-label": {
                  fontSize: { xs: 11, sm: 12 },
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
