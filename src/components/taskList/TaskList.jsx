import propTypes from "prop-types";

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h1>no tasks yet</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  );
}

TaskList.propTypes = {
  tasks: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
    })
  ).isRequired,
};
