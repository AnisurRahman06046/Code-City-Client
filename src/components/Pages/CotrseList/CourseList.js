import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ category }) => {
  const { title } = category;
  console.log(category);
  return (
    <div>
      <Link>{title}</Link>
    </div>
  );
};

export default CourseList;
