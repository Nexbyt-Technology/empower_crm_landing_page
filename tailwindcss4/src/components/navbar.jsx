import React, { useState } from 'react'
import { Link } from 'react-router'
import { MdClose, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    }

    const menuItems = {  
        platform: {  
            title: "Features",
            items: [  
                {  
                    name: "Manage Payment Status",  
                    desc: "✨ Seamlessly get a comprehensive overview of the payment status of clients—across categories and individually."  
                },  
                {  
                    name: "Sales",  
                    desc: "📊 View converted leads and efficiently manage your prospects' status."  
                },  
                {  
                    name: "Customer Management",  
                    desc: "👥 Keep all customer interactions organized in one place for easy access."  
                },  
                {  
                    name: "Employee Management",  
                    desc: "📅 Assign tasks to employees and follow up on their status with ease."  
                }  
            ]  
        }  
             
        }  
         
  return (
    <nav className='bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10 z-50'>
        <div className='container mx-auto px-4 py-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                {/* logo */}
                <div>
                    <Link to='/' className='flex items-center text-xl font-bold'>
                        <img src = 'fav-icon.jpg' className="w-12 h-12" />
                        <span className="ml-2 text-yellow-700">Empowa CRM</span>
                    </Link>
                </div>

                {/* desktop menu */}
                <div className='hidden lg:flex items-center space-x-4'>
                    {
                        Object.keys(menuItems).map((key) => (
                            <div className='relative' key={key}>
                                <button onClick={() => toggleDropdown(key)} className='hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium flex items-center'>
                                    {menuItems[key].title}
                                    <MdKeyboardArrowDown className={`ml-2 h-5 transition-transformn ${
                                    activeDropdown === key ? 'transform rotate-180' : ''
                                }`}/>
                                </button>

                                {/* dropdown */}
                                {
                                    activeDropdown === key && (
                                        <div className='absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg py-1 text-black'>
                                            <div>
                                                {
                                                    menuItems[key].items.map((item, index) => (
                                                        <Link key={index} to="#">
                                                            <div className="p-3 hover:bg-gray-100">
                                                                <p className="font-medium">{item.name}</p>
                                                                <p className="text-sm text-gray-600">{item.desc}</p>
                                                            </div>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                                                    
                            </div>
                        ))
                    }
                    <Link to='/pricing' className='hover:text-yellow-500'>
                        Pricing
                    </Link>
                    <Link to='/testimonials' className='hover:text-yellow-500'>
                        Testimonials
                    </Link>
                </div>
                    

                {/* auth btn */}
                <div className='hidden md:flex items-center space-x-4'>
                    <Link to='/login' className='hover:text-yellow-500 hidden xl:block'>Log in</Link>
                    <Link to='/contactUs' className='hover:text-yellow-500 hidden xl:block'>Contact us</Link>
                    <Link to='getStarted' className='hover:text-yellow-600 bg-yellow-700 px-4 py-2 rounded-md hover:bg-cyan-900'>Get Started - for free</Link>
                </div>

                {/* mobile menu bar*/}
                <div className='md:hidden'>
                    <button onClick= {toggleMenu} className='inline-flex items-center justify-center p-2 rounded-md hover:text-sky-400'>
                        {
                            !isMenuOpen ? (<MdMenu className='block w-6 h-6'/>) : (<MdClose className='block w-6 h-6'/>)
                        }
                    </button>
                </div>
            </div>
        </div>

        {/* mobile menu*/}
        {
            isMenuOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1'>
                        {
                            Object.keys(menuItems).map((key) => (
                                <div className='space-y-2' key={key}>
                                    <button onClick={() => toggleDropdown(key)} className='hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium flex items-center'>
                                        {menuItems[key].title}
                                        <MdKeyboardArrowDown className={`ml-2 h-5 transition-transformn ${
                                        activeDropdown === key ? 'transform rotate-180' : ''
                                        }`}/>
                                    </button>

                                    {
                                        activeDropdown === key && (
                                            <div className='bg-amber-100 text-black'>
                                                <div className='pl-4'>
                                                    {
                                                        menuItems[key].items.map((item, index) => (
                                                            <Link key={index} to="#" className='py-2'>
                                                                <div className="p-3 hover:bg-gray-100">
                                                                    <p className="font-medium">{item.name}</p>
                                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                                </div>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                        <Link to='/pricing' className='block px-3 py-2 hover:bg-sky-400'>Pricing</Link>
                        <Link to='testimonials' className='block px-3 py-2 hover:bg-sky-400'>Testimonials</Link>
                        <Link to='login' className='block px-3 py-2 hover:bg-sky-400'>Log in</Link>
                        <Link to='contactUs' className='block px-3 py-2 hover:bg-sky-400'>Contact us</Link>
                        <Link to='getStarted' className='block px-3 py-2 hover:bg-yellow-700 bg-sky-900'>Get Started- for free</Link>
                    </div>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar