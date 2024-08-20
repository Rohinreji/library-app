import { StudentSidebar } from "../studentSidebar/studentSidebar";
import { StudentViewProduct } from "../studentViewProduct/studentViewProduct";

export const StudentDashboard = () => {
  return (
    <div className="d-flex">
      <div>
        <StudentSidebar />
      </div>
      <div>
        <StudentViewProduct />
      </div>{" "}
    </div>
  );
};
