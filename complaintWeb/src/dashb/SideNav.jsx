import { NavLink, useNavigate } from "react-router-dom"
// import somLogoPNG from "../../assets/som blood bank logo.png"
import logIcon from "../assets/logo/logbul.png"
import { useState } from "react"


function SideNav() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }
    const navigate=useNavigate()
const handleLOGOUT=()=>{
    localStorage.removeItem("user")
    navigate('/login')
}

    return <div className="sm:w-[18%] h-screen fixed border-r-4 border-gray-100 shadow-lg bg- primeryColor border-3 border-bg-pr">
        <img className="w-[100px] ml-14 pt-2" src={logIcon} />

        <div className="text-2xl flex flex-col space-y-10 pl-10 pt-16 text-primeryColor seconderyColor">

            <NavLink to="/dashbourd"> <i class="fa-brands fa-microsoft"></i> Dashboard</NavLink>


            <NavLink to="/addcomplaint"> <i class="fa-solid fa-hand-holding-droplet"></i> Complaints</NavLink>


            <NavLink to="/Users"> <i class="fa-regular fa-user"></i> Users</NavLink>
            {/* <NavLink to="/Users"> <i class="fa-regular fa-user"></i> Add users</NavLink> */}

            <NavLink to="/login" onClick={handleLOGOUT}> <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</NavLink>
            {/* <div> <i class="fa-solid fa-hospital"></i> Hospitals
                <i onClick={handleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-sm pl-7 absolute top-[25em] pt-4 fa-chevron-down"></i>
                <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-sm pl-40 hidden absolute top-[25em] pt-4 fa-chevron-up"></i>
                <div style={{display: isOpen === true ? "block" : ""}} className="text-sm pl-5 pt-4 hidden">
                    <div><i class="fa-regular fa-circle"></i> requesting hospital</div>
                    <div className="pt-2"><i class="fa-regular fa-circle"></i> List of hospital</div>
                </div>
            </div> */}

        </div>
        <div className="absolute bottom-0">
            <hr className="border-b w-56 border-primeryColor mt-[5em]" />
            {/* <img className="w-20 ml-16" src={logIcon} /> */}
        </div>



    </div >
}

export default SideNav