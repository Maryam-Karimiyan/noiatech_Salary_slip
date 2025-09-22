import { Box, TextField } from "@mui/material";
import { useRef } from "react";
import InputComponent from "./InputComponent";

export default function InputOTP({ length = 5, onChange }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // فقط اعداد
    if (onChange) {
      const values = inputsRef.current.map((input) => input?.value || "");
      values[index] = value;
      onChange(values.join(""));
    }
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <Box marginTop={1} display="flex" gap={1} justifyContent="center">
      {Array.from({ length }).map((_, index) => (
        <InputComponent
          key={index}
          inputRef={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          typeNumber={true}
          sx={{
            width: "100%",
            fontWeight: 700,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
                borderRadius: "8px",
              },
            },
          }}
        />
      ))}
    </Box>
  );
}
