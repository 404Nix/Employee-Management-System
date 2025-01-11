import React from "react";
import EmpHeader from "../Others/EmpHeader";
import TaskOverview from "../Others/TaskOverview";
import TaskListing from "../TaskList/TaskListing";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#111111] h-screen w-full text-white">
      <EmpHeader changeUser={props.changeUser} data = {props.data} />
      <TaskOverview data = {props.data}/>
      <TaskListing data = {props.data}/>
    </div>
  );
};

export default EmployeeDashboard;
