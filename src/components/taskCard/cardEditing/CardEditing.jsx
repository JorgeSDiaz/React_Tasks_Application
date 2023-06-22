import propTypes from "prop-types";

export default function CardEditing({ task }) {
  return (
    <>
      <input
        type="text"
        value={task.title}
        className="p-3 w-full mb-2 text-black"
      />
      <textarea
        value={task.description}
        className="p-3 w-full mb-2 text-black"
      ></textarea>
    </>
  );
}

CardEditing.propTypes = {
  task: propTypes.shape({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};
