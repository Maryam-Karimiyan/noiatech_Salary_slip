import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UserDashboard() {
  const navigate = useNavigate();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  return (
   <Box></Box>
  );
}
