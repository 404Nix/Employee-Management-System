import React from "react";

const EmpHeader = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="leading-5 text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">NIKHIL 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white px-3 py-2 rounded-lg text-lg font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default EmpHeader;
