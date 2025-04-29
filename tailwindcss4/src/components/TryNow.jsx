import React from 'react'
import { Link } from 'react-router'
import { HiArrowRight } from 'react-icons/hi2'

const TryNow = () => {
  return (
    <div className='bg-black text-white py-20'>
        <div className='primary-container first = useContext(second)'>
            <div className='flex flex-col md:flex-row justify-between gap-16'>
                <div className='md:w-3/5'>
                    <div>
                        <h2 className='text-4xl md:text-7xl font-bold mb-8 '>Try it for <br/> free</h2>
                        <p className='text-xl mb-8 md:max-w-lg'>Experience Empowa CRM with our free Starter plan—no time limits. Upgrade to Premium for advanced customer management and access to our powerful AI toolkit.</p>
                        <Link to='/getStarted' className='inline-flex items-center bg-yellow-700 rounded text-white hover:bg-cyan-900 px-8 py-4 mt-8 transition-colors duration-500 ease-in-out transform hover:scale-110'>Get Started - it's free</Link>
                    </div>
                </div>
                <div className='md:w-2/5 space-y-12'>
                    <div>
                        <h3 className='text-lg md:text-xl leading-relaxed font-medium mb-4'>
                        Experience Empowa CRM with our free Starter plan—no time limits. Upgrade to Premium for advanced customer management and access to our powerful AI toolkit.
                        </h3>
                    </div>

                    <div space-y-2>
                        <h2 className='text-xl font-bold'>Contact Sales</h2>
                        <p>
                            Interested in Empowa CRM Enterprise? Get in touch with our sales team to receive a free personalised demo
                        </p>
                        <Link to='/' className='inline-flex items-center hover:text-cyan-700 text-yellow-600 text-lg group transition-colors duration-200 hover:underline'>
                            Contact Sales <HiArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 hover:text-cyan-900'/>
                        </Link>
                    </div>

                    <div space-y-2>
                        <h2 className='text-xl font-bold'>Hire a certified Partner</h2>
                        <p>
                            Extend the power of your team by hiring a certified Empowa CRM partner. We'll match you with the best in the bussiness
                        </p>
                        <Link to='/' className='inline-flex items-center hover:text-cyan-700 text-yellow-600 text-lg group transition-colors duration-200 hover:underline'>
                            Browse Partners <HiArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 hover:text-cyan-900'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TryNow