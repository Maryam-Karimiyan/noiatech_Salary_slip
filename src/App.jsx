import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import Header from "./components/Header";
import BottomNavbar from "./components/BottomNavbar";
import RegisterPage from "./pages/auth/RegisterPage";
import UserVerification from "./pages/auth/UserVerification";
import NameAndApprove from "./pages/DesignPizza/NameAndApprove";
import Home from "./pages/Home";
import ChoosePizzaType from "./pages/DesignPizza/ChoosePizzaType";
import DesignPizza from "./pages/DesignPizza/DesignPizza";
import { Container } from "@mui/material";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Container>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/userVerification" element={<UserVerification />} />
          <Route path="/designPizza" element={<ChoosePizzaType />} />
          <Route path="/designPizza/complete" element={<DesignPizza />} />
          <Route path="/orderPizza/:order" element={<NameAndApprove />} />
          <Route path="/cart/:cart" element={<Cart />} />
          <Route path="*" element={<h1>صفحه پیدا نشد 😢</h1>} />
        </Routes>
        <BottomNavbar />
      </Router>
    </Container>
  );
}

export default App;
