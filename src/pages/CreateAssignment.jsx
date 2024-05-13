import { useState } from "react";
import DatePicker from "react-datepicker";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CreateAssignment = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  // add assignment
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const image = form.image.value;
    const difficultyLevel = form.difficultyLevel.value;
    const deadline = startDate;

    if (marks < 50 || marks > 100) {
      toast.error("Marks should be greater than 50 and less than 100");
      return;
    }

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
      const { data } = await axiosSecure.post(`/assignment`, assignmentData);
      console.log(data);
      form.reset();
      toast.success("Assignment Add Successfully");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="bg-base-100">
      <div className="container mx-auto px-2 min-h-[100vh]">
        <div className="flex flex-col items-center justify-center ">
          <form
            onSubmit={handleFormSubmit}
            className="  grid grid-cols-2 gap-4  p-11 max-w-screen-md mt-7 border rounded-md shadow-md "
          >
            <h1 className="font-semibold text-2xl">Create Assignment</h1>
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
                  className="input input-bordered w-full"
                  required
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
                  required
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
                  className="input input-bordered w-full max-w-xs"
                  required
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
                  className="input input-bordered w-full max-w-xs"
                  required
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
                required
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
                required
              />
            </div>
            {/* submit */}
            <div className="col-span-2">
              <button className="btn w-full bg-[#59c6bc] text-white hover:bg-[#368880]">
                Create Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
