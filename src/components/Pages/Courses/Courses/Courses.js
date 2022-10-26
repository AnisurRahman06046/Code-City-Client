import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../Card/Card";
import CourseList from "../../CotrseList/CourseList";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coursecategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid grid-cols-3">
      <div className="border-2">
        {categories.map((category) => (
          <CourseList key={category.id} category={category}></CourseList>
        ))}
      </div>
      <div className="col-span-2 border-2">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Card key={category.id} category={category}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
