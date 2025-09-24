import { Box, InputAdornment, Typography } from "@mui/material";
import InputComponent from "./InputComponent";

export default function ProfileFields() {
  return (
    <Box
      sx={{
        py: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        borderBottom: "2px solid",
        borderColor: "primary.light",
      }}
    >
      <InputComponent
        helperText="نام و نام خانوادگی"
        sx={{
          width: "95%",
        }}
      />
      <InputComponent
        helperText="کد ملی"
        sx={{
          width: "95%",
        }}
      />
      <InputComponent
        helperText="کد پرسنلی"
        sx={{
          width: "95%",
        }}
      />
      <Box
        sx={{ display: "flex", gap: 1, width: "95%", justifyContent: "center" }}
      >
        <InputComponent helperText="وضعیت" />
        <InputComponent helperText="سمت" />
      </Box>
      <InputComponent
        helperText="شماره موبایل"
        sx={{
          width: "95%",
          "& .MuiInputBase-input": {
            textAlign: "left",
            direction: "ltr",
            pl: 5,
          },
          "& .MuiInputAdornment-root": {
            borderRight: "1px solid",
            borderColor: "primary.main",
            pr: 2,
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography sx={{ color: "primary.dark", fontSize: 12 }}>
                +98
              </Typography>
            </InputAdornment>
          ),
        }}
      />
      <InputComponent
        helperText="آدرس"
        sx={{
          width: "95%",
        }}
      />
    </Box>
  );
}
