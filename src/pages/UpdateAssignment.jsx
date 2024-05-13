import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateAssignment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  const assignment = useLoaderData();
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

  // update assignment
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const image = form.image.value;
    const difficultyLevel = form.difficultyLevel.value;
    const deadline = startDate;
    const assignmentData = {
      title,
      description,
      marks,
      image,
      difficultyLevel,
      deadline,
      owner: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    console.log(assignmentData);
    try {
      const { data } = await axiosSecure.put(`/update/${_id}`, assignmentData);
      console.log(data);

      toast.success("Update Successfully");
      navigate(location?.state || "/assignments");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-2 min-h-[calc(100vh-168px)]">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-6">
            <h1 className="font-bold text-3xl">Update Assignment</h1>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-2 gap-4 bg-white p-11 max-w-screen-md mt-7 "
          >
            {/* title */}
            <div className="col-span-2 w-full">
              <label className="form-control w-full  ">
                <div className="label">
                  <span className="label-text">Assignment title</span>
                </div>
                <input
                  type="text"
                  placeholder="Assignment title"
                  name="title"
                  defaultValue={title}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/*  description */}
            <div className="col-span-2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Description"
                  name="description"
                  defaultValue={description}
                ></textarea>
              </label>
            </div>
            {/*  marks */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Marks</span>
                </div>
                <input
                  type="number"
                  placeholder="marks"
                  name="marks"
                  defaultValue={marks}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            {/*   Image URL */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Image URL</span>
                </div>
                <input
                  type="text"
                  placeholder="image"
                  name="image"
                  defaultValue={image}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            {/*   Difficulty Level */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Difficulty Level</span>
                </div>
              </label>
              <select
                name="difficultyLevel"
                id="difficultyLevel"
                className="input input-bordered w-full max-w-xs"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            {/*  deu date */}
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Deadline</span>
                </div>
              </label>
              <DatePicker
                className="input input-bordered w-full max-w-xs"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* submit */}
            <div className="col-span-2">
              <button className="btn w-full ">Update Assignment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;
