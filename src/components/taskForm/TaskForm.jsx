import { useState } from "react";
import propTypes from "prop-types";

export default function TaskForm({createTask}) {
  const [tittle, setTittle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(tittle);
    createTask(tittle);
  };

  return (
    <form onSubmit={handleSubmit} onChange={(e) => setTittle(e.target.value)}>
      <input type="text" placeholder="Write your task" />
      <button type="submit">Save</button>
    </form>
  );
}

TaskForm.propTypes = {
    createTask: propTypes.func.isRequired,
}
