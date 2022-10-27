import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../CourseCard/CourseCard";

const Home = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div>
      <div className="grid grid-cols-2 p-10 gap-10">
        {allCourses.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
