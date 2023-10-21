/* eslint-disable react/prop-types */

import { useState } from "react";
import Rating from "./RatingStar";
import { AiOutlineArrowRight } from 'react-icons/ai';


const CartDetails = ({cart}) => {
    const {brandName,img,description,price,productName,productType,rating}=cart;
    const [read,setRead]=useState(false);
    const handleReadBtn=()=>{
        setRead(!read);
    }
    return (
        <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          className="w-full h-[70vh]"
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
                  <div>
                    {
                        !read ?
                       <div>
                         {description.slice(0,200)}<button onClick={handleReadBtn} className="text-blue-800 flex items-center"> readmore...<AiOutlineArrowRight ></AiOutlineArrowRight></button>
                       </div>
                        :
                        <div>
                            {description}
                        </div>
                    }
                  </div>
                  <h2 className="text-center mt-10">
                    <button className="bg-purple-600 px-5 py-2 rounded-lg text-white font-bold">Buy Now</button>
                  </h2>
                </div>
      </div>
    </div>
    );
};

export default CartDetails;