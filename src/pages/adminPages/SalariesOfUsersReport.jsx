import { Box, Typography } from "@mui/material";
import { ChooseDateMonth, ChooseDateYear } from "../../components/ChooseDate";
import SalaryBenefitDebtTable from "../../components/userComponents/SalaryBenefitDebtTable";
import SummaryTable from "../../components/userComponents/SummaryTable";

export default function SalariesOfUsersReport() {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
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
          py: 1,
          pb: 3,
          mb: -4,
        }}
      >
        فاطمه عزیزی
      </Typography>
      {/* tables */}
      <SalaryBenefitDebtTable type="benefit" />
      <SalaryBenefitDebtTable type="debt" />
      <SummaryTable />
    </Box>
  );
}
