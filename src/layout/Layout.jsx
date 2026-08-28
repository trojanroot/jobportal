import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/underconstruction" ||
    location.pathname === "/apply";

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </>
  );
}

export default Layout;
