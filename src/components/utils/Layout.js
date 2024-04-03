import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <main>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default Layout;