import React, { useContext } from "react";
import Header from "../Header";
import { UserContext } from "../contexts";
function Layout({ children }) {
  const { setUser, user, getUser } = useContext(UserContext);
  return (
    <>
      <Header setUser={setUser} user={user} getUser={getUser} />
      {children}
    </>
  );
}

export default Layout;
