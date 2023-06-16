import propTypes from "prop-types";
import TaskCard from "../taskCard/TaskCard";

export default function TaskList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>no tasks yet</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
}

TaskList.propTypes = {
  tasks: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  })).isRequired,
  deleteTask: propTypes.func.isRequired,
};
