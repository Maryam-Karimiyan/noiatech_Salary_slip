import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* اینجا محتوای صفحات لود میشه */}
      </main>
      <BottomNavbar />
    </>
  );
}
