import { Box, InputLabel, Typography } from "@mui/material";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import CaptchaComponent from "../../components/CaptchaComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
export default function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    if (isAdmin) {
      dispatch(login({ role: "admin" }));
      navigate("/admin");
    } else {
      dispatch(login({ role: "user" }));
      navigate("/user");
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 4,
        background:
          "radial-gradient(circle, hsla(211, 100%, 50%, 1) 0%, hsla(177, 100%, 66%, 1) 100%);",
      }}
    >
      <Typography
        fontSize={{ xs: 18, md: 24 }}
        color="primary.contrastText"
        fontWeight={700}
      >
        به پنل موسسه پرستاران خوش آمدید
      </Typography>
      <Box
        sx={{
          width: { xs: 350, md: 465 },
          direction: "rtl",
          bgcolor: "primary.contrastText",
          px: 2,
          py: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          color="primary.main"
          fontWeight={600}
          fontSize={{ xs: 18, md: 24 }}
        >
          {isAdmin ? "ورود مدیر" : "ورود پرسنل"}
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <InputLabel htmlFor="code">
            <Typography
              fontWeight={450}
              fontSize={{ xs: 14, md: 18 }}
              color="primary.dark"
            >
              کد ملی{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                |
              </Box>{" "}
              کد پرسنلی
            </Typography>
          </InputLabel>
          <InputComponent
            id="code"
            sx={{
              width: "100%",
            }}
          />
          <InputLabel color="primary.dark" htmlFor="password">
            <Typography
              fontSize={{ xs: 14, md: 18 }}
              fontWeight={450}
              color="primary.dark"
            >
              رمز عبور
            </Typography>
          </InputLabel>
          <InputComponent
            id="password"
            sx={{
              width: "100%",
            }}
          />
          {/* <CaptchaComponent /> */}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <ButtonComponent onClick={handleLogin} sx={{ width: "100%" }}>
            <Typography fontWeight={600} fontSize={{ xs: 16, md: 20 }}>
              ورود
            </Typography>
          </ButtonComponent>
          <ButtonComponent
            onClick={() => setIsAdmin(!isAdmin)}
            sx={{ width: "100%" }}
            variant="outlined"
          >
            <Typography fontWeight={600} fontSize={{ xs: 16, md: 20 }}>
              {isAdmin ? "ورود پرسنل" : "ورود مدیر"}
            </Typography>
          </ButtonComponent>
        </Box>
      </Box>
    </Box>
  );
}
