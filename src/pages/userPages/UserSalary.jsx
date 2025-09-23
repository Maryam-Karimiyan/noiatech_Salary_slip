import { Box, Typography } from "@mui/material";
import SalaryBenefitDebtTable from "../../components/userComponents/SalaryBenefitDebtTable";
import SummaryTable from "../../components/userComponents/SummaryTable";
import ButtonComponent from "../../components/ButtonComponent";
export default function UserSalary() {
  return (
    <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      {/* choose month */}
      <Box width="100%">
        <Typography
          sx={{
            direction: "rtl",
            color: "primary.dark",
            fontWeight: 450,
            fontSize: 14,
          }}
        >
          انتخاب ماه
        </Typography>
      </Box>

      {/* table1 */}
      <SalaryBenefitDebtTable type="benefit" />
      {/* table2 */}
      <SalaryBenefitDebtTable type="debt" />
      {/* table3 */}
      <SummaryTable />

      {/* Button for get Fish */}
      <ButtonComponent sx={{borderRadius:2}}>
        <Typography fontSize={22}>دریافت فیش </Typography>
      </ButtonComponent>
    </Box>
  );
}
