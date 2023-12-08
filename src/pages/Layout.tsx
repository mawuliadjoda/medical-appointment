import { Outlet } from "react-router-dom";
import { MyNavbar } from "../components/MyNavbar";
import Home from "./Home";

const Layout =() => {
    return (
      <div>
        <MyNavbar />
        <Home />
        <Outlet />
      </div>
    );
}
export default Layout