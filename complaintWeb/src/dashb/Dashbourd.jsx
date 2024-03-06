import React, { useEffect } from 'react'
import DashboardCards from './DashboardCards'
import SideNav from './SideNav'
import { useNavigate } from 'react-router-dom'
import SystemHeader from './webpages/SystemHeader'


export default function Dashbourd() {
  const isAuth=localStorage.getItem('user')
  const navigate=useNavigate()
  const handleAuth=()=>{
    if(!isAuth){
      navigate('/login')
    }
  }
  useEffect(()=>{
    handleAuth()
  })
  return (
    <div>
<SideNav/>
<SystemHeader/>
 <DashboardCards/>
    </div>
  )
}
