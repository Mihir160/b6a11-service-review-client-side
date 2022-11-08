import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const mentuItems = <>
         
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.email ? 
            <>
            <li className='font-semibold'><Link to='/reviews'>My reviews</Link></li>
            <li className='font-semibold'><Link to='/addservices'>Add service</Link></li>
            <li className='font-semibold'>
                <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                </li>
            </>
            :
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
       
    </>
    return (
        <div className="navbar  h-20 mb-4  bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {mentuItems}
                    </ul>
                </div>
                <div>
                    <Link to='/' className=" normal-case text-xl">
                        <img style={{width:'150px', height:'50px'}}  src='https://www.xtremecleanmobileservices.com/upload/images/buttons/smi-logo.jpg' alt="" />
                        {/* <h2>Dust to Shine</h2> */}
                    </Link>
                </div>
            </div>
            <div className="navbar-center ml-60 hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {mentuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;