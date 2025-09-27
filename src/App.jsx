import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/userPages/LoginPage";
import MainLayout from "./pages/MainLayout";
import UserDashboard from "./pages/userPages/UserDashboard";
import UserSalary from "./pages/userPages/UserSalary";
import UserProfile from "./pages/userPages/UserProfile";
import AdminDashboard from "./pages/adminPages/AdminDashboard";
import SalariesOfUsers from "./pages/adminPages/SalariesOfUsers";
import PersonelManagement from "./pages/adminPages/PersonelManagement";
import SalariesOfUsersReport from "./pages/adminPages/SalariesOfUsersReport";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route path="/user" element={<UserDashboard />}>
              <Route path="salary" element={<UserSalary />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="profile" element={<UserProfile />} />
              <Route path="salary" element={<SalariesOfUsers />} />
              <Route path="personels" element={<PersonelManagement />} />
              <Route path="reportsalary" element={<SalariesOfUsersReport />} />
            </Route>
          </Route>

          <Route path="*" element={<h1>صفحه پیدا نشد 😢</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
