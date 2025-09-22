import { Box, IconButton } from "@mui/material";
import Menu from "./Menu";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <IconButton
        aria-label="open drawer"
        edge="end"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Menu openMenu={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
