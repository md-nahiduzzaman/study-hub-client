import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useEffect } from "react";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  console.log(assignments);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/assignments`
      );
      setAssignments(data);
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="container mx-auto px-2">
          <div>
            <h1>show all assignment</h1>
            <div className="grid grid-cols-1 gap-8 mt-8  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {assignments.map((assignment) => (
                <AssignmentCard
                  key={assignments._id}
                  assignment={assignment}
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
