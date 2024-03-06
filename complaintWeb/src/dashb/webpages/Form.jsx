
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
export default function Form() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_46unuxv', 'template_slg0tgl', form.current, 'xvYuGiqqJHFUMZkN2')
        .then((result) => {
toast.success('waxan kugu soo jawabi donaa sida ugu dhaqsiga badan')
            console.log(result.text);
        }, (error) => {
            toast.error('sorry magudbin fariintadu')
             console.log(error.text);
        });
    };
  return (



    
    <div>




        <div className='mr-10 sm:ml-20 [50%] px-4 sm:mt-3 mt- 20 sm:mr- 10 rounded-sm sm:w-[350px] w-[350px] sm:h-[] shadow-black primeryColor -500 bg-seconderyColor bg- white p-4 shadow-lg'>
<div className='p-4 px-4 mb-'>
<form ref={form} onSubmit={sendEmail}>
  <p className='text-white txt-2xl'>Let me Comment here</p>
      <label className='text-white text-xl'>Name</label><br></br>
      <input type="text" name="user_name"  className='w-full p-3'/><br></br>
      <label  className='text-white text-xl'>Email</label><br></br>
      <input type="email" name="user_email"  className='w-full p-3'/><br></br>
      <label  className='text-white text-xl'>Message</label><br></br>
      <textarea name="message"  className='w-full p-4'/><br></br>
    <div className='text-center mt-2'>
    <input type="submit" value="Send" className='bg-primeryColor text-white rounded p-2 text-center text-3xl px-4'/>
    </div>
    </form>
</div>
                    </div>
                    
    </div>
  )
}
