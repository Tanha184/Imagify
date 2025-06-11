import React, { useContext } from 'react'
import {assets} from'../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import  '../index.css'
import { AppContext } from '../Context/AppContext'

const Navbar = () => {
const navigate = useNavigate()
const {user} = useContext(AppContext);
const {setShowLogin} = useContext(AppContext);

  return (
    <div className=' flex item-center justify-between py-4 '>
         <Link to={'/'}>
            <img  src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40 ' />
         </Link>

         <div>
            {user 
            ? 
             <div className=' flex items-center gap-2 sm:gap-3 '>
                <button onClick={()=>navigate('/buy')} className=' flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 hover-box cursor-pointer'>
                    <img src={assets.credit_star} alt="" className='w-5' />
                    <p className=' text-xs sm:text-sm font-medium text-gray-600 '>Credit Left : 50</p>
                </button>
                <p className='  text-gray-600 max-sm:hidden pl-4 '>Hi, TanhaCoding</p>
               <div className="profile-container">
                    <img src={assets.profile_icon} alt="" className="profile-icon" />
                    <div className="dropdown-menu">
                        <ul className='list-none m-0 p-2 bg-white rounded-md border-0 text-sm'>
                        <li className='py-1  px-2 cursor-pointer pr-10 '>Logout</li>
                        </ul>
                    </div>
                    </div>

            </div> 
            :
            <div className=' flex items-center gap-2 sm:gap-5  '>
                <p onClick={()=> navigate('/buy')} className='cursor-pointer '>Pricing</p>
                <button onClick={()=>setShowLogin(true) } className=' bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer '>Login</button>
            </div>
            }
           
            
         </div>
    </div>
  )
}

export default Navbar
