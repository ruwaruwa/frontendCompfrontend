import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Authentication/Login'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Addcomplaints from './components/pages/Addcomplaints'
import Head from './components/pages/Head'
import Dashbourd from './dashb/Dashbourd'
import Complaints from './dashb/webpages/Complaints'
import Users from './dashb/webpages/Users'
import Web from './dashb/webpages/Web'
import Headers from './components/pages/Header2'
import UpdateComplints from './components/pages/UpdateComplints'
import Form from './dashb/webpages/Form'
import LogOut from './components/Authentication/LogOut'
import LoginPgae from './components/Authentication/Loginpage'
import UserTwo from './dashb/webpages/UserTwo'
import Register from './components/Authentication/regisfolder/Register'
import Rigisterpagelod from './components/Authentication/regisfolder/Rigisterpagelod'
import UserUpdate from './dashb/webpages/Userupdate'



function App() {
  const [count, setCount] = useState(0)
const authe= localStorage.getItem("user")
const navigate =useNavigate()

  return (
    <>

<div>
  {/* {authe ? */}
    {/* <Routes> */}
    
       

     {/* </Routes> */}
     

     <Routes>
      
     <Route path='/dashbourd' element={<Dashbourd/>}/>

<Route path='addcomplaint' element={<Complaints/>}/>

<Route path='/use' element={<UserTwo/>}/>
<Route path='addcomplaints' element={<Addcomplaints/>}/>
        <Route path='update/:id' element={<UpdateComplints/>}/>
        <Route path='/userupdate/:id' element={<UserUpdate/>}/>
     <Route path='login' element={ <LoginPgae/>}/>

<Route path='/logout' element={<LogOut/>}/>
{/* <Route path='/page' element={<LoginPge/>}/> */}
     <Route path='Users' element={<Users/>}/>

<Route path='/createAcount' element={<Rigisterpagelod/>}/>
     <Route path='/' element={<Web/>}/>
       

     
       <Route path='hed' element={<Headers/>}/>
       {/* <Route path='f' element={<Form/>}/> */}

       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
     </Routes>
{/* } */}
    </div>
     <div>
   
 

     {/* <-web routes-> start*/}
      {/* <Routes> */}
   
        {/* <Route path='/' element={<Web/>}/>
       

     
        <Route path='hed' element={<Headers/>}/>
     

        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> */}
        {/* <Route path='/addcomplaint' element={<Addcomplaints/>}/> */}
      {/* </Routes> */}
     </div>
    </>
  )
}

export default App
