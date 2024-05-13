import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Assignments = () => {
  const { user, loading } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [filter, setFilter] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/assignments?filter=${filter}`
    );
    setAssignments(data);
  };

  const handleDelete = (id, owner) => {
    // console.log(id, owner.email);
    if (user.email !== owner.email) {
      return toast.error("Operation Failed");
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/assignment/${id}`);
          console.log(data);
          toast.success("Delete Successful");
          getData();
        } catch (err) {
          console.log(err);
          toast.error(err?.message);
        }
      }
    });
  };

  const handleReset = () => {
    setFilter("");
  };

  // try {
  //   const { data } = await axios.delete(
  //     `${import.meta.env.VITE_API_URL}/assignment/${id}`
  //   );
  //   console.log(data);
  //   toast.success("Delete Successful");
  //   getData();
  // } catch (err) {
  //   console.log(err);
  //   toast.error(err?.message);
  // }

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  return (
    <>
      <div>
        <div className="container mx-auto px-2 min-h-[100vh]">
          <div>
            <div className="container p-4 mx-auto my-6 space-y-1 text-center flex flex-col items-center justify-center">
              <h1 className="pb-3 text-3xl font-bold md:text-4xl">
                Explore Assignments
              </h1>
              <p className="lg:w-[60%] text-center mt-8">
                Welcome to the Study Hub's assignment page, where collaborative
                learning thrives! Here, you'll find a variety of assignments
                created by your friends and peers. Dive in, engage, and conquer
                academic challenges together!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <div>
                <h1>Filter Your Data</h1>
              </div>
              <div>
                {/*   Difficulty Level */}

                <div>
                  {/* <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Difficulty Level</span>
                    </div>
                  </label> */}
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
              <div>
                <button
                  className="btn bg-[#59c6bc] text-white hover:bg-[#368880]"
                  onClick={handleReset}
                >
                  Reset
                </button>
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
