import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ButtonComponent from "../../components/ButtonComponent";
import { useRef, useState } from "react";
import SalaryItems from "../../components/adminComponents/SalaryItems";
import { useNavigate } from "react-router-dom";

export default function SalariesOfUsers() {
  const navigate = useNavigate();
  const selectRef = useRef(null);
  const menuItems = ["1404", "1403", "1402", "1401", "1400"];
  const [year, setYear] = useState("1404");
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      {/* filter year */}
      <Stack
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <FormControl variant="standard">
            <Select
              value={year}
              onChange={handleChange}
              disableUnderline
              IconComponent={() => null}
              sx={{
                color: "primary.dark",
                direction: "rtl",
                fontSize: 13,
                "& .MuiSelect-select": {
                  pr: "5px !important",
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                  sx={{ color: "primary.dark", fontSize: 13 }}
                >
                  {`سال ${item}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            component="img"
            src="/assets/filterBtn.png"
            width={24}
            height={24}
            onClick={() => selectRef.current?.click()}
            sx={{ cursor: "pointer" }}
          />
        </Stack>
        <Typography
          sx={{
            direction: "rtl",
            color: "primary.dark",
            fontWeight: 450,
            fontSize: 16,
          }}
        >
          فیش های حقوقی
        </Typography>
      </Stack>
      {/* Accordion list */}
      <Box sx={{ overflowY: "scroll", height: "67vh" }}>
        <SalaryItems />
      </Box>
      {/* Button for create Fish */}
      {/* <Box sx={{ mb: 0, display: "flex", justifyContent: "flex-end" }}>
        <ButtonComponent onClick={()=>{navigate('/admin/createsalaryslip')}} sx={{ borderRadius: 2 }}>
          <Typography fontSize={18}>فیش جدید</Typography>
        </ButtonComponent>
      </Box> */}
      <ButtonComponent
        onClick={() => {
          navigate("/admin/createsalaryslip");
        }}
        sx={{
          px: "30px",
          py: "15px",
          borderRadius: 2,
          position: "fixed",
          bottom: 100,
          right: 30,
        }}
      >
        <Typography fontSize={18}>فیش جدید</Typography>
      </ButtonComponent>
    </Box>
  );
}
