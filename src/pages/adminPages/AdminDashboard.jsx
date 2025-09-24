import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function AdminDashboard() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
