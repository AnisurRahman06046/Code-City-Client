import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllCourses = () => {
  const course = useLoaderData();
  return (
    <div>
      <div>
        <nav class=" bg-teal-500 p-6">
          <div class=" text-white mr-6"></div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"></button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div>
              <Link class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Download
              </Link>
            </div>
          </div>
        </nav>
      </div>
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
