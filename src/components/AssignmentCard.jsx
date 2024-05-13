import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AssignmentCard = ({ assignment, handleDelete }) => {
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
            className="object-cover object-center w-full rounded-md h-56 bg-gray-500 dark:bg-gray-500"
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
              <Link to={`/update/${_id}`} className="w-full">
                <button className="btn flex-1 w-full border-green-500 bg-white hover:bg-green-500">
                  Update
                </button>
              </Link>
              <Link className="w-full">
                <button
                  className="btn flex-1 w-full border-red-500 bg-white hover:bg-red-500"
                  onClick={() => handleDelete(_id, owner)}
                >
                  Delete
                </button>
              </Link>
            </div>
            <Link to={`/assignment/${_id}`}>
              <button className="btn w-full bg-[#59c6bc] text-white hover:bg-[#368880] mt-2">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
