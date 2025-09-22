import { Alert, Snackbar } from "@mui/material";

export default function ShowAlert({ message, errorOpen, setErrorOpen }) {
  return (
    <Snackbar
      open={errorOpen}
      onClose={() => setErrorOpen(false)}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity="error"
        variant="filled"
        onClose={() => setErrorOpen(false)}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
