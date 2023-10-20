import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCart = ({ brand }) => {
  const { brandName, img } = brand;
  return (
<Link to={`/brandCollection/${brandName}`}>
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img
          src={img}
          className="h-[250px] w-full"

          alt="Shoes"
        />
      </figure>
      <div className=" flex justify-between items-center p-5">
        <h2 className="card-title">Brand Name:{brandName.toUpperCase()}</h2>
        <button className="btn btn-primary">Details</button>
      </div>
    </div>
    </Link>
  );
};

export default BrandCart;
