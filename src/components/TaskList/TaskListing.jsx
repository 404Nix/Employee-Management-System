import React from "react";
import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskListing = ({data}) => {
  return (
    <div
      id="tasklist"
      className="flex py-5 overflow-x-auto gap-5 flex-nowrap items-center justify-start h-[55%] w-full mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if(elem.active){
          return <AcceptTask data={elem} key={idx} />
        }
        if(elem.newTask){
          return <NewTask data={elem} key={idx} />
        }
        if(elem.completed){
          return <CompletedTask data={elem} key={idx} />
        }
        if(elem.failed){
          return <FailedTask data={elem} key={idx} />
        }
      })}

      
    </div>
    
  );
};

export default TaskListing;
