import propTypes from "prop-types";

export default function TaskCard({ task, deleteTask }) {

  const handleClick = () => {
    deleteTask(task.id);
  };

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button type="button" onClick={handleClick}>
        Delete
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
  deleteTask: propTypes.func.isRequired,
};
