import axios from "axios"
import { useEffect, useState } from "react"

function DashboardCards() {
 const [totalcomtaint,settotalcom]=useState([])
 const [userTotal,settotalUsers]=useState([])
 const handleGetcom=()=>{
    axios.get('http://localhost:3000/total').then((res)=>{
        console.log(res.data)
        settotalcom(res.data)
    }).catch((error)=>{
        console.log(error)
    })

 }
const getUsers=()=>{
    axios.get('http://localhost:3000/total/users').then((res)=>{
        settotalUsers(res.data)
        console.log(res.data)
    }).catch((error)=>{
        console.log(error)
    })
}
 useEffect(()=>{
    handleGetcom()
    getUsers()
 },[])
    return <div className="grid sm:grid-cols-3 sm:ml-[22%] ml-[50%]">
        <div className="bg-seconderyColor sm:w-60  w-40 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">Total Complaints</h1>
            <p className="text-4xl font-bold pl-6 pt-2">{totalcomtaint} 
            </p>
            <p className="text-sm pt-5 pl-3">30 joined us this week</p>
        </div>

        {/* second */}
        <div className="bg-seconderyColor sm:w-60 w-40 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">Total Users</h1>
            <p className="text-4xl font-bold pl-6 pt-2">{userTotal}<i class='fa-solid fa-chalkboard-user '> </i>
            </p>
            <p className="text-sm pt-5 pl-3">5 joined us this week</p>
        </div>

        {/* third */}
        <div className="bg-seconderyColor sm:w-60 w-40 h-36 rounded-lg shadow-2xl mt-10 text-textColor">
            <h1 className="text-md font-semibold pt-4 pl-3">All Messages</h1>
            <p className="text-4xl font-bold pl-6 pt-2">30 <i class="fa-solid pl-6 fa-envelope"></i></p>
            <p className="text-sm pt-5 pl-3">10 Messages Send this week</p>
        </div>

    </div>
}

export default DashboardCards