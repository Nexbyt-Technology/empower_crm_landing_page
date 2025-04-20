import React, { useState } from 'react'
import { Link } from 'react-router'
import { MdKeyboardArrowDown } from 'react-icons/md';

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
            title: "Features", // Added quotes for the string  
            sections: [  
                {  
                    title: "Key Features", // Changed title to be more engaging  
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
            ]  
        }  
    } 
  return (
    <nav className='bg-black text-white fixed top-0 left-0 right-0 border-b border-white/10'>
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
                            <div className='relative'>
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
                                                    key === 'Features' ? (<div> Features Item</div>) : (<div>Other items</div>)
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
                <div>Buttons</div>

                {/* mobile menu bar*/}
                <div className='md:hidden'>Mobile Menu</div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar