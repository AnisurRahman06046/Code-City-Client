import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, img, name } = course;
  console.log(course);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/course/${_id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
