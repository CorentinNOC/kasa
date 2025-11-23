import { Outlet } from "react-router";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Layout() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
