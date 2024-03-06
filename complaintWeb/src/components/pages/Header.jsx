// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'

// export default function Header() {
//     const [isPen,setISopen]=useState(false)
//     const handleOpen=()=>{
//         setISopen(true)
//     }
//     const handleClose=()=>{
//         setISopen(false)
//     }
//   return (
//     <div>
//         <div className='bg-purple-400 text-white p-2 top-0 border-b-2 border-b-white '>
            
//             <div  style={{ border: isPen === true ? "none" : "" }} className="sm:px-5 flex justify-between sm:items-center border-b-2 border-fourthColor shadow-sm max-w-[1640px] mx-auto">
//          <div>
//          <NavLink to={'/home'} className='cursor-pointer'>
           
//             <h1 className='sm:text-4xl text-2xl'>Online Complaints</h1>
//             </NavLink>
//          </div>
//          <i  onClick={handleOpen} class="fa-solid fa-bars text-4xl absolute right-4 sm:hidden block"></i>
//          <i onClick={handleClose} style={{ display: isPen === true ? "block" : "" }} class="fa-solid text-6xl text-seconderyColor hidden absolute top-7 right-6 fa-xmark"></i>

//                 <div>
//                 <div  className="sm:flex text-3xl sm:space-y-0 space-y-5 pl-4 font-semibold font-mono text-primeryColor">
//                     <NavLink to={'/home'} className='cursor-pointer'>
//                         Home
//                     </NavLink>
//                     <NavLink to={'/about'} className='cursor-pointer'>
//                         About
//                     </NavLink>
                  
//                   {/* <div>
//                   <NavLink  className='bg-orange-400 rounded p-1 px-2 border-2'>Logout</NavLink>
//                   </div> */}
//                 </div>
//                 <div>
//                    <Link to={'/addcomplaints'} className='bg-orange-400 p-1 rounded  border-2 hover:border-white'>
//                         Addcomplaints
//                     </Link>
//                    </div>
//                 </div>
//             </div>
// {/* 
//             <small></small> */}

// <div  >
       
       
//                 <div style={{ display: isPen === true ? "block" : "" }} className="hidden border-b-2 border-fourthColor shadow-sm">
//                     <NavLink to={'/home'} className='cursor-pointer'>
//                         Home
//                     </NavLink>
//                     <NavLink to={'/about'} className='cursor-pointer'>
//                         About
//                     </NavLink>
                  
//                   {/* <div>
//                   <NavLink  className='bg-orange-400 rounded p-1 px-2 border-2'>Logout</NavLink>
//                   </div> */}
//                 </div>
//                 <div>
//                    <Link to={'/addcomplaints'} className='bg-orange-400 p-1 rounded  border-2 hover:border-white'>
//                         Addcomplaints
//                     </Link>
//                    </div>
//             </div>
//         </div>
//     </div>
//   )
// }






//////////////////////form footer
<div className='rounded-sm sm:w-[350px] sm:h-[] shadow-white primeryColor -500 bg-seconderyColor bg- white p-4 shadow-lg'>
<div>
    <form className='text-center p-2'>
   <div className='p-2'>
    <label className='mr- [80%] text-xl text-white'>your name</label><br></br>
    <input type='text' placeholder='enter your name' className='w- px-10 full p-4 outline-none'/>
   </div>
   <div>
    <label className='mr -[80%] text-2xl text-white'>your email</label><br></br>
    <input type='text' placeholder='enter your name' className='w- [10%] px-10 p-4 outline-none'/>
   </div>
   <div>
    <label className='mr -[80%] text-2xl text-white'>your password</label><br></br>
    <input type='password' placeholder='enter your password' className='w- [10%] px-10 p-4 outline-none'/>
   </div>
   <button className='bg-primeryColor text-white pt-4 px-4 mt-4'>submit</button>
    </form>
</div>
                    </div>