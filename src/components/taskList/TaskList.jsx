import { useContext } from "react";

import TaskCard from "../taskCard/TaskCard";
import { TaskContext } from "../../context/TaskContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>no tasks yet</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}
