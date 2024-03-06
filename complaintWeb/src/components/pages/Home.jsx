import React, { useEffect } from 'react'
// import Header from './Header'
import p1 from '../../assets/images/g3.png'
import p2 from '../../assets/images/man.png'
import p3 from '../../assets/images/man2.png'
import p4 from '../../assets/images/nin.png'
import p5 from '../../assets/images/en2.jpg'
import p6 from '../../assets/images/eng.jpg'
import p7 from '../../assets/images/m (4).jpg'
import { Line, Circle } from 'rc-progress';
import Head from './Head'
import Form from '../../dashb/webpages/Form'
export default function Home() {
    useEffect(()=>{
        document.body.style.backgroundColor =''
    },[])
  return (
    <div>
             {/* <Head/> */}
 
    <div>
        {/* <Header/> */}
   
      <div>

     
        {/* <-satrt--> */}
        <div className='t mt-4  '>
{/* <div className='grid sm:grid-cols-4 p-4 px-4 gap-5 pt-4 '>
<div className='shadow-xl shad p-2 shadow-slate-500 sm:w-[300px] sm:h-[280px]'>
<div className='rounded-full w-[px] h-[] bg-slate- px-4 te ml-[30%]'>
    <img src={p2} className='rounded-full w-[50px] h-[50px] bg-gray-400'/>
</div>
<div>
    <h1 className='text-2xl font-bold px- 0 mr-[5%]'>Eng mohamed ibrahim</h1>
    <span className='text-orange-400 mr-[5%]'>CCN</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>
         Quaerat corporis debitis veniam voluptate numquam, br<br></br>
        
        mollitia. Id odio pariatur quos non?</p>
        <button className='text-white bg-orange-500 p-2 rounded mt-1'>Asky any question</button>
</div>
</div>
<div className='shadow-xl shad p-2 shadow-slate-500 sm:w-[300px] sm:h-[280px]'>
<div className='rounded-full w-[px] h-[] bg-slate- px-4 te ml-[30%]'>
    <img src={p3} className='rounded-full w-[50px] h-[50px] bg-gray-400'/>
</div>
<div>
    <h1 className='text-2xl font-bold px- 0 mr-[5%]'>Eng Ali garaad</h1>
    <span className='text-orange-400 mr-[5%]'> software engineer</span>
    <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>
         Quaerat corporis debitis veniam voluptate numquam, br<br></br>
        
        mollitia. Id odio pariatur quos non?</p>
        <button className='text-white bg-orange-500 p-2 rounded mt-1'>Asky any question</button>
</div>
</div>
<div className='shadow-xl shad p-2 shadow-slate-500 sm:w-[300px] sm:h-[280px]'>
<div className='rounded-full w-[px] h-[] bg-slate- px-4 te ml-[30%]'>
    <img src={p4} className='rounded-full w-[50px] h-[50px] bg-gray-400'/>
</div>
<div>
    <h1 className='text-2xl font-bold px- 0 mr-[5%]'>Eng Ramla mohamed</h1>
    <span className='text-orange-400 mr-[5%]'> software developer</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>
         Quaerat corporis debitis veniam voluptate numquam, br<br></br>
        
        mollitia. Id odio pariatur quos non?</p>
        <button className='text-white bg-orange-500 p-2 rounded mt-1'>Asky any question</button>
</div>
</div>
<div className='shadow-xl shad p-2 shadow-slate-500 sm:w-[300px] sm:h-[280px]'>
<div className='rounded-full w-[px] h-[] bg-slate- px-4 te ml-[30%]'>
    <img src={p4} className='rounded-full w-[50px] h-[50px] bg-gray-400'/>
</div>
<div>
    <h1 className='text-2xl font-bold px- 0 mr-[5%]'>Eng Ramla mohamed</h1>
    <span className='text-orange-400 mr-[5%]'> software developer</span>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>
         Quaerat corporis debitis veniam voluptate numquam, br<br></br>
        
        mollitia. Id odio pariatur quos non?</p>
        <button className='text-white bg-orange-500 p-2 rounded mt-1'>Asky any question</button>
</div>
</div>
</div> */}
        </div>
        {/* .end.> */}
        <div className='border-t-2  sm:mt-20 mt-24 p- bg-slate- items-center text-center px-2 p-2'>
            <h1 className='text-4xl font-bold text-blue-600 p-4'>Our <span className='font-light text-3xl text-primeryColor'>Service</span> </h1>
            <div className='w-[20%] ml-[40%]'>  <Line percent={100} strokeWidth={1} strokeColor="#F75B0C" />
     </div>
       {/* <div className='flex justify-around'>
       <div className='w-[20%]'>

      <Line percent={40} strokeWidth={1} strokeColor="#F75B0C" transition='500'/>
  
        </div>
        <div className='w-[20%]'>
   
      <Line percent={40} strokeWidth={1} strokeColor="#F75B0C" />
  
        </div>
       </div> */}
<div className='pt-2'>
    <div className='grid sm:grid-cols-3 px-2 py-2'>
        <div className='sm:w-[400px] h-[450px] shadow-slate-500 bg-white px- shadow-md sm:ml-20'>
<div className='text-gray-500'>
<span className='text-3xl text-orange-500 font-bold p-4'>Welcome To <span className='text-2xl  text-blue-500'><br></br> Internet Services</span> </span>
        <p className='p-3 sm:mt-10 '>I am writing to express my dissatisfaction 
        with the internet service 
        provided by  Over the past few weeks, 
             I have encountered numerous issues.<br></br>
             <span>
conclusion, I urge [Internet Service Provider] to address these issues
              promptly and take proactive measures to improve the quality of their
               internet service. As a paying customer, I expect a reliable
        <br></br>
              to seek alternative internet providers.
              to seek alternative internet providers.
             </span>
             </p>
             <button className='text-2xl bg-orange-500 p-2 rounded mt-4 text-white'>read More</button>
</div>
        </div>

        <div className='sm:w-[360px] h-[450px] p- shadow-slate-500 bg-white px- shadow-md sm:ml-24'>
<div>
<span className='text-2xl'>
    <img src={p6} className='w-full [230px] h-[220px] rounded-md'/>
</span>
<div>
    <p className='text-orange-400 font-bold text-2xl pt-2'>We are help you To</p>
    <span className='p-4'>Additionally, there have been 
        frequent outages, disrupting my work
         and causing undue stress.
          These outages occur without warning and <br></br>
          often last for extended periods,These outages occur without 
          disrupting my work</span>
</div>
<div>
    
<button className='mt- text-xl bg-orange-500 text-white hover:border-blue-500 hover:border-2 p-2 rounded mt-4'>read More</button>
</div>
</div>
        </div>

                
 <div className='sm:w-[360px] h-[450px] shadow-slate-500 bg-white px- shadow-lg sm:ml-20 px-'>
<div>
<div className='text-2xl'>
    <img src={p5} className='w-full [200px] h-[200px] rounded-md'/>
</div>
<div>
<p className='text-orange-400 font-bold text-2xl pt-2'>We are help you</p>
    <span className='p-3 px-3 mt-3 p'>To Additionally, there have been 
        frequent outages, disrupting my work
         and causing undue stress.
          These outages occur without warning and <br></br>
          often last for extended periods,These outages occur without 
          disrupting my work</span>
</div>
<div>
    
<button className='mt- text-xl bg-orange-500 text-white hover:border-blue-500 hover:border-2 p-2 rounded mt-5'>read More</button>
</div>
</div>
        </div>
    </div>
</div>
        </div>
        <div className='text-center px-3 py-1 p-4 border-2 pb-20 mt-10'>
       <div id='/about' className='text-center'>
       <h1 className='text-4xl font-bold p-2 text-seconderyColor'>About <span className='text- gray-400 font-light text-primeryColor'>Us</span></h1>
     <div className='w-[20%] ml-[40%]'>  <Line percent={100} strokeWidth={1} strokeColor="#F75B0C" />
     </div>
     
       </div>
            <div className='grid sm:grid-cols-3 gap-20 pt-6 px-[] '>

                {/* <div className=' sm:grid- cols-4 px-2 sm:pt-6 fle x justify- between'> */}
               
 <div className='sm:w- [0%] w -full '>
 
 <Form/>
 </div>
        <div className='w-[90%] sm:w-[450px]  border-4 mt-2 sm:mr-[20%] mr- [32px] '>

            <img src={p7} className='h-[405px] w- [0%] rounded-lg mr-[20%]'/>
        </div>
                {/* </div> */}

              <div className='m sm: mr-0'>
              <div className='px-4 w-[370px] sm:h-[415px] sm:w-[400px] border-4 sm:ml-  '>
                    <h1 className='text-4xl font-bold text-primeryColor mt-12'> About <span className='text- gray-400 font-extralight text-seconderyColor'><br></br>Online complainment</span></h1>
               <div className='mt-10 p-2'>
               Online complaint websites serve as valuable platforms for consumers to voice their concerns
                and grievances about products, services, or companies. These platforms provide users with a convenient and accessible way to communicate their feedback,
                complaints, or dissatisfaction. 
               </div>
                </div>
              </div>
              
            </div>
           
        </div>
         {/* .... */}
         <div className='text-center px-4 p-2 border-4 '>
            <div>
                {/* <div className='text g flex jus'>
                    
                    <div className=''>
                        
                         <h1>you ask quasion please f you have question<br></br>
                         please kindly send us your feedback in the lower section.
                          Thank you
                        </h1>
                       
                        <div className='border-4 bg-blue-600'>
                        <div className='w-[300px] border- p-2 px- bg-gray-'>
                            <form>
<div className=''>
    <label>Enter your email</label><br></br>
    <input type='text' placeholder='enter your email' className='w-ful outline-none'/>
</div>
<div className=''>
    <label>Enter your name</label><br></br>
    <input type='text' placeholder='enter your name' className='w-ful outline-none'/>
</div>
<div className=''>
    <label>Enter your email</label><br></br>
    <textarea type='text' placeholder='enter your email' className='w-ful p-4 outline-none'/>
</div>
<button className='text-white bg-orange-600 rounded p-2 mt-2'>Submit</button>
                            </form>
                        </div>
                        </div>

                    </div>
                    <div className='w-[400px] border-4'>
                        <img src={p7} className=''/>
                        <span className='text-gray-400'>where improvements are needed to enhance user experience and efficiency. Firstly, 
                            <br></br>the interface of the
complaint submission portal is not intuitive. Navigating through the system to lodge
 a complaint is unnecessarily complicated</span>
                    </div>
                </div> */}
            </div>

         </div>
      </div>
     
    </div>
    </div>
  )
}
