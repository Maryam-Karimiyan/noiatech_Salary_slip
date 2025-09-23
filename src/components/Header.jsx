import { Box, Container, Typography } from "@mui/material";
import ButtonComponent from "./ButtonComponent";
import { UserIcon } from "../assets";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Header() {
  let user = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          bgcolor: "primary.main",
          borderRadius: "0 0 10px 10px",
          width: "100%",
          p: 1,
        }}
      >
        <Box
          component="img"
          src="/assets/logout.png"
          onClick={() => {
            navigate("/");
            user = null;
          }}
        />
        <Typography
          sx={{
            color: "primary.contrastText",
            fontWeight: 700,
            fontSize: 14,
            pl: 3,
          }}
        >
          پنل موسسه پرستاران
        </Typography>
        <ButtonComponent
          color="primary.contrastText"
          variant="text"
          endIcon={<UserIcon fill="primary.contrastText" />}
        >
          <Typography sx={{ color: "primary.contrastText", fontSize: 12 }}>
            {user === "admin" ? "مدیر" : "پرسنل"}
          </Typography>
        </ButtonComponent>
      </Box>
    </Container>
  );
}
