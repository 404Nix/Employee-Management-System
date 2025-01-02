import React from "react";
import EmpHeader from "../Others/EmpHeader";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="p-10 bg-[#111111] h-screen w-full text-white">
        <EmpHeader />
        <CreateTask />
        <AllTask />
    </div>
  );
};

export default AdminDashboard;
