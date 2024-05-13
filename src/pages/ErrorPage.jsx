import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center min-h-screen">
        <section className="flex items-center h-full p-16 ">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-2xl font-semibold md:text-3xl">
                Sorry, we could not find this page.
              </p>
              <p className="mt-4 mb-8 text-gray-400">
                But do n0t worry, you can find plenty of other things on our
                homepage.
              </p>

              <Link to="/">
                <button className="btn bg-[#59c6bc] text-white hover:bg-[#368880]">
                  Back to homepage
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
