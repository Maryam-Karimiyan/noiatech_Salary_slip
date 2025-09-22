import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <Box
      width={325}
      sx={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "70px auto",
        gap: 2,
      }}
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        variant="h6"
        color="primary.contrastText"
      >
        ورود
      </Typography>
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
      <ButtonComponent
        sx={{
          cursor: "pointer",
          color: "primary.light",
          width: "100%",
          fontWeight: 700,
          marginTop: "10px",
          borderRadius: "10px",
        }}
      >
        دریافت کد تایید
      </ButtonComponent>
      <Typography
        sx={{ alignSelf: "flex-end", cursor: "pointer" }}
        color="primary.contrastText"
        fontSize={10}
        fontWeight={300}
        onClick={() => navigate("/register")}
      >
        حساب کاربری ندارید ؟{" "}
        <Stack component="span" color="primary.main" display="inline">
          ثبت نام
        </Stack>{" "}
      </Typography>
    </Box>
  );
}
