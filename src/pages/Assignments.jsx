import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/assignments?filter=${filter}`
    );
    setAssignments(data);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/assignment/${id}`
      );
      console.log(data);
      toast.success("Delete Successful");
      getData();
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-2 min-h-[calc(100vh-168px)]">
          <div>
            <h1>show all assignment</h1>
            <div>
              <div>
                {/*   Difficulty Level */}
                <h1>Filter your data</h1>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Difficulty Level</span>
                    </div>
                  </label>
                  <select
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
                    value={filter}
                    name="difficultyLevel"
                    id="difficultyLevel"
                    className="input input-bordered w-full max-w-xs"
                  >
                    <option value="">Filter By Category</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {assignments.map((assignment) => (
                <AssignmentCard
                  key={assignment._id}
                  assignment={assignment}
                  handleDelete={handleDelete}
                ></AssignmentCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignments;
