import React from "react";
import EmpHeader from "../Others/EmpHeader";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  return (
    <div className=" bg-[#111111] h-full w-full p-10 text-white">
        <EmpHeader />
        <CreateTask />
        <AllTask />
    </div>
  );
};

export default AdminDashboard;
