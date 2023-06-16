import { useState } from "react";
import propTypes from "prop-types";

export default function TaskForm({ createTask }) {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your task"
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}
        autoFocus
      />
      <textarea
        placeholder="Write your description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
}

TaskForm.propTypes = {
  createTask: propTypes.func.isRequired,
};
