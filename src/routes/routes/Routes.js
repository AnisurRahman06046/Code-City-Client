import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog/Blog";
import Courses from "../../components/Pages/Courses/Courses/Courses";
import Faq from "../../components/Pages/Faq/Faq/Faq";
import Home from "../../components/Pages/Home/Home";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/courses", element: <Courses></Courses> },
      { path: "/faq", element: <Faq></Faq> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
