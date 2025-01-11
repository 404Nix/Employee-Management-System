import React, { useState } from "react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");


  const [newTasks, setNewTasks] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("hey");

    // console.log(title, date, assign, category, desc);

    setNewTasks({title, date, category, desc, active: false, failed: false, newTask: true, completed: false})
    
    const data = JSON.parse(localStorage.getItem("employees"))

    data.forEach((elem) => {
      if(assign == elem.firstName){
        elem.tasks.push(newTasks)
        console.log(elem.tasks)
      }
    });

    setTitle("");
    setDate("");
    setAssign("");
    setCategory("");
    setDesc("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full justify-start items-start mt-5 bg-[#1c1c1c] px-6 py-6 rounded-md"
      >
        <div className="w-1/2 flex flex-col gap-4 text-gray-300">
          <div className="">
            <h3>Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              className="w-[60%] bg-transparent border-[1px] outline-none rounded-md border-gray-400 text-sm px-2 py-1"
              type="text"
              placeholder="New Task"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
              // console.log(date)
            }}
              className="w-[60%] bg-transparent border-[1px] outline-none rounded-md border-gray-400 text-sm px-2 py-1"
              type="date"
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
            value={assign}
            onChange={(e) => {
              setAssign(e.target.value)
            }}
              className="w-[60%] bg-transparent border-[1px] outline-none rounded-md border-gray-400 text-sm px-2 py-1"
              type="text"
              placeholder="Emp Name"
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
            }}
              className="w-[60%] bg-transparent border-[1px] outline-none rounded-md border-gray-400 text-sm px-2 py-1"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4 ">
          <div>
            <h3>Description</h3>
            
            <textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value)
              // console.log(desc)
            }}
            className="w-full h-44 text-sm bg-transparent outline-none border-[1px] border-gray-400 px-2 py-1"></textarea>
          </div>
          <button className="bg-emerald-500 p-3 rounded font-semibold hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
