import React from "react";
import { Link } from "react-router-dom";

const Card = ({ category }) => {
  const { id, title, image_url } = category;
  return (
    <div className="card  bg-base-100 shadow-2xl p-4">
      <figure>
        <img style={{ height: "150px" }} src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end">
          <Link to={`/category/${id}`} className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
