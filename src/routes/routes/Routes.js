import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/Pages/Courses/Courses/Courses";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Courses></Courses> },
      { path: "/course", element: <Courses></Courses> },
    ],
  },
]);
