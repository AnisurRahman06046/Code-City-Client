import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryList from "../../CategoryList/CategoryList";
import Categories from "../Categories/Categories";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(" https://server-e-platform.vercel.app/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="mt-5 text-3xl font-semibold">Course Categories </h1>
      <div className="p-5 mt-5">
        {categories.map((cat) => (
          <CategoryList key={cat.id} cat={cat}></CategoryList>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
