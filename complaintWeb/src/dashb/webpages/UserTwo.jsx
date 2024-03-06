import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SystemHeader from './SystemHeader'
import SideNav from '../SideNav'
import axios from 'axios'

export default function UserTwo() {
  const [getusers,setgtUsers]=useState([])

  const handleGEttusers=()=>{
      axios.get('http://localhost:3000/admin/register/get').then((response)=>{
setgtUsers(response.data)
console.log(response.data)
      })
  }
  //use
  useEffect(()=>{
handleGEttusers()
  },[])

  const handleserach=(id)=>{
      const key =id.target.value;
      if(key){
        axios.get(`http://localhost:3000/user/search/${key}`).then((response)=>{
          setgtUsers(response.data)
    console.log(response.data.username)
     
        }).catch((error)=>{
          console.log(error)
        })
      }
      else 
      handleGEttusers();
      }
  return (
    <div>


<SideNav className='top- mb-0'/>
        <SystemHeader/>
        <div className='pt-4'>
        <div className="bg-fourthColor pb-4 mb-3 w-[50%] h-[70%] ml-[30%] pt-10 rounded-2xl shadow-2xl">
            <div className="flex justify-between px-2 pb-3">
                <h1 className="text-3xl text-textColor font-semibold pt-4">Complaints</h1>
                <input onChange={handleserach} type="text" className="outline-none mt-5 w-40 h-7 border-2 border-fourthColor rounded-lg p-2" placeholder="Search" />
            </div>
            <hr className="border-b border-thirdColor" />
            <table className="table- auto w-[600px] full mt-4">
                <thead className="border-b border-thirdColor">
                    <tr className="text-textColor text-center  font-medium">
                        <th className="py-2">email</th>
                        {/* <th className="py-2">Address</th> 
                        <th className="py-2">Email</th>
                        {/* <th className="py-2">Phone</th> */}
                        <th className="py-2">Password</th>
                        {/* <th className="py-2">Message</th> */}
                      
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>

                {
                    getusers.length > 0 ? getusers.map((data) => {
                        return <tbody className="border-b border-thirdColor">
                            <tr className="text-textColor text-center">
                            <td className="py-4">{data.username}</td>
                                <td className="py-4">{data.password}</td>
 <td>
 <Link to={`/update/${data._id}`}>
   <i class="fa-solid fa-pen-to-square text-primeryColor text-2xl"></i>
   </Link>
 </td>
    <td  className="py-4"> <i onClick={()=>handleDelete(data._id)} class="fa-solid fa-trash  text-red-500 text-2xl"></i>  </td>
                            </tr>
                        </tbody>
                    })
                    :
                    <p className="text-textColor mt-[%]">There is no data yet</p>
                }
                
            </table>
            {/* <button onClick={handlePreviw} className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-8 ml- [30%] right-32">prev</button>
            <button onClick={handlENext}  className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-8 ml- [40%] right-8">next</button> */}
        </div>
        </div>
    </div>
  )
}
