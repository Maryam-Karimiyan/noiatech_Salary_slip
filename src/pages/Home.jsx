import { Box, Typography } from "@mui/material";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate()
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding={{ sm: "0 10px", md: "0 100px" }}
      gap={3}
      mt={20}
      justifyItems="center"
      alignContent="center"
    >
      <ButtonComponent>
        <Typography color="primary.light" fontWeight={600} fontSize={16}>
          سفارش از منو
        </Typography>
      </ButtonComponent>
      <ButtonComponent width="100%" onClick={()=>navigate("/designPizza")}>
        <Typography color="primary.light" fontWeight={600} fontSize={16}>
          پیتزای خودت را بساز
        </Typography>
      </ButtonComponent>
    </Box>
  );
}
