const Banner = () => {
  return (
    <div>
      <div>
        <div
          className="w-full bg-center bg-cover h-[38rem]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-6xl  mb-8">
                Meet, chat, and study with <br />
                <span className="text-[#59c6bc]">your friend</span>
              </h1>
              <button className="btn bg-[#59c6bc] text-white hover:bg-[#368880] border-none ">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
