import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AssignmentCard = ({ assignment }) => {
  const { user } = useAuth();

  const {
    _id,
    title,
    description,
    marks,
    image,
    difficultyLevel,
    deadline,
    owner,
  } = assignment || {};

  return (
    <div>
      <div>
        <div className="p-6 rounded-md shadow-md border">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
          </div>
          {/* <p title={description} className="mb-4">
            {description.substring(0, 50)}..
          </p> */}
          <div className="flex items-center justify-between mb-4">
            <p>Marks: {marks}</p>
            <p>Difficulty Level: {difficultyLevel}</p>
          </div>

          <div>
            <div className="flex gap-2 w-full">
              <button className="btn flex-1">Update</button>
              <button className="btn flex-1">Delete</button>
            </div>
            <Link to={`/assignment/${_id}`}>
              <button className="btn w-full mt-2">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
