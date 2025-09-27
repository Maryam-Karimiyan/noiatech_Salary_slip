import {
  Box,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { useState } from "react";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
dayjs.extend(jalaliday);
export function ChooseDateMonth() {
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const currentMonthIndex = dayjs().calendar("jalali").month(); // این عدد 0 تا 11
  const currentMonth = months[currentMonthIndex];
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "right",
          color: "primary.dark",
          fontWeight: 450,
          fontSize: 16,
          py: 1,
        }}
      >
        انتخاب ماه
      </Typography>
      <Stack
        sx={{
          textAlign: "right",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          boxShadow: "none",
          border: "1px solid",
          borderColor: "primary.light",
          borderRadius: 2,
        }}
      >
        <FormControl fullWidth variant="standard">
          <Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            disableUnderline
            IconComponent={() => null}
            fullWidth
            sx={{
              direction: "rtl",
              color: "primary.dark",
              fontSize: 16,
              "& .MuiSelect-select": {
                pr: "5px !important",
              },
            }}
          >
            {months.map((item, index) => (
              <MenuItem
                key={index}
                value={item}
                sx={{
                  color: "primary.dark",
                  fontSize: 16,
                  direction: "rtl",
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  },
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedMonth && (
          <Checkbox
            disabled
            sx={{
              color: "primary.main",
              "&.Mui-disabled": {
                color: "primary.main",
              },
            }}
            icon={<CheckBoxOutlinedIcon />}
          />
        )}
      </Stack>
    </Box>
  );
}
export function ChooseDateYear() {
  const currentYear = dayjs().calendar("jalali").year();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const startYear = 1390;
  const futureYears = 5;
  // آرایه سال‌ها از startYear تا سال جاری
  const years = Array.from(
    { length: currentYear - startYear + 1 + futureYears },
    (_, i) => startYear + i
  );

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "right",
          color: "primary.dark",
          fontWeight: 450,
          fontSize: 16,
          py: 1,
        }}
      >
        انتخاب سال
      </Typography>
      <Stack
        sx={{
          textAlign: "right",
          flexDirection: "row",
          justifyContent: "end",
          alignItems: "center",
          boxShadow: "none",
          border: "1px solid",
          borderColor: "primary.light",
          borderRadius: 2,
        }}
      >
        <FormControl fullWidth variant="standard">
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            disableUnderline
            IconComponent={() => null}
            fullWidth
            sx={{
              direction: "rtl",
              color: "primary.dark",
              fontSize: 16,
              "& .MuiSelect-select": {
                pr: "5px !important",
              },
            }}
          >
            {years.map((item, index) => (
              <MenuItem
                key={index}
                value={item}
                sx={{
                  color: "primary.dark",
                  fontSize: 16,
                  direction: "rtl",
                  "& .MuiList-root": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  },
                }}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedYear && (
          <Checkbox
            disabled
            sx={{
              color: "primary.main",
              "&.Mui-disabled": {
                color: "primary.main",
              },
            }}
            icon={<CheckBoxOutlinedIcon />}
          />
        )}
      </Stack>
    </Box>
  );
}
