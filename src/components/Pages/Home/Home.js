import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../CourseCard/CourseCard";

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <h1>this is homepage {allCourses.length}</h1>
      {allCourses.map((course) => (
        <CourseCard key={course._id} course={course}></CourseCard>
      ))}
    </div>
  );
};

export default Home;
