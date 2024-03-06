import { Link } from "react-router-dom";
import showCaseImage from "../../assets/images/team.jpg"
import { TypeAnimation } from 'react-type-animation';

function Dhexda() {

    return <div className="max-w[1400px] h-[480px] w-full sm:flex justify-center gap-20 m-auto py-5 px-4 mt-5">
       <div>

     
        <div className="sm:mt-20 max-w-[500px] m-auto">
            <p className="sm:text-3xl text-xl text-seconderyColor blue-700">
            <span className="font-bold text-3xl  fotn"><span className="text-5xl">I WISH TO PROVIDE</span> constructive feedback on</span>
        <br />
             the existing online complaint management system.
            
               <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        ' that our customers',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        ' complaints to',
                        1000,
                        ' and solve their problems.',
                        1000
                    ]}
                    wrapper="span"
                    speed={70}
                    style={{ fontSize: '32px', display: 'inline-block' }}
                    repeat={Infinity}
                /> </p>
         
        </div>
        <div>
          <div className="mt-10 sm:mb-0 mb-5">
                <Link to="/addcomplaints" className="bg-primeryColor px-6 py-4 rounded-lg text-textColor text-xl">Click here 
                {/* <i class="fa-solid pl-3 fa-arrow-right"></i> */}
                <i class="fa-regular fa-circle-dot mx-2"></i>
                </Link>
            </div>
          </div>
        </div>
        <div className="sm:mt-0 mt-5">
            <img className="w-[45em] rounded-lg" src={showCaseImage} />
        </div>

    </div>
}

export default Dhexda