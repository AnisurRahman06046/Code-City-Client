import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../../CourseCard/CourseCard";

const Courses = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <h1>courses page</h1>

      <div className="grid lg: grid-cols-2 gap-10 sm:grid grid-cols-2 ">
        {allCourses.map((course) => (
          <CourseCard></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
