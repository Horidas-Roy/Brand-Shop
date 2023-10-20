import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "./RatingStar";

const Details = () => {
  const brand = useLoaderData();
  console.log(brand);
  const {brandName,img,description,price,productName,productType,rating}=brand
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          className="w-full"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
      <div className="card-body">
                  <h2 className="text-center text-3xl font-bold">{productName}</h2>
                  <div className=" flex justify-between items-center text-lg font-semibold">
                    <h2>Band Name:{brandName}</h2>
                    <h2>Type:{productType}</h2>
                  </div>
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <h2>Price:{price}</h2>
                    {/* <h2>Rating:{brand.rating}</h2> */}
                    <div><Rating rating={rating}></Rating></div>
                  </div>
                  <div>{description}</div>
                  <h2 className="text-center mt-10">
                    <button className="bg-purple-600 px-5 py-2 rounded-lg text-white font-bold">Add to Card</button>
                  </h2>
                </div>
      </div>
    </div>
  );
};

export default Details;
