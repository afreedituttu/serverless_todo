import React from 'react'
import { useState } from 'react';

const AddTask = ({ activeUser, setTasks, setCurrentlyAdding, gen_task_id}) => {
  const [task, setTask] = useState({
    task_name: "",
    task_content: "",
  });
  const onchange_data = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
  
  // algorithm to add a new task to tasks repect to userId
  const addTask = () => {
    task["taskId"] = gen_task_id();
    task['status'] = 'not_completed'
    console.log('clicked');
    console.log('add ',task);
    setTasks((old_tasks)=>{
      var updated_tasks;
      var user_exist = false;
      updated_tasks = old_tasks.map((t)=>{
        if(t.userId == activeUser.userId){
          user_exist = true
          return {
            userId:parseInt(activeUser.userId),
            tasks:[...t.tasks, task]
          }
        }
        return t
      })
      if(!user_exist){
        updated_tasks = [
          ...old_tasks,
          {
            userId:activeUser.userId,
            tasks:[task]
          }
        ]
      }
      return updated_tasks
    });
  };
  
  return (
    <div className="add-task-container flex justify-center items-center absolute  top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30">
      <div className="add-task flex flex-col p-5 bg-white">
        <h1 className=' text-xl '>Add task</h1>
        <input
          className="custom-add-input my-2 bg-gray-100"
          value={gen_task_id()}
          disabled
          type="text"
          name="taskId"
        />
        <input
          className="custom-add-input bg-gray-100 my-2"
          value={task.task_name}
          onChange={onchange_data}
          type="text"
          name="task_name"
          placeholder="task name"
        />
        <textarea
          className="custom-add-textarea bg-gray-100"
          value={task.task_content}
          onChange={onchange_data}
          name="task_content"
          placeholder="write about your tasks"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="custom-add-button bg-green-500 text-white mt-5"
          onClick={addTask}
        >
          Add
        </button>
        <button
          className="custom-add-button bg-red-500 text-white"
          onClick={() => {
            setCurrentlyAdding(() => {
              return false;
            });
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default AddTask