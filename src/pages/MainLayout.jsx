import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import { Box } from "@mui/material";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Box component="main" sx={{paddingBottom:8}}>
        <Outlet /> {/* اینجا محتوای صفحات لود میشه */}
      </Box>
      <BottomNavbar />
    </>
  );
}
