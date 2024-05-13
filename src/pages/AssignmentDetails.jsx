import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
  const assignment = useLoaderData();

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

  // submit assignment
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const docLink = form.docLink.value;
    const note = form.note.value;
    const status = "Pending";
    const obtainMarks = "";
    const feedback = "";
    const assignmentId = _id;
    const email = user?.email;
    const examineeName = user?.displayName;

    const submittedData = {
      title,
      docLink,
      note,
      status,
      marks,
      obtainMarks,
      feedback,
      assignmentId,
      email,
      examineeName,
      owner_email: owner?.email,
    };

    console.log(submittedData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/submitted-assignment`,
        submittedData
      );
      console.log(data);
      toast.success("Assignment Add Successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }

    const modal = document.getElementById("my_modal_1");
    modal.close();
  };

  return (
    <>
      <div>
        <div className="container mx-auto px-2 min-h-[100vh]">
          <section className="p-6 mt-9">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
              <img
                src={image}
                alt="image"
                className="object-cover w-full h-80 rounded-md xl:col-span-2 "
              />
              <div className="w-full rounded-md   xl:col-span-3">
                <h1 className="text-3xl font-bold ">{title}</h1>
                <p className="my-8">
                  {" "}
                  <span className="font-bold">Description: </span> {description}
                </p>
                <hr />
                <div>
                  <h1 className="text-xl font-medium mt-8 pb-2">
                    Assignment Details
                  </h1>
                  <p>
                    <span className="font-semibold">Marks:</span> {marks}
                  </p>
                  <p>
                    {" "}
                    <span className="font-semibold">
                      Difficulty Level:
                    </span>{" "}
                    {difficultyLevel}
                  </p>
                  <p>
                    {" "}
                    <span className="font-semibold">Deadline: </span>
                    {new Date(deadline).toLocaleDateString()}
                  </p>
                </div>
                <div className="mt-8 mb-8">
                  <h1 className="text-xl font-medium mt-8 pb-2">
                    Owner Details
                  </h1>
                  <p>
                    {" "}
                    <span className="font-semibold">Name: </span>
                    {owner?.name}
                  </p>
                  <p>
                    {" "}
                    <span className="font-semibold">Email:</span> {owner?.email}
                  </p>
                </div>
                <div>
                  {/* <Link>
                    <button className="btn">Take assignment</button>
                  </Link> */}
                  <button
                    className="btn bg-[#59c6bc] text-white hover:bg-[#368880]"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Take assignment
                  </button>
                  <dialog id="my_modal_1" className="modal text-center">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        Submit Your Assignment
                      </h3>

                      <div className="modal-action justify-center">
                        <form
                          onSubmit={handleFormSubmit}
                          method="dialog"
                          className="w-[80%]"
                        >
                          {/* title */}
                          <div className="col-span-2 w-full">
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">
                                  PDF or Doc link
                                </span>
                              </div>
                              <input
                                type="text"
                                placeholder="PDF/Doc Link"
                                name="docLink"
                                className="input input-bordered w-full"
                                required
                              />
                            </label>
                          </div>
                          {/*  Note */}
                          <div className="col-span-2">
                            <label className="form-control w-full">
                              <div className="label">
                                <span className="label-text">Note</span>
                              </div>
                              <textarea
                                className="textarea textarea-bordered"
                                placeholder="Note"
                                name="note"
                                required
                              ></textarea>
                            </label>
                          </div>
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn bg-[#59c6bc] text-white hover:bg-[#368880] w-full mt-6">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AssignmentDetails;
