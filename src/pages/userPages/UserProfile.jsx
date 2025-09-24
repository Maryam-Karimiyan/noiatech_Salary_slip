import { Box, Typography } from "@mui/material";
import InputComponent from "../../components/InputComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { useState } from "react";
import ProfileFields from "../../components/ProfileFields";
export default function UserProfile() {
  const [password, setPassword] = useState("");
  const [displayedPassword, setDisplayedPassword] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    const starCharacter = "*"; // کاراکتر ستاره مورد نظر
    setDisplayedPassword(starCharacter.repeat(value.length));
  };
  return (
    <Box sx={{ mx: 4, py: 2, textAlign: "center" }}>
      <ProfileFields />

      <InputComponent
        helperText="رمز عبور"
        value={displayedPassword}
        onChange={handleChange}
        sx={{
          width: "95%",
        }}
      />
      <ButtonComponent variant="outlined" sx={{ width: "95%", mt: 12 }}>
        <Typography fontSize={18}>ویرایش اطلاعات</Typography>
      </ButtonComponent>
    </Box>
  );
}
