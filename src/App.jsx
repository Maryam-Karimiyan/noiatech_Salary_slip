import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import MainLayout from "./pages/MainLayout";
import UserDashboard from "./pages/auth/UserDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
            <Route path="/user" element={<UserDashboard />} />
          </Route>

          <Route path="*" element={<h1>صفحه پیدا نشد 😢</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
