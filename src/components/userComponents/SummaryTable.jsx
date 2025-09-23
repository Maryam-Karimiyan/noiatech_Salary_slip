import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function SummaryTable() {
  const Items = ["جمع پرداخت ها", "جمع کسورات", "جمع اقساط"];
  const values = [0, 0, 0];
  return (
    <Box>
      {/* جمع ها */}
      <TableContainer
        component={Paper}
        sx={{
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: 2,
          boxShadow: "none",
          overflow: "hidden",
        }}
      >
        <Table sx={{ minWidth: 350 }} aria-label="summary table">
          <TableHead>
            <TableRow>
              {Items.map((item, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    width: "33%",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "primary.dark",
                    borderRight: index < Items.length - 1 ? "2px solid" : "none",
                    borderBottom: "2px solid",
                    borderColor: "primary.main",
                    p: 1,
                  }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {values.map((item, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    fontWeight: 700,
                    fontSize: 14,
                    color: "primary.dark",
                    borderRight: index < values.length - 1 ? "2px solid" : "none",
                    borderBottom: "none",
                    borderColor: "primary.main",
                    p: 1,
                  }}
                >
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* خالص پرداختی */}
      <TableContainer
        component={Paper}
        sx={{
          bgcolor: "secondary.light",
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: 2,
          boxShadow: "none",
          overflow: "hidden",
          mt: 1,
        }}
      >
        <Table sx={{ minWidth: 350 }} aria-label="summary table">
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  width: "50%",
                  color: "primary.dark",
                  fontWeight: 700,
                  fontSize: 14,
                  borderRight: "2px solid",
                  borderBottom: 0,
                  borderColor: "primary.main",
                  p: 1,
                }}
              >
                0
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "primary.dark",
                  fontWeight: 700,
                  fontSize: 14,
                  p: 1,
                }}
              >
                خالص پرداختی
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
