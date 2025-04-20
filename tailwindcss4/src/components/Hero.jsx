import React from 'react'
import { Link } from 'react-router'
import { HiArrowRight } from 'react-icons/hi';

import video from '../assets/banner-video.mp4'
import bannerLeft from '../assets/banner-left.avif'
import bannerRight from '../assets/banner-right.png'

function Hero() {
  return (
    <div className='pt-24 bg-black text-white md:pt-35'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative'>
           
           
            {/* subtitle */}
            <div className='mb-6'>
                <span className='text-[#999999] uppercase tracking-[0.2em] text-sm font-medium'>
                    MORE THAN JUST A CRM
                </span>
            </div>


            {/*main heading*/}
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 md:mb-16 leading-[1.1] tracking-[-0.02em]'>
                Make every customer feel like <br className='md:block hidden'/>your only customer
            </h1>

            {/* paragraph and buttons */}

            <div className='flex sm:flex-row items-center justify-between flex-col gap-8 '>
               <p className='text-[#999999] md:w-3/5 md:text-xl mb-8 md:mb-0 leading-relaxed'>
               While transforming how your business connects with the world, Empowa CRM unites your team, prospects, customers, and stakeholders, <br className='md:block hidden'/>all in one seamless experience, elevating satisfaction into exponential growth.
               </p >
               <div className='flex sm:flex-row flex-wrap gap-8 shrink-0 '>
                    <Link to='/start-leading'  className='bg-yellow-700 hover:bg-cyan-900 text-white px-8 py-4 rounded transition-colors duration-200'>Start Leading</Link>
                    <Link to='/contact-us' className='flex items-center text-white group hover:text-white/40 px-8 py-4 rounded transition-colors duration-200'>
                        Contact Us <HiArrowRight className='ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200'/>
                     </Link>
               </div>
            </div>


            {/* video */}
            <div className='w-full h-full mt-16 relative'>
                <video src={video} autoPlay muted loop className='w-full h-full object-cover'/>
                <div className='absolute top-1/2 xl:-left-20 md:-left-0 z-20 xl:block hidden'>
                    <img src={bannerLeft} alt='' className='lg:h-48 md:h-32 h-24 w-full object-cover'/>
                </div>

                <div className='absolute top-1/2 xl:-right-20 md:-right-0 z-20 xl:block hidden'>
                    <img src={bannerRight} alt='' className='lg:h-70 md:h-50 h-30 w-full object-cover'/>
                </div>
            </div>

            {/* overlay */}
            <div className='absolute bottom-0 left-0 right-0 h-2/3 z-10 bg-gradient-to-t from-black to-transparent hidden md:block'>

            </div>
        </div>
    </div>
  )
}

export default Hero