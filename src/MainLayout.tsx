import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
