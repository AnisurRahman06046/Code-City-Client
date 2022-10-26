import { createBrowserRouter } from "react-router-dom";
import AllCourses from "../../components/Pages/AllCourses/AllCourses";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Categories from "../../components/Pages/Categories/Categories";
import Courses from "../../components/Pages/Courses/Courses/Courses";
import Faq from "../../components/Pages/Faq/Faq/Faq";
import LogIn from "../../components/Pages/LogIn/LogIn/LogIn";
import Register from "../../components/Pages/Register/Register/Register";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Courses></Courses> },
      { path: "/courses", element: <Courses></Courses> },
      {
        path: "/category/:id",

        element: <Categories></Categories>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      { path: "/course/:id", element: <AllCourses></AllCourses> },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
