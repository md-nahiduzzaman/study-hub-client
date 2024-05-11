import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MySubmitted = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  console.log(assignments);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/my-submission/${user?.email}`
    );
    setAssignments(data);
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-2  min-h-[calc(100vh-168px)]">
          <h1>My Submitted</h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table border">
                {/* head */}
                <thead>
                  <tr>
                    <th>Assignment Title</th>
                    <th>Assignment Status</th>
                    <th>Assignment marks</th>
                    <th>Obtained marks</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment) => (
                    <tr key={assignment._id}>
                      <td>{assignment?.title}</td>
                      <td>{assignment?.status}</td>
                      <td>{assignment?.marks}</td>
                      <td>{assignment?.obtainMarks}</td>
                      <td>{assignment?.feedback}</td>
                    </tr>
                  ))}
                  {/* row 1 */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySubmitted;
