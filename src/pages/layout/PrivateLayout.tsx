import { Outlet } from "react-router-dom";
import { AppNavbar } from "../../components/AppNavbar";
import Home from "../Home";
import { createContext, useEffect, useState } from "react";
import { User } from "../../models/User";
import { Login } from "../auth/Login";

export const UserContext = createContext<User>(null);
const PrivateLayout = () => {

  const [conectedUser, setConectedUser] = useState<User>();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setConectedUser(foundUser);
    }
  }, []);

  return conectedUser?.roles ?
    <UserContext.Provider value={conectedUser}>
      <div>
        <AppNavbar />
        <Home />
        <Outlet />
      </div>
    </UserContext.Provider> :
    <Login />;
}
export default PrivateLayout