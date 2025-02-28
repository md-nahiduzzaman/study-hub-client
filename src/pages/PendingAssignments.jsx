import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const PendingAssignments = () => {
  const [numberError, setNumberError] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);
  console.log(assignments);
  console.log(user);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axiosSecure(`/pending-submission/${"Pending"}`);
    setAssignments(data);
  };

  // submit result
  const handleFormSubmit = async (e, id, marks) => {
    console.log(marks);
    e.preventDefault();
    const form = e.target;
    const obtainMarks = form.obtainMarks.value;
    const feedback = form.feedback.value;
    const status = "Complete";
    const submittedData = {
      obtainMarks,
      feedback,
      status,
    };
    console.log(submittedData);

    // reset error
    setNumberError("");

    // Validate obtained marks
    if (obtainMarks > marks) {
      setNumberError(
        `Total marks is ${marks}, Obtained marks should not be more than total marks`
      );
      return;
    }

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/assignment-result/${id}`,
        submittedData
      );
      console.log(data);
      toast.success("Update Successfully");
      getData();
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }

    const modal = document.getElementById(`my_modal_${id}`);
    modal.close();
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-2  min-h-[calc(100vh-168px)]">
          <div className="container p-4 mx-auto my-6 space-y-1 text-center flex flex-col items-center justify-center">
            <h1 className="pb-3 text-3xl font-bold md:text-4xl">
              Pending Assignments
            </h1>
          </div>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base">
                    <th>Assignment Title</th>
                    <th>Assignment Marks</th>
                    <th>Assignment Status</th>
                    <th>Examinee Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment) => (
                    <tr key={assignment._id}>
                      <td>{assignment?.title}</td>
                      <td>{assignment?.marks}</td>
                      <td className=" font-bold text-red-500">
                        {assignment?.status}
                      </td>
                      <td>{assignment?.examineeName}</td>

                      <td>
                        <div>
                          <button
                            className="btn bg-[#59c6bc] text-white hover:bg-[#368880]"
                            onClick={() =>
                              document
                                .getElementById(`my_modal_${assignment._id}`)
                                .showModal()
                            }
                          >
                            Give Mark
                          </button>
                          <dialog
                            id={`my_modal_${assignment._id}`}
                            className="modal text-center"
                          >
                            <div className="modal-box">
                              <div className="mb-8">
                                <h1 className="font-semibold text-2xl">
                                  Submit Result
                                </h1>
                              </div>

                              <div>
                                <p className="font-semibold text-base">
                                  Link:{" "}
                                  <span className="underline">
                                    <a
                                      href={assignment?.docLink}
                                      target="blank"
                                    >
                                      Doc Link
                                    </a>
                                  </span>
                                </p>
                                <p className="font-semibold text-base w-full">
                                  Note:{" "}
                                  <span className="text-gray-400">
                                    {assignment?.note}
                                  </span>{" "}
                                </p>
                              </div>

                              <div className="modal-action justify-center">
                                <form
                                  onSubmit={(e) =>
                                    handleFormSubmit(
                                      e,
                                      assignment?._id,
                                      assignment?.marks
                                    )
                                  }
                                  method="dialog"
                                  className="w-[80%]"
                                >
                                  {/* Obtain Maks */}
                                  <div className="col-span-2 w-full">
                                    <label className="form-control w-full">
                                      <div className="label">
                                        <span className="label-text">
                                          Obtain Marks
                                        </span>
                                      </div>
                                      <input
                                        type="number"
                                        // placeholder=""
                                        name="obtainMarks"
                                        className="input input-bordered w-full"
                                        // defaultValue={assignment?.obtainMarks}
                                        required
                                      />
                                    </label>
                                  </div>
                                  {/*  feedback */}
                                  <div className="col-span-2">
                                    <label className="form-control w-full">
                                      <div className="label">
                                        <span className="label-text">
                                          Feedback
                                        </span>
                                      </div>
                                      <textarea
                                        className="textarea textarea-bordered"
                                        placeholder="Your Feedback"
                                        name="feedback"
                                        // defaultValue={assignment?.feedback}
                                        required
                                      ></textarea>
                                    </label>
                                  </div>
                                  {numberError && (
                                    <p className="text-red-700">
                                      {numberError}
                                    </p>
                                  )}
                                  {/* if there is a button in form, it will close the modal */}
                                  <button className="btn mt-6 w-full bg-[#59c6bc] text-white hover:bg-[#368880]">
                                    Submit
                                  </button>
                                </form>
                              </div>
                            </div>
                          </dialog>
                        </div>
                      </td>
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

export default PendingAssignments;
