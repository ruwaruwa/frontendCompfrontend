import React, { useState } from 'react'
import '../lpge.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Register() {
  const [username,setusername] =useState('')
  const [password,setpassword] = useState('')

const navigate =useNavigate()
  const handleLogin= (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/admin/register',{
      "username":username,
      "password":password
    }).then((response)=>{
     console.log(response.data)
   toast.success('Success fully created')
   navigate('/login')
    }).catch((error)=>{
      toast.error("the user canot created",error)
    })
  }
  return (
    <div>
     
     <div className='items-center flex justify-center  h-[100vh] bg-cover bg-gradient-to-b from-pink- 600 w-full bg--700 '  >
        <div className='text- w-[320px] bg- h-[320px] rounded-lg shadow-lg shadow-gray-400 border-2'>
            <form className='p-4 px-4'>
              <h1 className='text-white text-center text-2xl font-bold'>Create your account</h1>
               <div>
                <label className='ml-2 text-white text-xl'>Enter your Email</label><br></br>
               <input value={username}onChange={(e)=>setusername(e.target.value)} type='text' placeholder='Enter your Email' className='p-2 px-12 w- full border-2 outline-none'/>
               </div>
               <div>
                <label className='text-white text-xl'>Enter your Password</label><br></br>
               <input value={password}  onChange={(e)=>setpassword(e.target.value)}  type='password' placeholder='Enter your Password' className='p-2 px-12 8 w -full border-2 outline-none' />
               </div>
              <div className='text-center'>
              <button onClick={handleLogin} className=' text-xl text-white bg-orange-500
               p-2 px- 4 mt-5 rounded px-10 w- full'>create</button>
              </div>
              <div className='mt-3'>
              <p className='text-xl font-bold text-white'>not a member ?<Link to={'/login'}>
              <span className='text-blue-500 text-2xl'> login</span>
              </Link>
              </p>
              </div>
            </form>
        </div>
    </div>
    </div>
  )
}
