import { Box, IconButton } from "@mui/material";
import Menu from "./Menu";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Menu openMenu={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
