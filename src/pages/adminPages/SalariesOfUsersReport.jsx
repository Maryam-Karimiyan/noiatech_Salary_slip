import { Box, Stack, Typography } from "@mui/material";
import { ChooseDateMonth, ChooseDateYear } from "../../components/ChooseDate";
import SalaryBenefitDebtTable from "../../components/userComponents/SalaryBenefitDebtTable";
import SummaryTable from "../../components/userComponents/SummaryTable";

export default function SalariesOfUsersReport() {
  return (
    <Stack
      sx={{
        p: 3,
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* choose date */}
      <Box>
        <ChooseDateYear />
        <ChooseDateMonth />
      </Box>
      {/* names */}
      <Typography
        sx={{
          bgcolor: "primary.light",
          borderRadius: 2,
          fontWeight: 800,
          color: "primary.dark",
          textAlign: "center",
          fontSize: 14,
          py: 1.5,
          pb: 3,
          mb: -4,
        }}
      >
        فاطمه عزیزی
      </Typography>
      {/* tables */}
      <Stack gap={1}>
        <SalaryBenefitDebtTable type="benefit" />
        <SalaryBenefitDebtTable type="debt" />
        <SummaryTable />
      </Stack>
    </Stack>
  );
}
