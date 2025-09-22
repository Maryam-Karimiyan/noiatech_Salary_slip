import { Box, InputAdornment, Typography } from "@mui/material";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import InputOTP from "../../components/InputOTP";
import { useState } from "react";

export default function UserVerification() {
  const [otp, setOtp] = useState("");
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
        کد تایید
      </Typography>
      <InputComponent
        readOnly={true}
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
      {/* verification code */}
      <InputOTP length={5} onChange={setOtp} />
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
        ورود
      </ButtonComponent>
    </Box>
  );
}
