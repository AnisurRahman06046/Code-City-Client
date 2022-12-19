import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../../CourseCard/CourseCard";

const Courses = () => {
  const allCourses = useLoaderData();
  return (
    <div className="mt-10 p-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10   ">
        {allCourses.map((course) => (
          <CourseCard course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
