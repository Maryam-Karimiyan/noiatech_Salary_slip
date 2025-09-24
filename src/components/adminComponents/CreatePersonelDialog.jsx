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
// فرض کنید آیکون بک شما هم از assets وارد شده باشد
// import { BackIcon } from '../../assets'; // اگر نیاز بود

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
      sx={{
        "& .MuiPaper-root": {
          position: "absolute",
          //   bottom: -30,
          bottom: 0,
          width: "97%",
          //   overflow: "visible",
          overflow: "hidden",
          borderTopLeftRadius: 20,
          position: "relative",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          color: "#C20531",
          bgcolor: "#FFD5DF",
          border: "1px solid",
          borderColor: "#C20531",
          borderRadius: 2,
          position: "absolute",
          top: -10,
          right: 0,
          p: 0.5,
          "&::before": {
            content: '""',
            position: "absolute",
            top: -10,
            right: 0,
            width: "40px",
            height: "40px",
            background: "red",
            borderBottomLeftRadius: "20px",
            boxShadow: "5px 5px 0 5px #ffff",
          },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <DialogContent sx={{ p: 3, textAlign: "center" }}>
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
