import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

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
          <div className="mt-6 mb-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
          </div>
          {/* <p title={description} className="mb-4">
            {description.substring(0, 50)}..
          </p> */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <p className="font-medium">
              Marks: <span className="">{marks}</span>
            </p>
            <div className="">
              <p
                className={`px-3 py-1 rounded-full ${
                  difficultyLevel === "Easy" && " bg-green-100 text-green-500"
                }  ${
                  difficultyLevel === "Medium" &&
                  " bg-yellow-100 text-yellow-500"
                } ${difficultyLevel === "Hard" && " bg-red-100 text-red-500"}`}
              >
                Difficulty Level: <span>{difficultyLevel}</span>{" "}
              </p>
            </div>
          </div>

          <div>
            <div className="flex gap-2 w-full">
              <Link to={`/update/${_id}`} className="w-full">
                <button className="btn flex-1 w-full border-green-100  hover:bg-green-500">
                  <FaEdit />
                  Update
                </button>
              </Link>
              <Link className="w-full">
                <button
                  className="btn flex-1 w-full border-red-100  hover:bg-red-500"
                  onClick={() => handleDelete(_id, owner)}
                >
                  <MdDelete />
                  Delete
                </button>
              </Link>
            </div>
            <Link to={`/assignment/${_id}`}>
              <button className="btn w-full bg-[#59c6bc] text-white hover:bg-[#368880] mt-2">
                View Details <FaArrowAltCircleRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
