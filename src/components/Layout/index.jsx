import { Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
