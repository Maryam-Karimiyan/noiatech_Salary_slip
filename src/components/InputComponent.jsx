import TextField from "@mui/material/TextField";

export default function InputComponent({
  label = "",
  helperText = "",
  variant = "outlined",
  size = "small",
  color = "primary.dark",
  labelTextColor = "",
  sx,
  InputProps,
  typeNumber = false,
  readOnly = false,
  ...rest
}) {
  const hasStartAdornment = InputProps?.startAdornment != null;
  return (
    <TextField
      readOnly={readOnly}
      type={typeNumber ? "number" : null}
      helperText={helperText && helperText}
      size={size && size}
      label={label && label}
      variant={variant && variant}
      slotProps={{
        input: {
          ...InputProps,
          readOnly: readOnly,
          sx: {
            "& input, & textarea": {
              color: color,
              textAlign: "center",
              position: hasStartAdornment && "relative",
              left: hasStartAdornment && -20,
            },
          },
        },
        formHelperText: {
          sx: {
            order: -1, // نمایش helperText بالای فیلد
            textAlign: "right", // راست چین
            mb: 0.5, // فاصله زیر helperText
            fontSize: "0.85rem",
            mr: 0.5,
            color: labelTextColor,
            fontWeight: 700,
            fontSize: 10,
          },
        },
      }}
      sx={{
        ...sx,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "primary.light",
            borderRadius: 2,
          },
        },
      }}
      {...rest}
    />
  );
}
