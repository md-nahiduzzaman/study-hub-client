const Feature = () => {
  return (
    <div>
      <div className="container mx-auto px-2">
        <section className="m-4 md:m-8  dark:bg-gray-100  ">
          <div className="container p-4 mx-auto my-6 space-y-1 text-center flex flex-col items-center justify-center">
            <h2 className="pb-3 text-3xl font-bold md:text-4xl">
              Unlock the Power of Collaborative Learning <br /> with StudyCircle
            </h2>
            <p className="lg:w-[60%] text-center mt-8">
              Join StudyCircle today and experience a revolutionary approach to
              studying with friends. Our platform offers a seamless online
              environment where you can connect with your peers, collaborate on
              assignments, and elevate your learning together.
            </p>
          </div>
          <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col px-8 py-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
                Real-Time Collaboration
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400 dark:text-gray-600">
                Engage in real-time study sessions with your friends, where you
                can discuss topics, share notes, and work on assignments
                together. Experience the benefits of collaborative learning from
                the comfort of your own space.
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm text-[#59c6bc] "
                // href="/components"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font  dark:text-gray-800">
                Customizable Study Groups
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400 dark:text-gray-600">
                Create personalized study groups based on your subjects of
                interest or academic goals. Invite friends to join your group,
                set study schedules, and track progress collectively to stay
                motivated and on track.
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm text-[#59c6bc]"
                // href="/sections"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col px-8 py-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font  dark:text-gray-800">
                Interactive Assignments
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400 dark:text-gray-600">
                Complete interactive assignments designed to enhance your
                understanding and retention of key concepts. Our platform offers
                a variety of multimedia-rich activities, quizzes, and
                discussions to make learning engaging and effective.
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm text-[#59c6bc]"
                // href="/templates"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col px-8 py-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-800">
                Peer Feedback and Support
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400 dark:text-gray-600">
                Receive valuable feedback from your peers on your assignments
                and contribute to the growth of your friends by providing
                constructive feedback in return. Build a supportive community
                where everyone can learn from each other's strengths and
                weaknesses.
              </p>
              <a
                className="inline-flex items-center space-x-2 text-sm text-[#59c6bc]"
                // href="/docs"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feature;
