import { Link } from "react-router-dom"
// import somLogoPNG from "../../assets/som blood bank logo.png"
import log from '../../assets/logo/logbul.png'

function Footer() {
    return <div>

        <div className="sm:flex sm:justify-between grid grid-cols-1 text-center sm:px-40 mt-8 sm:mt-0 pb-5 bg-primeryColor slate-500">
            <div className="pl-5 sm:pl-0">
                <img className="sm:w-[200px] sm:ml-0 ml-10 w-[200px] mt-5" src={log} />
         
                <h1 className="text-white text-md">Online complaints is a web application <br></br>  that we intend <br />
                  to help our people when there is an urgent <br />
                    situation and need help, 
please register on the website
                    </h1>
                <div className="mt-10 sm:mb-0 mb-5 mr-12">
                    <Link to="/addcomplaints" className="bg-seconderyColor px-6 py-2 rounded-lg text-white text-xl">Register Here</Link>
                </div>
            </div>

            <div className="pt-20 pl-10 sm:pl-0">
                <h1 className="text-3xl font-semibold pb-5 text-seconderyColor">Explore</h1>
                <p className="text-white text-2xl pb-2 hover:text-seconderyColor cursor-pointer">Home</p>
                <p className="text-white text-2xl pb-2 hover:text-seconderyColor cursor-pointer">About</p>
                <p className="text-white text-2xl pb-2 hover:text-seconderyColor cursor-pointer">compliants</p>
            </div>

            <div className="pt-20 pl-10 sm:pl-0 ">
                <h1 className="text-3xl font-semibold pb-5 text-seconderyColor">Get in Touch</h1>
                <div className="text-center sm:ml-0 ml-[5%]">
               <div>
               <p className="text-white text-xl pb-2 flex"><div className="mt-3 bg-seconderyColor w-8 h-8 rounded-full ml-10"><i class="fa-solid text-fourthColor pl-2 fa-location-dot"></i></div> <span className="pl-3">maka-almukaram <br /> Mogadishu, Somalia.</span></p>
                <p className="text-white text-xl pb-2 flex"><div className="mt-3 bg-seconderyColor w-9 h-9 rounded-full ml-10"><i class="fa-solid text-fourthColor pl-2 pt-2 fa-headset"></i></div><span className="pl-3 pt-3">61xxxxxxx</span></p>
                <p className="text-white text-xl pb-2 flex"><div className="mt-3 bg-seconderyColor w-9 h-9 rounded-full ml-10"><i class="fa-regular text-fourthColor pl-2 pt-2 fa-envelope"></i></div><span className="pl-3 pt-3">info@complaints.so</span></p>
               </div>
                </div>
            </div>

        </div>

        <div>
            <hr className="sm:w-[80%] w-[23em] border-b-2 border-fourthColor mb-2 sm:ml-36 ml-8" />
            <h1 className="text-fourthColor text-center pb-2">Copyright <i class="fa-regular fa-copyright"></i> 2024 Ruwa. All Rights Reserved By</h1>
        </div>
    </div>
}

export default Footer