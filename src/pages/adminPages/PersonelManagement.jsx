import { Box, Stack, Typography } from "@mui/material";
import PersonelCards from "../../components/adminComponents/PersonelCards";
import ButtonComponent from "../../components/ButtonComponent";
import { useState } from "react";
import CreatePersonelDialog from "../../components/adminComponents/CreatePersonelDialog";

export default function PersonelManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/assets/filterBtn.png"
          width={24}
          height={24}
        />
        <Typography
          sx={{
            direction: "rtl",
            color: "primary.dark",
            fontWeight: 450,
            fontSize: 16,
          }}
        >
          پرسنل
        </Typography>
      </Stack>

      {/* personel cards */}
      <Box sx={{ overflowY: "scroll", height: "67vh" }}>
        <PersonelCards />
      </Box>
      <ButtonComponent
        onClick={handleOpenDialog}
        sx={{
          borderRadius: 2,
          position: "fixed",
          bottom: 100,
          right: 30,
          px: "30px",
          py: "15px",
        }}
      >
        <Typography fontSize={18}>پرسنل جدید</Typography>
      </ButtonComponent>
      <CreatePersonelDialog open={openDialog} onClose={handleCloseDialog} />
    </Box>
  );
}
