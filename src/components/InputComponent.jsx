import TextField from "@mui/material/TextField";

export default function InputComponent({
  label = "",
  helperText = "",
  variant = "outlined",
  size = "small",
  color = "primary.dark",
  labelTextColor = "primary.dark",
  sx,
  InputProps,
  readOnly = false,
  ...rest
}) {
  const hasStartAdornment = InputProps?.startAdornment != null;
  return (
    <TextField
      readOnly={readOnly}
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
              textAlign: "right",
              direction: "rtl",
              position: hasStartAdornment && "relative",
              left: hasStartAdornment && -20,
              fontSize: 12,
            },
          },
        },
        formHelperText: {
          sx: {
            order: -1, // نمایش helperText بالای فیلد
            textAlign: "right", // راست چین
            mb: 0.5, // فاصله زیر helperText
            mr: 0.5,
            color: labelTextColor,
            fontWeight: 450,
            fontSize: 12,
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
          backgroundColor: "primary.contrastText",
        },
      }}
      {...rest}
    />
  );
}
