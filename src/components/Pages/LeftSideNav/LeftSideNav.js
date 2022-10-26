import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1>All categories : {categories.length} </h1>
      {categories.map((cat) => (
        <p key={cat.id}>
          <Link to={`/category/${cat.id}`}>{cat.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
