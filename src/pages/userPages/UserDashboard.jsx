import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
export default function UserDashboard() {
  const navigate = useNavigate();
  return (
    <Box>
      <Outlet />
    </Box>
  );
}
