import { createBrowserRouter } from "react-router-dom";

import LogIn from "../../components/LogIn/LogIn/LogIn";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import CourseDetails from "../../components/Pages/CourseDetails/CourseDetails";
import Courses from "../../components/Pages/Courses/Courses/Courses";
import Faq from "../../components/Pages/Faq/Faq/Faq";
import Home from "../../components/Pages/Home/Home";
import Register from "../../components/Register/Register/Register";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/category/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
