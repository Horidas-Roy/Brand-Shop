import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "./RatingStar";
import { AuthContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const brand = useLoaderData();
  const {user}=useContext(AuthContext);
  console.log(brand);
  const {brandName,img,description,price,productName,productType,rating}=brand

  const handleAddToCard=()=>{
    brand.email=user.email
    console.log('user email:',brand)
    fetch(`https://brand-shop-server-qaafunooj-horidas-roys-projects.vercel.app/cardCollection`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(brand)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      Swal.fire(`${productName} is added to Your card successfully`)
    })
  }
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
      <div>
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
                    <button onClick={handleAddToCard} className="bg-purple-600 px-5 py-2 rounded-lg text-white font-bold">Add to Card</button>
                  </h2>
                </div>
      </div>
    </div>
  );
};

export default Details;
