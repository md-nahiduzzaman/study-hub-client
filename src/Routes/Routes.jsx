import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from "../pages/Assignments";
import AssignmentDetails from "../pages/AssignmentDetails";
import PendingAssignments from "../pages/PendingAssignments";
import MySubmitted from "../pages/MySubmitted";
import UpdateAssignment from "../pages/UpdateAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/create-assignment",
        element: <CreateAssignment></CreateAssignment>,
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>,
      },
      {
        path: "/assignment/:id",
        element: <AssignmentDetails></AssignmentDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
      {
        path: "/pending-assignment",
        element: <PendingAssignments></PendingAssignments>,
      },
      {
        path: "/my-submitted",
        element: <MySubmitted></MySubmitted>,
      },
    ],
  },
]);

export default router;
