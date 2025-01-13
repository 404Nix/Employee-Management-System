import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] mt-2 p-5 rounded">
      <div className="bg-red-500 p-2 rounded-md mt-2 flex justify-between">
        <h1 className="w-1/5">Employee Name</h1>
        <h3 className="w-1/5">New Tasks</h3>
        <h5 className="w-1/5">Active Tasks</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      <div className="">
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 p-2 rounded-md mt-2 flex justify-between "
            >
              <h1 className="w-1/5">{elem.firstName}</h1>
              <h3 className="w-1/5">{elem.taskCount.new}</h3>
              <h5 className="w-1/5 text-yellow-500">{elem.taskCount.active}</h5>
              <h5 className="w-1/5 text-green-600">{elem.taskCount.completed}</h5>
              <h5 className="w-1/5 text-red-500">{elem.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
