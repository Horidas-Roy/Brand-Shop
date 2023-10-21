/* eslint-disable react/prop-types */

import { useState } from "react";
import Rating from "./RatingStar";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Swal from "sweetalert2";



const CartDetails = ({cart,carts,setCarts}) => {
    
   const [read,setRead]=useState(false);
    
    const {_id,brandName,img,description,price,productName,productType,rating}=cart;
    const handleReadBtn=()=>{
        setRead(!read);
    }

    const handleRemove=(id)=>{
      console.log("remove")
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then(result=>{
           if(result.isConfirmed){
            fetch(`https://brand-shop-server-dopm0ug64-horidas-roys-projects.vercel.app/card/${id}`,{
              method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
              console.log(data)
              if(data.deletedCount>0){
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                const remaining=carts.filter(cart=>cart._id !== id)
                setCarts(remaining);
              }
            })
           }
      })
      
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
                  <h2 className="text-center mt-10 flex gap-2 justify-center">
                    <button className="bg-purple-600 px-5 py-2 rounded-lg text-white font-bold">Buy Now</button>
                    <button onClick={()=>handleRemove(_id)} className="bg-purple-600 px-5 py-2 rounded-lg text-white font-bold">Remove</button>
                  </h2>
                </div>
      </div>
    </div>
    );
};

export default CartDetails;