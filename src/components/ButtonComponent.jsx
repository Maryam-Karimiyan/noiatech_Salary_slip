import Button from "@mui/material/Button";

export default function ButtonComponent({
  children,
  variant = "contained",
  sx,
  size,
  ...rest
}) {
  return (
      <Button
        sx={{ ...sx }}
        size={size && size}
        variant={variant && variant}
        {...rest}
      >
        {children}
      </Button>
  );
}
