import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
export default function SalaryBenefitDebtTable({ type }) {
  const salary_benefits_rows = [
    { name: "حقوق", value: 0 },
    { name: "فوق العاده کمک هزینه", value: 0 },
    { name: "اضافه کاری ۵۶ ساعت", value: 0 },
    { name: "سختی کار", value: 0 },
    { name: "هزینه جذب", value: 0 },
    { name: "هزینه عائله مندی", value: 0 },
  ];
  const deductions_debts_rows = [
    { name: "بدهی رفاه", value: 0 },
    { name: "بیمه خدمات درمانی", value: 0 },
    { name: "اضافه کاری ۵۶ ساعت", value: 0 },
    { name: "سختی کار", value: 0 },
    { name: "هزینه جذب", value: 0 },
    { name: "هزینه عائله مندی", value: 0 },
  ];
  const tableItems =
    type === "benefit" ? salary_benefits_rows : deductions_debts_rows;

  return (
    <Box
      component={Paper}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid",
        borderColor: "primary.light",
        borderRadius: 2,
        boxShadow: "none",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="right"
              colSpan={2}
              sx={{
                fontWeight: 700,
                fontSize: 14,
                color: "primary.dark",
                textAlign: "right",
                borderColor: "primary.light",
                p: 1,
              }}
            >
              {type === "benefit" ? "حقوق و مزایا" : "کسورات و بدهی ها"}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableItems.map((item, idx) => (
            <TableRow
              key={idx}
              sx={{
                "&:last-child td, &:last-child th": {
                  borderBottom: 0,
                },
              }}
            >
              <TableCell
                align="center"
                sx={{
                  width: "50%",
                  border: "none",
                  borderRight: "1px solid",
                  borderColor: "primary.light",
                  py: 0.5,
                  pl: 8,
                }}
              >
                {item.value}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  width: "50%",
                  border: "none",
                  fontSize: 12,
                  p: 0.5,
                }}
              >
                {item.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
