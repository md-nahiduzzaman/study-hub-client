const Faq = () => {
  return (
    <div>
      <div className="container mx-auto px-2">
        <section className=" ">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 dark:divide-gray-300">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  How can I create an account on StudyHub?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Creating an account on StudyHub is quick and easy. Simply
                    visit our website and click on the "Sign Up" button. You'll
                    be prompted to provide some basic information such as your
                    name, email address, and a password of your choice. Once
                    you've filled out the registration form and verified your
                    email, your StudyHub account will be ready to use..
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  Can I invite my friends to join StudyHub?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    Yes, you can definitely invite your friends to join
                    StudyHub! After signing in to your account, navigate to the
                    "Invite Friends" section where you'll find options to invite
                    friends via email, social media, or by sharing a unique
                    referral link. Encourage your friends to join StudyHub and
                    start collaborating on assignments, study groups, and more!
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                  What features does StudyHub offer for collaborative studying?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p>
                    StudyHub offers a range of features designed to facilitate
                    collaborative studying with friends. Some key features
                    include the ability to create and join study groups, share
                    study materials and notes, collaborate on assignments in
                    real-time, and provide feedback to peers. Additionally,
                    StudyHub provides tools for organizing study sessions,
                    tracking progress, and engaging in discussions with fellow
                    members.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
