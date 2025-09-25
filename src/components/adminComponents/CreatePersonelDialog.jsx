import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Stack,
  Slide,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { forwardRef, useState } from "react";
import ProfileFields from "../ProfileFields";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";
import { CurvedPaper } from "../CurvedPaper";

export default function CreatePersonelDialog({ open, onClose }) {
  const [password, setPassword] = useState("");
  const [displayedPassword, setDisplayedPassword] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    const starCharacter = "*"; // کاراکتر ستاره مورد نظر
    setDisplayedPassword(starCharacter.repeat(value.length));
  };
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={open}
      keepMounted
      transition={Transition}
      onClose={onClose}
      PaperComponent={CurvedPaper}
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-end", // بچسبه پایین
        },
        "& .MuiPaper-root": {
          m: 1,
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          color: "#C20531",
          bgcolor: "#FFD5DF",
          border: "2px solid",
          borderColor: "#C20531",
          borderRadius: 2,
          position: "absolute",
          top: 1,
          right: 1,
          p: 0.5,
        }}
      >
        <CloseIcon sx={{ fontSize: 14 }} />
      </IconButton>

      <DialogContent sx={{ p: 2, textAlign: "center" }}>
        <Box pb={4}>
          <ProfileFields />
          <InputComponent
            helperText="رمز عبور موقت"
            value={displayedPassword}
            onChange={handleChange}
            sx={{
              width: "95%",
              mt: 1,
            }}
          />
        </Box>
        <ButtonComponent fullWidth sx={{ py: 1.5, fontSize: 18 }}>
          ثبت
        </ButtonComponent>
      </DialogContent>
    </Dialog>
  );
}
