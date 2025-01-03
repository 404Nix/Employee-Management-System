import React from "react";
import EmpHeader from "../Others/EmpHeader";
import TaskOverview from "../Others/TaskOverview";
import TaskListing from "../TaskList/TaskListing";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#111111] h-screen w-full text-white">
      <EmpHeader />
      <TaskOverview />
      <TaskListing />
    </div>
  );
};

export default EmployeeDashboard;
