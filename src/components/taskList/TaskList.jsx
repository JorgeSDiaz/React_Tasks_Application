import { useContext } from "react";

import TaskCard from "../taskCard/TaskCard";
import { TaskContext } from "../../context/TaskContext";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center capitalize">
        no tasks yet
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
