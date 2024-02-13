import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Users from "../../components/Home/User";
import { TasksContext, UserContext } from "../../context/context";
import AddTask from "../../components/Home/AddTask";


const Home = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const {activeUser} = useContext(UserContext)
  const [currently_adding, setCurrentlyAdding] = useState(false);
  console.log('tasks ', tasks);
  
  function find_user_task(){
    const temp_user_tasks = tasks.find((t)=>{
      if(t.userId == activeUser.userId){
        return t
      }
    })
    if(!temp_user_tasks){
      return []
    }
    return temp_user_tasks.tasks
  }
  
  const [user_tasks, set_user_tasks] = useState(find_user_task())
  console.log('usertasks ', user_tasks);

  useEffect(()=>{
    set_user_tasks(find_user_task())
  }, [tasks])
  

  const delete_task = (id) => {
    setTasks((old_tasks)=>{
      return old_tasks.filter(task=>task.taskId!=id)
    })
  }
  const gen_task_id = () => {
    var last_element_id;
    if (user_tasks.length != 0) {
      last_element_id = user_tasks[user_tasks.length - 1].taskId;
    } else {
      last_element_id = 0;
    }
    return last_element_id + 1;
  };
  
  return (
    <div className="wrapper">
      <h1 className=" text-2xl my-2">User name : Afreedi z</h1>
      <div className="container grid grid-cols-custom">
        <div className="links bg-gray-300 p-5 custom-min-h">
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div className="tasks flex flex-col justify-between">
          <ul>
            <div className="find">
              <input
                type="text"
                placeholder="Search Tasks by name"
                className=" w-11/12 border-2 border-black p-2 mb-3"
              />
              <button className="p-2 bg-green-500 text-white w-1/12 border-2 border-black">
                find
              </button>
            </div>
            {user_tasks.map((task, index) => {
              if(task.status!='completed'){
                return (
                <li key={index} className="task flex justify-between p-1 border-b-2 border-b-gray-500">
                  <div className="task-details">
                    <span className=" pr-2">{index}.</span>
                    <span>{task.task_name}</span>
                  </div>
                  <div className="task-action">
                    <Link to={"/tasks/" + task.taskId}>
                      <button className="pt-1 pb-1 pl-3 pr-3 bg-black text-white m-1">
                        View
                      </button>
                    </Link>
                    <button onClick={()=>{
                      delete_task(task.taskId)
                    }} className="pt-1 pb-1 pl-3 pr-3 bg-red-500 text-white m-1">
                      Delete
                    </button>
                  </div>
                </li>
              );
              }
            })}
          </ul>
          <div
            className="add"
            onClick={() => {
              setCurrentlyAdding(() => {
                return true;
              });
            }}
          >
            <button className="py-1 px-3 bg-green-600 text-white text-xl">
              + Add Task
            </button>
          </div>
          {currently_adding ? <AddTask activeUser={activeUser} gen_task_id={gen_task_id} tasks={tasks} setCurrentlyAdding={setCurrentlyAdding} setTasks={setTasks} /> : (
            ""
          )}
        </div>
        <Users />
      </div>
    </div>
  );
};

export default Home;
