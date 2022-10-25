import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello Code Hungrier</h1>
          <p className="py-6">
            This platform is for you to harvest your knowledge . Here you can
            find programming languaged tutorial.Explore the courses and be an
            efficient coder.Code your dreem , believe on yourself and stay with
            us.
          </p>
          <Link to="/courses" className="btn btn-primary">
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
