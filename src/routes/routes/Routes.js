import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../components/CheckOut/CheckOut";
import AllCourses from "../../components/Pages/AllCourses/AllCourses";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Categories from "../../components/Pages/Categories/Categories";
import Courses from "../../components/Pages/Courses/Courses/Courses";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Faq from "../../components/Pages/Faq/Faq/Faq";
import Home from "../../components/Pages/Home/Home";
import LogIn from "../../components/Pages/LogIn/LogIn/LogIn";
import Register from "../../components/Pages/Register/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute/PrivateRoute";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(" https://server-e-platform.vercel.app/course"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch(" https://server-e-platform.vercel.app/course"),
      },
      {
        path: "/category/:id",

        element: <Categories></Categories>,
        loader: ({ params }) => {
          return fetch(
            ` https://server-e-platform.vercel.app/category/${params.id}`
          );
        },
      },
      {
        path: "/course/:id",
        element: <AllCourses></AllCourses>,
        loader: ({ params }) =>
          fetch(` https://server-e-platform.vercel.app/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(` https://server-e-platform.vercel.app/checkout/${params.id}`),
      },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);
