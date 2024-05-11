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
        <h1>view assignment details {_id}</h1>
      </div>
      <div>
        <div>
          <section className="p-6">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
              <img
                src="https://source.unsplash.com/random/480x360"
                alt=""
                className="object-cover w-full rounded-md xl:col-span-2 "
              />
              <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-3">
                <h1 className="text-5xl font-extrabold ">Titel</h1>
                <p className="my-8">description</p>
                <div>
                  <p>Mark: 40</p>
                  <p>Dificaltiy: easy</p>
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
