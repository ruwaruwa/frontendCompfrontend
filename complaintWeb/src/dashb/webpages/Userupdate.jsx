import React, { useEffect, useState } from 'react'
import Headers from '../../components/pages/Header2'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function UserUpdate() {
const [username,setusername]=useState('')
const [password,setpassword]=useState('')
const [getData,setGetdata]=useState([])
  const params=useParams()
const handleSingleData = () => {
    axios.get(`http://localhost:3000/admin/${params.id}`).then((response)=> {
    // setName(response.data.username)
      setusername(response.data[0].username);
      setpassword(response.data[0].password);
    
    
    }).catch((error)=> console.log(error))
  };
  const hadleget=()=>{

  }
  useEffect(()=>{
    handleSingleData()
  },[])
  //hadle update
  const navigate=useNavigate()
  const hadnleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3000/admin/update/${params.id}`,{
      "username":username,
      "password":password
    }).then((response)=>{
    console.log(  response.data)
      toast.success("the user successfully updated !!")
      navigate('/Users')
    }).catch((err)=>{
      toast.error("sorr canot updated",err)
    })
  }
  return (
    <div>
<Headers/>
<section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div class="shadow-black shadow-lg w-full text-center bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-2 sm:p-8">
              <h1 class="text-xl  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                UserUpdate
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={username}   onChange={(e)=>setusername(e.target.value)} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                   
                      <input  value={password} onChange={(e)=>setpassword(e.target.value)}  type="password" name='password' id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button onClick={hadnleUpdate} type="submit" class="w-full bg-primeryColor text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
