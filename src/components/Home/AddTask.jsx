import React from 'react'
import { useState } from 'react';

const AddTask = ({setTasks, setCurrentlyAdding, tasks}) => {
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
  const clearInput = ()=> {
    task.task_name = ''
    task.task_content = ''
  }
  const gen_task_id = () => {
    var last_element_id;
    if (tasks.length != 0) {
      last_element_id = tasks[tasks.length - 1].taskId;
    } else {
      last_element_id = 0;
    }
    return last_element_id + 1;
  };
  const addTask = () => {
    setTasks((old_tasks) => {
      task["taskId"] = gen_task_id();
      task['status'] = 'not_completed'
      return [...old_tasks, task];
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