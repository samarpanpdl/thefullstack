import React from 'react'

import Image from 'next/image'  
import Link from 'next/link'
const EmailSection = () => {
  return (
    <section className='gird md:grid-cols-2 my-12 md:my-12 py-24 gap-6 relative'>
        <div className='absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent  rounded-full h-80 w-80 z-0 blur-lg'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid deleniti in, perspiciatis odit debitis animi et consectetur dignissimos dolore doloremque, facilis amet saepe nihil maiores hic eaque veritatis excepturi labore expedita aspernatur libero quisquam. Commodi dolore at ex tempora exercitationem vel? Sit labore, doloremque commodi et unde illo voluptates asperiores sapiente magnam. Tempore.

            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href={"github.com/samarpanpdl/"}>
                    {/* <Image src={""} alt='Github Icon'/> */}
                    Github
                </Link> 
                <Link href={"linkedin.com/aashutosh-poudel/"}>
                    {/* <Image src={"#"} alt='linked Icon'/> */}
                    LinkedIn
                </Link>                
            </div>
        </div>
        <div>
            <form className='flex flex-col '>
                <div className='mb-6'>
                <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type='email' id='email' required placeholder='abc@gmail.com'/>
                </div>
                <div className='mb-6'>
                <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Your email</label>
                <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                    type='text' id='subject' required placeholder='Just saying hi'/>
                </div>
                <div className='mb-6'>
                    <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Your message</label>
                    <textarea className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' 
                        id='message' rows="4" required placeholder='Your message here...'></textarea>
                </div>
                <button
                    type='submit'
                    className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button>
            </form>

        </div>
    </section>
  )
}

export default EmailSection