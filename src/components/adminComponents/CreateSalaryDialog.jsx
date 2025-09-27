import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Slide,
  Typography,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { forwardRef, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { CurvedPaper } from "../CurvedPaper";
import { ChooseDateMonth, ChooseDateYear } from "../ChooseDate";
import ChoosePersonel from "./ChoosePersonel";
import { useNavigate } from "react-router-dom";

export default function CreateSalaryDialog({ open, onClose }) {
  const navigate=useNavigate()
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
        <Stack px={3} py={2} gap={2}>
          <ChooseDateYear />
          <ChooseDateMonth />
          <ChoosePersonel />
        </Stack>
        <ButtonComponent
        onClick={()=>navigate('/admin/reportsalary')}
          fullWidth
          sx={{ py: 1.5, fontSize: 18, borderRadius: 2 }}
        >
          انتخاب فایل
        </ButtonComponent>
      </DialogContent>
    </Dialog>
  );
}
