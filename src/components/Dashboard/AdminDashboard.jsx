import React from "react";
import EmpHeader from "../Others/EmpHeader";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className=" bg-[#111111] h-full w-full p-10 text-white">
        <EmpHeader changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
    </div>
  );
};

export default AdminDashboard;
