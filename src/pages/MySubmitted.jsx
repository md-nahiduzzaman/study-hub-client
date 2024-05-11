const MySubmitted = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-2  min-h-[calc(100vh-168px)]">
          <h1>My Submitted</h1>
          <div>
            <div className="overflow-x-auto">
              <table className="table border">
                {/* head */}
                <thead>
                  <tr>
                    <th>Assignment Title</th>
                    <th>Assignment Status</th>
                    <th>Assignment marks</th>
                    <th>Obtained marks</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySubmitted;
