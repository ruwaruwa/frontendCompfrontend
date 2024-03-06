import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Headers from './Header2'
import { toast } from 'react-toastify'
import './Com.css'
export default function UpdateComplints() {
    const [name,setName]=useState("")
    const [email,setemail]=useState(" ")
    const [password,setpasword]=useState("")
    const [message,setmmessage]=useState("")

    //get one
const params=useParams()
const handleSingleData = () => {
    axios.get(`http://localhost:3000/complaint/getOne/${params.id}`).then((response)=> {
    setName(response.data.name)
    console.log(response.data[0].name)
      setName(response.data[0].name);
      setemail(response.data[0].email);
      setpasword(response.data[0].password);
      setmmessage(response.data[0].message);
    
    }).catch((error)=> console.log(error))
  };




    // const getSignleDaata=()=>{

    //     axios.get(`http:localhost:3000/complaint/getOne/${params.id}`).then((response)=>{
    //     setName(response.data.name);
    //         setemail(response.data.email);
    //         setpasword(response.data.password);
    //         setmmessage(response.data.message);
           
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }
    useEffect(()=>{
        // getSignleDaata()
        handleSingleData();
    },[])
    //update
    const navigate = useNavigate()
    const hadleUpdate =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/complaint/update/${params.id}`,{
   "name":name,
    "email":email,
     "password":password,
    "message":message
        }).then((response)=>{
            console.log(response.data)
         if(response){
            toast.success('success fully updated !!')
          //  alert('success ful updated')
            navigate('/addcomplaint')
         }
        //  else{
        //     console.log(error.message)
        //  }
        }).catch((error)=>console.log(error))
    }

    //delete
  

    return (
        <div>
            <Headers/>
            {/* <Header/> */}
            <div>
                <div className='fle'>
                    {/* <div className='p-10'>
                        <img src={p} className='w-[500px]'/>
                    </div> */}
                    <div id='bg' className='shadow-lg shadow-gray-600 sm:mt-10 sm:w-[300px] w-[300px] ml-10 sm:h-[390px] h-[200px] px-2 sm:p-2 sm:px-4 sm:ml-[40%] mt-4 bg-seconderyColor purple-400'>
                        <form>
                            <h1 className='text-center text-2xl font-bold text-white'>Complain Update</h1>
                            <div>
                                <label className='text-ce ml-6 text-white text-'>Enter your Name</label><br></br>
                                <input value={name} onChange={(ev)=>setName(ev.target.value)}  type='text' placeholder='Enter your Name' className='outline-none px-5 w-full p-2 px'/>
                            </div>
                            <div>
                                <label className='text-ce ml-6 text-white text-'>Enter your Email</label><br></br>
                                <input value={email} onChange={(ev)=> setemail(ev.target.value)}  type='text' placeholder='Enter your Email' className='outline-none px-5 w-full p-2 px'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Enter your Password</label><br></br>
                                <input value={password} onChange={(ev)=>setpasword (ev.target.value)}  type='password' className='outline-none px-5 w-full  p-2' placeholder='Enter your Password'/>
                            </div>
                            <div>
                                <label className='text-white text- ml-6'>Enter your message</label><br></br>
                                <textarea value={message} onChange={(ev)=> setmmessage(ev.target.value)} type='text' className='outline-none px-6 p-2 w-full' placeholder='Enter your message'/>
                            </div>
    <div className='text-center'>
        <button onClick={hadleUpdate} className='text-white px-4 p-2 bg-orange-400  mt-3 sm:mt-2 mr-2 rounded-md'>Save</button>
    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      )
}
