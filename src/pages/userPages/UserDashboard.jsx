import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function UserDashboard() {
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
