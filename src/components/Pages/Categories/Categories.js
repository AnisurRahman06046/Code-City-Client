import React from "react";
import { useLoaderData } from "react-router-dom";

const Categories = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div>
      <h1>this is categories page {course.length} </h1>
    </div>
  );
};

export default Categories;
