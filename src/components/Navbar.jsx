import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../src/assets/images/logo.png'

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    // console.log(user)
    
    const handleSignOut=()=>{
      logOut()
      .then(result=>{
         console.log(result.user)
         Swal.fire('Log out Successfully!')
      })
      .catch(error=>{
         console.log(error.message)
      })
   }

    const navLinks=<>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/addProduct'>Add Product</NavLink></li>
       <li><NavLink to='/myCart'>myCart</NavLink></li>
       {/* <li><NavLink to='/login'>Login</NavLink></li> */}
       { user &&
        <li><button onClick={handleSignOut} className="lg:hidden">LogOut</button></li>}
       { user &&
        <li><button className="lg:hidden">{user?.displayName}</button></li>}
    </>

    

  return (
    <div className="navbar bg-[#090604f1] text-[#FFF]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex">
        <img src={logo} className="w-[50px]" alt="" />
        <a className="btn btn-ghost normal-case text-xl">Brand <span className="text-purple-700">Shop</span></a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        { user?
           
           <div className="flex justify-center items-center gap-2">
            <h2 className="hidden md:flex">{user?.displayName}</h2>
            {  user.photoURL?
              <img className="h-[40px] w-[40px] rounded-full" src={user?.photoURL}></img>
              :<div className="h-[40px] w-[40px] rounded-full bg-[#FFF] text-black flex justify-center items-center text-3xl"><FaUserCircle></FaUserCircle></div>
            }
            <button onClick={handleSignOut} className="btn hidden md:flex">LogOut</button>
           </div>
           :
           <Link to='/login'>
           <button className="bg-base-100 text-black font-bold px-3 py-2 rounded-md">Log In</button></Link>
          }
      </div>
    </div>
  );
};

export default Navbar;
