import React, { useEffect, useState } from 'react'
import SideNav from '../SideNav'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import SystemHeader from './SystemHeader'

export default function Complaints() {
    const [name,setName]=useState('')
    const [email,setemail]=useState('')
    const [password,setpasword]=useState('')
    const [message,setmmessage]=useState('')
    const [cData,setComplaints]=useState([])
    const [page,setpage]=useState(0)
//     const handlESave=(e)=>{
//         e.preventDefualt()
//         axios.post('http://localhost:3000/complaint/register',{
// "name":name,
// "email":email,
// "password":password,
// "message":message
//         }).then(()=>{
//             alert('success full posted')

//         }).catch((error)=>{
//             console.log(error)
//         })
//     }

//red data
const handleGet= ()=>{
axios.get(`http://localhost:3000/complaint/get?page=${page}`).then((response)=>{
    console.log(response.data)
    setComplaints(response.data)

})
}
//next
const handlENext=()=>{
    setpage(page +1)
}
//prev
const handlePreviw=()=>{
    if(page > 0 ){
     setpage(page -1)
    }
}


const handleDelete =(id)=>{
    axios.delete(`http://localhost:3000/complaint/deletes/${id}`).then((response)=>{
        console.log(response.data)
       // alert('succes fuly deleted')
       toast.success('success full Deleted !')
        handleGet()
    }).catch((error)=>{
        console.log(error)
    })
}
//Search
//
// const [gtCOMPLAInt,setgetComplaints]=useState([])
const handleserach=(id)=>{
   

    const key = id.target.value ;
    if(key){
      axios.get(`http://localhost:3000/complaint/search/${key}`).then((response)=>{
        setComplaints(response.data)
  console.log(response.data.name)
   
      }).catch((error)=>{
        console.log(error)
      })
    }
    else 
    handleGet()
    }

  useEffect(()=>{
    handleGet()
},[page])
//GAPE

//axios.get(`http://localhost:3000/complaint/get?page`)

  return (
    <div>
        <SideNav className='top- mb-0'/>
        <SystemHeader/>
        <div className='pt-4'>
        <div className="bg-fourthColor pb-4 mb-3 w-[75%] h-[70%] ml-[22%] pt-10 rounded-2xl shadow-2xl">
            <div className="flex justify-between px-2 pb-3">
                <h1 className="text-3xl text-textColor font-semibold pt-4">Complaints</h1>
                <input onChange={handleserach} type="text" className="outline-none mt-5 w-40 h-7 border-2 border-fourthColor rounded-lg p-2" placeholder="Search" />
            </div>
            <hr className="border-b border-thirdColor" />
            <table className="table-auto w-full mt-4">
                <thead className="border-b border-thirdColor">
                    <tr className="text-textColor text-center  font-medium">
                        <th className="py-2">FullName</th>
                        {/* <th className="py-2">Address</th> 
                        <th className="py-2">Email</th>
                        {/* <th className="py-2">Phone</th> */}
                        <th className="py-2">Password</th>
                        <th className="py-2">Message</th>
                      
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>

                {
                    cData.length > 0 ? cData.map((data) => {
                        return <tbody className="border-b border-thirdColor">
                            <tr className="text-textColor text-center">
                                <td className="py-4">{data.name}</td>
                                <td className="py-4">{data.email}</td>
                                <td className="py-4">{data.password}</td>
                                <td className="py-4">{data.message}</td>
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
            <button onClick={handlePreviw} className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-8 ml- [30%] right-32">prev</button>
            <button onClick={handlENext}  className="bg-primeryColor px-6 py-1 rounded-2xl text-textColor text-lg absolute bottom-8 ml- [40%] right-8">next</button>
        </div>
        </div>
    </div>
  )
}
