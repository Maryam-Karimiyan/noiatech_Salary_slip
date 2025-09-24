import { Box, Paper, Stack, Typography } from "@mui/material";

export default function PersonelCards() {
  const personels = [
    { name: "علی رحمانیان", role: "پرستار" },
    { name: "علی رحمانیان", role: "پرستار" },
    { name: "علی رحمانیان", role: "پرستار" },
    { name: "علی رحمانیان", role: "پرستار" },
  ];
  return (
    <Stack sx={{gap:1}}>
      {personels.map((item, index) => (
        <Stack
          key={index}
          component={Paper}
          sx={{
            direction: "rtl",
            boxShadow: "none",
            border: "1px solid",
            borderColor: "primary.light",
            borderRadius: 2,
            p:1
          }}
        >
          <Typography sx={{ color: "primary.dark", fontSize: 15 }}>
            {item.name}
          </Typography>
          <Typography sx={{ color: "secondary.contrastText", fontSize: 13 }}>
            {item.role}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
