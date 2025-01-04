import React, { useState } from "react";

const login = ({loginHandler}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    
    loginHandler(email,password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#111111]">
      <div>
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
          className="flex flex-col border-emerald-700 border-2 p-20 rounded-xl"
        >
          <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
        }}
            required
            type="email"
            className="border-2 border-emerald-700 text-white rounded-full outline-none px-3 py-3 bg-transparent"
            placeholder="Enter Email"
          />
          <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
            required
            type="password"
            className="border-2 mt-3 border-emerald-700 text-white rounded-full outline-none px-3 py-3 bg-transparent"
            placeholder="Enter Password"
          />
          <button className="border-2 mt-10 border-emerald-700 text-white rounded-full outline-none px-3 py-3 bg-emerald-700">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default login;
