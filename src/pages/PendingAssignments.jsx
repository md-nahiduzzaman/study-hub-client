import { Link } from "react-router-dom";

const PendingAssignments = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-2  min-h-[calc(100vh-168px)]">
          <div>
            <h1>this is pending assignment page</h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Assignment Title</th>
                    <th>Assignment Marks</th>
                    <th>Assignment Status</th>
                    <th>Examinee Name</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                    <td>
                      <Link>
                        <button className="btn">Give Mark</button>
                      </Link>
                    </td>
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

export default PendingAssignments;
