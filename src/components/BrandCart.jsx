import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCart = ({ brand }) => {
  const { brandName, img } = brand;
  return (
<Link to={`/products/${brandName}`}>
    <div className="card card-compact bg-base-100 shadow-xl ">
      <figure>
        <img
          src={img}
          className="h-[250px] w-full"

          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brandName}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BrandCart;
