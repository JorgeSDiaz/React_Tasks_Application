import { useState, useContext } from "react";

import { TaskContext } from "../../context/TaskContext";

export default function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title: tittle,
      description: description,
    });
    setTittle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 mb-5">
        <h1 className="text-2xl font-bold text-white mb-3">Add Task</h1>
        <input
          type="text"
          placeholder="Write your task"
          onChange={(e) => setTittle(e.target.value)}
          value={tittle}
          autoFocus
          className="p-3 w-full mb-2"
        />
        <textarea
          placeholder="Write your description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
