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

    const submittedData = {
      title,
      docLink,
      note,
      status,
      obtainMarks,
      feedback,
      assignmentId,
      email,
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
        <div className="container mx-auto px-2 min-h-[calc(100vh-168px)]">
          <section className="p-6">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
              <img
                src={image}
                alt="image"
                className="object-cover w-full h-full rounded-md xl:col-span-2 "
              />
              <div className="w-full p-8 rounded-md   xl:col-span-3">
                <h1 className="text-5xl font-extrabold ">{title}</h1>
                <p className="my-8">{description}</p>
                <div>
                  <p>Marks: {marks}</p>
                  <p>Difficulty Level: {difficultyLevel}</p>
                  <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
                </div>
                <div className="mt-8 mb-8">
                  <h1>Owner Details</h1>
                  <p>Name: {owner?.name}</p>
                  <p>Email: {owner?.email}</p>
                </div>
                <div>
                  {/* <Link>
                    <button className="btn">Take assignment</button>
                  </Link> */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    open modal
                  </button>
                  <dialog id="my_modal_1" className="modal text-center">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Submit your task</h3>

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
                              ></textarea>
                            </label>
                          </div>
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn mt-2 w-full">Submit</button>
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
