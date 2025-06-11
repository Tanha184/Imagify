import React from 'react'

const Rough = () => {
  return (
    <div>
        <div className='relative group: '>
            <img src={assets.profile_icon} alt="" className='w-10 drop-shadow ' />
            <div className='absolute hidden group-hover:block top-0 right-0 z-0 text-black rounded pt-12'>
                <ul>
                <li>Logout</li>
                </ul>
            </div>
            <img className=' rounded hover:scale-x-105 transition-all duration-300 cursor-pointer max-sm:w-10 ...flex flex-col items-center justify-center ' src={assets.sample_img_1} alt='' key={index} width={70} />
            <div className=' flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer  rounded-lg steps-container' key={index}>
                <img width={40} src={item.icon} alt="" />
                <div>
                  <h2 > {item.title} </h2>
                  <p > {item.description} </p>
                </div>
            </div>
    </div>

    </div>
  )
}

export default Rough
