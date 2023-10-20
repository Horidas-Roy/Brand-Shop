import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandCollection = () => {
  const brands = useLoaderData();
  const {brandName}=useParams()
  console.log(brands);
  return (
    <div>
        <h2 className="text-4xl font-bold text-center py-5">{brandName.toUpperCase()}'s Collections</h2>
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
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BrandCollection;
