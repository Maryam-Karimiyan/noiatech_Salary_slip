import {
  Box,
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

import { useState } from "react";

export default function ChoosePersonel() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const ITEM_HEIGHT = 100;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5,
        width: 250,
      },
    },
  };
  const names = [
    "فاطمه عزیزی1",
    "علی ابراهیمی1",
    "علی رحمانی1",
    "فاطمه عزیزی2",
    "فاطمه عزیزی3",
    "فاطمه عزیزی4",
    "علی رحمانی2",
    "علی رحمانی",
    "علی ابراهیمی3",
    "2علی ابراهیمی",
  ];
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
        انتخاب پرسنل
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
            multiple
            value={personName}
            MenuProps={MenuProps}
            disableUnderline
            IconComponent={() => null}
            fullWidth
            onChange={handleChange}
            renderValue={(selected) => (
              <Stack sx={{ flexDirection: "row", gap: 0.5, overflowX: "auto" }}>
                {selected.map((value) => (
                  <Stack key={value} direction="row" alignItems="center">
                    <Checkbox
                      disabled
                      sx={{
                        py: 0.5,
                        px: 0.5,
                        color: "primary.main",
                        "&.Mui-disabled": {
                          color: "primary.main",
                        },
                      }}
                      icon={<CheckBoxOutlinedIcon />}
                    />
                    <Typography fontSize={14}>{value}</Typography>
                  </Stack>
                ))}
              </Stack>
            )}
            sx={{
              direction: "rtl",
              color: "primary.dark",
              fontSize: 16,
              "& .MuiSelect-select": {
                pr: "0px !important",
              },
            }}
          >
            {names.map((item, index) => (
              <MenuItem
                key={index}
                value={item}
                sx={{
                  color: "primary.dark",
                  fontSize: 16,
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                <Checkbox
                  sx={{ color: "primary.main" }}
                  checked={personName.includes(item)}
                  checkedIcon={<CheckBoxOutlinedIcon />}
                />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
}
