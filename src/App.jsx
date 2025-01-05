import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

// localStorage.clear()

export const App = () => {


  // setLocalStorage()

  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);
  // console.log(authData.employees)

  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role);
        setLoggedInUser(userData.data)
      }
  }, []);

  const loginHandler = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : null}
      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data= {loggedInUser} />: null)}
    </>
  );
};
