import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseData = useLoaderData();
  console.log(courseData);
  return (
    <div>
      <h1>course details page</h1>
    </div>
  );
};

export default CourseDetails;
