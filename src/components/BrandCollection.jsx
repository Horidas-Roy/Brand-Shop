import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Rating from "./RatingStar";
import Advertisement from "./Advertisement";

const BrandCollection = () => {
  const brands = useLoaderData();
  const { brandName } = useParams();
  console.log(brands);

  return (
    <div>
      <div>
          <Advertisement></Advertisement>
      </div>
      <div>
      <h2 className="text-4xl font-bold text-center py-5">
        {brandName.toUpperCase()}'s Collections
      </h2>
      <div className="grid grid-cols-2 container mx-auto gap-5">
        {brands.map((brand) => (
          <div key={brand._id}>
            <div className="rounded-lg">
              <div className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={brand.img}
                    alt="Shoes"
                    className="w-full rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Name:{brand.productName}</h2>
                  <div className=" flex justify-between items-center text-lg font-semibold">
                    <h2>Band Name:{brand.brandName}</h2>
                    <h2>Type:{brand.productType}</h2>
                  </div>
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <h2>Price:{brand.price}</h2>
                    {/* <h2>Rating:{brand.rating}</h2> */}
                    <div><Rating rating={brand.rating}></Rating></div>
                  </div>
                  <div>{brand.description.slice(0, 200)}...</div>
                  <div className="card-actions justify-center">
                    <Link to={`/details/${brand._id}`}><button className="btn btn-primary">Details</button></Link>
                    <Link to={`/update/${brand._id}`}><button className="btn btn-primary">Update</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BrandCollection;
