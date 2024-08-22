import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import {toast} from 'react-hot-toast'
const Navbar = (props) => {
    let isLogggedIn=props.isLogggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='
    flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-3 text-richblack-100 gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login-Signup-Logout-Dashboard */}
        <div className='flex items-center gap-x-4 '>
            {!isLogggedIn &&
                <Link to="/Login">
                    <button className='
                    bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Login
                    </button>
                </Link>
            }
            {!isLogggedIn &&
                <Link to="/signup">
                    <button className='
                    bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign Up
                    </button>
                </Link>
            }
            {isLogggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }} className='
                    bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            {isLogggedIn &&
                <Link to="/dashboard">
                    <button className='
                    bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar
