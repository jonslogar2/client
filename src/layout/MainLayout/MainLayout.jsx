import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import TopInfo from "../../components/TopInfo/TopInfo";

const MainLayout = () => {
  return (
    <>
      <TopInfo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
