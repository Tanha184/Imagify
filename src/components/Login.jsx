import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import '../index.css'
import { AppContext } from '../Context/AppContext';
import { motion } from 'motion/react';

const Login = () => {
const [state, setState] = useState('Login');
      const {setShowLogin} = useContext(AppContext);
     useEffect((  )=>{
      document.body.style.overflow = 'hidden';
      return ()=>
      {
          document.body.style.overflow = 'unset';
      }
     },[])


  return (
    <div className=' overlay '>
      
      <motion.form
        initial={{ opacity: 0.2, y: 50}}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
            
      className=' relative bg-white p-10 rounded-xl text-slate-500  ' >
        <h1 className=' text-center text-2xl text-neutral-700 font-medium  '>
            {state}
        </h1>
        <p className=' text-sm '>
            Welcome back! Please sign in to continue
        </p>
        {state !== 'Login' &&
          <div className=' border px-6 py-2 flex items-center gap-2 rounded-full mt-5 h-14 '>
            <img src={assets.profile_icon}  width={30} alt="" />
            <input type="text" placeholder='Full Name' required className='  outline-none text-sm ' />
        </div>
        }

        <div className=' border px-6 py-2 flex items-center gap-4 rounded-full mt-4 h-14'>
            <img src={assets.email_icon} alt="" />
            <input type="email" placeholder='Email Id' required className='  outline-none text-sm ' />
        </div>

        <div className=' border px-6 py-2 flex items-center gap-4 rounded-full mt-4 h-14 '>
            <img src={assets.lock_icon}  alt="" />
            <input type="password" placeholder='Password' required className='  outline-none text-sm ' />
        </div>
        <p className=' text-sm text-blue-600 my-4 cursor-pointer '>
            Forget password? 
        </p>

        <button className=' bg-blue-600 w-full text-white py-2 rounded-full '>
            {
              state === 'Login' ? 'Login' : 'Create account'
            }
        </button>

        { state === 'Login' ?
          
          <p className=' mt-5 text-center '>Don't have an account? <span className=' text-blue-600 cursor-pointer ' onClick={()=>setState('Sign Up')}  >Sign up</span> </p>
            :
        <p className=' mt-5 text-center '>Already have an account? <span className=' text-blue-600 cursor-pointer ' onClick={()=>setState('Login')}  >Login up</span> </p>
        
        }
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className=' absolute top-5 right-5 cursor-pointer ' />
      </motion.form>
    </div>
  )
}

export default Login
