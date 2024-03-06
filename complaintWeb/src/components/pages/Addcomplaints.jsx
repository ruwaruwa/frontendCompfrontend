import React, { useEffect, useState } from 'react'
// import Header from './Header'
import p from '../../assets/images/qu2.png'
import axios from 'axios'
import Headers from './Header2'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Com.css'
export default function Addcomplaints() {
    const [name,setName]=useState('')
    const [email,setemail]=useState('')
    const [password,setpasword]=useState('')
    const [message,setmmessage]=useState('')
//////////////////
    const handlESave=(e)=>{
        e.preventDefault() 
        axios.post('http://localhost:3000/complaint/register',{
"name":name,
"email":email,
"password":password,
"message":message
        }).then((res)=>{
            console.log(res.data)
            toast.success('Success fully Added')
            //alert('success full posted')
            navigate('/')
        }).catch((error)=>{
            console.log(error)
        })
    }
    const navigate = useNavigate()
    //   document.body.style.backgroundColor ='#f98d6b'
      useEffect(()=>{
        document.body.style.backgroundColor ='# f7a072'
        document.body.style.opacity=""

      },[])
  return (
    <div>
        {/* <Header/> */}
        <Headers/>
        <div className='text-primeryColor '>
        {/* h-[100vh] bg-cover bg-gradient-to-b from-pink- 600 */}
            <div id='bg' className='items-center bg-cover flex justify-center  h-[100vh] bg- cover bg-gradient-to-b from-pink- 600 -300 text-black'>
                <div className='grid sm:grid- cols-2'>

              <div>
              {/* <div className='p-10'>
                    <img src={p} className='sm:w-[550px] sm:h-[400px] mr- [20%]'/>
                </div> */}

              </div>
                <div className='shadow-lg shadow-gray-600 sm:mt-0  sm:w-[400px] w-[300px] ml-10 sm:h-[380px] h-[390px] px-2 sm:p-2 sm:px-4 sm:ml- [40%] mt-4 bg-seconderyColor purple-400'>
                    <form>
                        <h1 className='text-center text-2xl font-bold text-white'>Complaint Form</h1>
                        <div>
                            <label className='text-ce ml-6 text-white text-'>Enter your Name</label><br></br>
                            <input value={name} onChange={(e)=>setName(e.target.value)}  type='text' placeholder='Enter your Name' className='outline-none px- 5 w-full p-2 px'/>
                        </div>
                        <div>
                            <label className='text-ce ml-6 text-white text-'>Enter your Email</label><br></br>
                            <input value={email} onChange={(e)=>setemail(e.target.value)}  type='text' placeholder='Enter your Email' className='outline-none px- 5 w-full p-2 px'/>
                        </div>
                        <div>
                            <label className='text-white text- ml-6'>Enter your Password</label><br></br>
                            <input value={password} onChange={(e)=>setpasword(e.target.value)}  type='password' className='outline-none px- 5 w-full p-2' placeholder='Enter your Password'/>
                        </div>
                        <div>
                            <label className='text-white text- ml-6'>Write your message</label><br></br>
                            <textarea value={message} onChange={(e)=>setmmessage(e.target.value)} type='text' className='outline-none px -6 w-full p-2' placeholder='Write your Message'/>
                        </div>
<div className='text-center'>
    <button onClick={handlESave} className='text-white px-4 p-2 bg-orange-400  mt-3 sm:mt-2 mr-2 rounded-md'>Save</button>
</div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
