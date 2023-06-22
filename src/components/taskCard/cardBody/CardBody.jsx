import propTypes from "prop-types";

export default function CardBody({task}) {
  return (
    <>
      <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm text-yellow-500">{task.description}</p>
    </>
  );
}

CardBody.propTypes = {
    task: propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
    }).isRequired,
  };
