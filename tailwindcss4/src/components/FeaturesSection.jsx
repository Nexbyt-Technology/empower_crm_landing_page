import React from 'react'
import {FiDatabase, FiTarget, FiTrello, FiBarChart2, FiCalendar, FiMessageCircle} from 'react-icons/fi'

const features = [
  {
    icon: <FiDatabase className="w-8 h-8" />,
    title: "Contact Management",
    description: "Organize all your customer data in one central location. Track interactions, manage contact information, and build comprehensive customer profiles.",
    link: "/features/contact-management"
  },
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Lead Generation",
    description: "Capture and nurture leads through multiple channels. Convert prospects into customers with automated follow-ups and personalized communication.",
    link: "/features/lead-generation"
  },
  {
    icon: <FiTrello className="w-8 h-8" />,
    title: "Pipeline Management",
    description: "Visualize your sales process from start to finish. Move deals through customizable stages and identify bottlenecks to improve conversion rates.",
    link: "/features/pipeline-management"
  },
  {
    icon: <FiBarChart2 className="w-8 h-8" />,
    title: "Analytics Dashboard",
    description: "Get real-time insights into your business performance. Track key metrics, forecast sales, and make data-driven decisions to drive growth.",
    link: "/features/analytics"
  },
  {
    icon: <FiCalendar className="w-8 h-8" />,
    title: "Task Management",
    description: "Stay organized with integrated calendars and task assignments. Automate routine tasks and ensure nothing falls through the cracks.",
    link: "/features/task-management"
  },
  {
    icon: <FiMessageCircle className="w-8 h-8" />,
    title: "Customer Support",
    description: "Provide exceptional service with integrated support tools. Track issues, manage tickets, and resolve customer problems efficiently.",
    link: "/features/customer-support"
  }
];

const FeaturesSection = () => {
  return (
    <div className='bg-primary text-white'>
      <div className=' primary-container py-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
            {
              features.map((features, index) => (
                <div key={index} className='flex flex-col text-white border-t border-white/20 pt-8'>
                  <div className='mb-4 text-white'>{features.icon}</div>
                  <h3 className='text:lg font-medium mb-2' >{features.title}</h3>
                  <p className='text-gray-500 mb-4 flex-1'>{features.description}</p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection