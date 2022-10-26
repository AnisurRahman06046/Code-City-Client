import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../CategoryCard/CategoryCard";

const Categories = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div>
      <h1>this is categories page {course.length} </h1>
      <div className="grid grid-cols-2 p-10 gap-10">
        {course.map((c) => (
          <CategoryCard key={c._id} c={c}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
