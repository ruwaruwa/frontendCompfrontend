import { useState } from "react"
// import somLogoPNG from "../../assets/som blood bank logo.png"
import logo from '../../assets/logo/log.png'

import { Link, NavLink } from "react-router-dom"

function Headers() {

    const [isOpen, setIsOpen] = useState(false)

    const HandleIsOpen = () => {
        setIsOpen(true)
    }

    const HandleIsClose = () => {
        setIsOpen(false)
    }


    return <div className="sticky top-0 bg-gray-  bg-seconderyColor bLightColor bSecondColor [#bc4749] p-2">
        {/* big screen section */}

        <div style={{ border: isOpen === true ? "none" : "" }} className="sm:px-5 flex justify-between sm:items-center border-b- p-3 border-fourthColor shadow-sm max-w-[1640px] mx-auto">
            <div>
                <Link to="/" className='text-3xl text-white'><img className="sm:mt-0 mt- h-[60px]" src={logo}  /></Link>
            </div>
            <i onClick={HandleIsOpen} style={{ display: isOpen === true ? "none" : "" }} class="fa-solid text-4xl text-white seconderyColor flex sm:hidden absolute top-7 right-5 fa-bars"></i>
            <i onClick={HandleIsClose} style={{ display: isOpen === true ? "block" : "" }} class="fa-solid text-4xl text-white seconderyColor hidden absolute top-7 right-6 fa-xmark"></i>

            <div className="sm:flex hidden text-3xl space-x-10 font-semibold font-mono text-white">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={''} id="/about">About</NavLink>
                {/* <NavLink>Blog</NavLink> */}
            </div>


            <div className="sm:flex hidden">
                <Link to="/addcomplaints" className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">complaints</Link>
            </div>

        </div>

        {/* samll screen section */}

        <div style={{ display: isOpen === true ? "block" : "" }} className="hidden border-b-2 border-fourthColor shadow-sm">
            <ul className="sm:hidden text-3xl space-y-5 pl-4 font-semibold font-mono text-white">
                <li className="hover:bg-fourthColor">Home</li>
                <li className="hover:bg-fourthColor">About</li>
           
            </ul>


            <div className="sm:hidden pl-4 pt-5 pb-3">
                <Link to={'/addcomplaints'} className="bg-primeryColor px-6 py-2 rounded-lg text-textColor text-xl">Adcomplaints</Link>
            </div>
        </div>

    </div>
}


export default Headers