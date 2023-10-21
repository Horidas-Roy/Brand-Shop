import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import CartDetails from '../components/CartDetails';

const MyCart = () => {
    const[carts,setCarts]=useState([])
    console.log(carts)
    const {user}=useContext(AuthContext)
    const [loader,setLoader]=useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/cardCollection/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoader(false);
            setCarts(data)
        })
    },[user])

    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold py-5'>Your Cart</h2>
            {/* <h2>My Cart:{carts.length}</h2> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4'>
                {
                    carts.map(cart=><CartDetails key={cart._id} cart={cart}></CartDetails>)
                }
            </div>
        </div>
    );
};

export default MyCart;