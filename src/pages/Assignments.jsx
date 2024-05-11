import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignments`);
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
