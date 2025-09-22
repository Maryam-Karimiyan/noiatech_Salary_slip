import {
  Drawer,
  Box,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import {
  Close,
  ShoppingCart,
  MenuBook,
  HelpOutline,
  Info,
  Phone,
  Rule,
  PrivacyTip,
} from "@mui/icons-material";
import ButtonComponent from "./ButtonComponent";

export default function Menu({ openMenu, onClose }) {
  const mainMenuItems = [
    {
      label: "سبد خرید",
      icon: <ShoppingCart />,
      route: "/cart",
    },
    {
      label: "منو",
      icon: <MenuBook />,
      route: "/menu",
    },
    {
      label: "سوالات متداول",
      icon: <HelpOutline />,
      route: "/faq",
    },
    {
      label: "درباره ما",
      icon: <Info />,
      route: "/about",
    },
    {
      label: "تماس با ما",
      icon: <Phone />,
      route: "/contact",
    },
  ];

  const bottomMenuItems = [
    {
      label: "قوانین و مقررات",
      icon: <Rule />,
      route: "/rules",
    },
    {
      label: "حریم خصوصی",
      icon: <PrivacyTip />,
      route: "/privacy",
    },
  ];
  return (
    <Drawer
      anchor="right"
      open={openMenu}
      onClose={onClose}
      variant="temporary" // این باعث میشه روی صفحه باز بشه
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "20px 1px",
          bgcolor: "primary.light",
        },
      }}
    >
      <Box sx={{ width: 280 }}>
        {/* بخش بالایی */}
        <Box
          sx={{
            bgcolor: "grey.200",
            textAlign: "center",
            p: 2,
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "primary.light",
            }}
          >
            <Close />
          </IconButton>

          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              bgcolor: "grey.400",
              mx: "auto",
              mb: 1,
            }}
          />
          <Typography color="primary.light" fontWeight="bold">
            ! همین الان وارد شو
          </Typography>
          <ButtonComponent
            sx={{ borderRadius: 5, mt: 1, color: "primary.light" }}
          >
            ورود
          </ButtonComponent>
        </Box>

        {/* لیست آیتم‌ها */}
        <List sx={{ direction: "rtl" }}>
          {mainMenuItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton sx={{ color: "primary.contrastText" }}>
                <ListItemIcon sx={{ color: "primary.contrastText" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  fontWeight={600}
                  sx={{ textAlign: "right", fontWeight: 600 }}
                  primary={item.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  );
}
