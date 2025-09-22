import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useState } from "react";
// import CaptchaComponent from "../../components/CaptchaComponent";
import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const navigate = useNavigate();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  return (
    <Box
      width={325}
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "70px auto",
        gap: 1,
      }}
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        variant="h6"
        color="primary.contrastText"
      >
        ثبت نام
      </Typography>
      <InputComponent
        labelTextColor="primary.contrastText"
        helperText="نام و نام خانوادگی"
        sx={{
          width: "100%",
          fontWeight: 700,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
              borderRadius: "10px",
            },
          },
        }}
      />
      <InputComponent
        labelTextColor="primary.contrastText"
        helperText="رمز عبور"
        sx={{
          width: "100%",
          fontWeight: 700,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
              borderRadius: "10px",
            },
          },
        }}
      />
      <InputComponent
        placeholder="9928559292"
        typeNumber={true}
        labelTextColor="primary.contrastText"
        helperText="شماره همراه"
        sx={{
          width: "100%",
          fontWeight: 700,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
              borderRadius: "10px",
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography color="primary.contrastText">+98</Typography>
            </InputAdornment>
          ),
        }}
      />
      {/* Captcha verification */}
      {/* <CaptchaComponent onVerify={(token) => setCaptchaVerified(!!token)} /> */}
      <ButtonComponent
        sx={{
          cursor: "pointer",
          color: "primary.light",
          width: "100%",
          fontWeight: 700,
          marginTop: "10px",
          borderRadius: "10px",
        }}
        disabled={!captchaVerified}
        onClick={()=>{navigate('/userVerification')}}
      >
        دریافت کد تایید
      </ButtonComponent>
      <Typography
        sx={{ alignSelf: "flex-end", cursor: "pointer" }}
        color="primary.contrastText"
        fontSize={10}
        fontWeight={300}
        onClick={() => navigate("/login")}
      >
        حساب کاربری دارید ؟{" "}
        <Stack component="span" color="primary.main" display="inline">
          ورود
        </Stack>{" "}
      </Typography>
    </Box>
  );
}
