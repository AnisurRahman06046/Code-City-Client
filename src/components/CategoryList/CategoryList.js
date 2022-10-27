import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ cat }) => {
  return (
    <ul className="menu bg-base-100 w-56 mb-2">
      <li>
        <Link to={`/category/${cat.id}`}>{cat.name}</Link>
      </li>
    </ul>
  );
};

export default CategoryList;
