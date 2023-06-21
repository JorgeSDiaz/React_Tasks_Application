import propTypes from "prop-types";
import { useContext } from "react";
import { useState } from "react";

import { TaskContext } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const [editing, setEditing] = useState(false)

  const handleDeleteClick = () => {
    deleteTask(task.id);
  };

  const handleEditClick = () => {
    setEditing(!editing);
    console.log(editing.valueOf());
  };

  return (
    <div className="bg-gray-700 text-white p-5 rounded-md">
      <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm text-yellow-500">{task.description}</p>
      <button
        className="bg-red-500 px-5 py-2 rounded-md mt-5 hover:bg-red-400"
        type="button"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
      <button
        className="bg-green-700 px-5 py-2 rounded-md mt-5 ml-2 hover:bg-green-600"
        type="button"
        onClick={handleEditClick}
      >
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

TaskCard.propTypes = {
  task: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};
