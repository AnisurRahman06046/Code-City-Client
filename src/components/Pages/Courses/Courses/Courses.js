import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../../CourseCard/CourseCard";

const Courses = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <div className="grid lg: grid-cols-2 gap-10 sm:grid grid-cols-2 ">
        {allCourses.map((course) => (
          <CourseCard course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
