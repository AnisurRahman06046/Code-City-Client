import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ category }) => {
  const { id, title } = category;
  console.log(category);
  return (
    <ul className="menu  bg-fuchsia-800 mt-3 w-56">
      <li>
        <Link to={`/category/${id}`} className="text-slate-200">
          {title}
        </Link>
      </li>
    </ul>
  );
};

export default CourseList;
