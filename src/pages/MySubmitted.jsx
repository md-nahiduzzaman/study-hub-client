import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MySubmitted = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [showIframe, setShowIframe] = useState(false);
  console.log(assignments);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(`/my-submission/${user?.email}`);
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
                    <th>My Submission</th>
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
                      <td>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          className="btn"
                          onClick={() =>
                            document
                              .getElementById(`my_modal_${assignment?._id}`)
                              .showModal()
                          }
                        >
                          View Doc
                        </button>
                        <dialog
                          id={`my_modal_${assignment?._id}`}
                          className="modal"
                        >
                          <div className="modal-box">
                            <p className="py-4">
                              Press ESC key or click outside to close
                            </p>
                            <iframe
                              title="PDF Viewer"
                              src={assignment?.docLink}
                              width="100%"
                              height="500px"
                              style={{ border: "none" }}
                            ></iframe>
                          </div>
                          <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                          </form>
                        </dialog>
                      </td>

                      {/* <td>{assignment?.docLink}</td> */}
                      <td>{assignment?.obtainMarks}</td>
                      <td>{assignment?.feedback}</td>
                    </tr>
                  ))}
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
