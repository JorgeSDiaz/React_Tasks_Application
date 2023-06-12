import TaskList from "./components/taskList/TaskList";
import TaskForm from "./components/taskForm/TaskForm";
import { tasks as data } from "./shared/tasks";

import { useState, useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (taskTitle) => {
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: taskTitle,
      description: taskTitle + " " + (tasks.length + 1) + " task description",
    }]);
  };

  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} />
    </>
  );
}
