import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

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
                  <Link>
                    <button className="btn">Take assignment</button>
                  </Link>
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
