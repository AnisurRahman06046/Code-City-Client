import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllCourses = () => {
  const course = useLoaderData();
  return (
    <div>
      <img src={course?.img} alt="" />
      <h1 className="text-2xl">{course.name}</h1>
      <h4 className="font-bold mt-10">About this course</h4>
      <p>{course?.about}</p>
      <h4 className="font-bold mt-5">You will Learn</h4>
      <p>{course?.info}</p>
      <br />

      <Link to={`/checkout/${course._id}`} className="btn btn-primary mb-2">
        Get Premium Access
      </Link>
    </div>
  );
};

export default AllCourses;
