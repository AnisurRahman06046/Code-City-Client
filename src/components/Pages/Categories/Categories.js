import React from "react";
import { useLoaderData } from "react-router-dom";
// import CategoryCard from "../../CategoryCard/CategoryCard";
import CourseCard from "../../CourseCard/CourseCard";

const Categories = () => {
  const courseCategory = useLoaderData();
  console.log(courseCategory);
  return (
    <div>
      <div className="grid grid-cols-2 p-10 gap-10">
        {courseCategory.map((course) => (
          <CourseCard key={course._id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
