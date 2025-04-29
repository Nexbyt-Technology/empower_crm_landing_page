import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router'
import tab1  from '../assets/tab1.mp4'
import tab2 from '../assets/tab2.mp4'
import tab3 from '../assets/tab3.mp4'
import tab4 from '../assets/tab4.mp4'
import { HiArrowRight } from 'react-icons/hi'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'



const tabsData = [
    {
      id: 'tab1',
      title: 'Customer Management Made Simple',
      subtitle: 'Empowa CRM puts the power of customer data at your fingertips with intuitive contact management tools so every team can track and nurture relationships effectively.',
      video: tab1, 
      poster: '/images/customer-management-poster.jpg', // Replace with your actual image
      cta: {
        text: 'Explore Contact Management',
        link: '/features/contact-management'
      }
    },
    {
      id: 'tab2',
      title: 'Streamline Your Sales Pipeline',
      subtitle: 'Visualize and optimize your entire sales process with customizable pipelines and automated follow-ups that help convert more leads into loyal customers.',
      video: tab2, 
      poster: '/images/sales-pipeline-poster.jpg', // Replace with your actual image
      cta: {
        text: 'Discover Sales Tools',
        link: '/features/sales'
      }
    },
    {
      id: 'tab3',
      title: 'Empower Your Team with Actionable Insights',
      subtitle: 'Give every team member the data they need with powerful analytics dashboards that transform customer interactions into strategic business decisions.',
      video: tab3, 
      poster: '/images/analytics-poster.jpg', // Replace with your actual image
      cta: {
        text: 'Explore Analytics',
        link: '/features/analytics'
      }
    },
    {
      id: 'tab4',
      title: 'Enhance Service with AI-Powered Assistance',
      subtitle: "Empowa's AI Assistant helps you deliver personalized customer experiences by analyzing interaction history and suggesting the perfect next steps.",
      video: tab4,
      poster: '/images/ai-assistant-poster.jpg', // Replace with your actual image
      cta: {
        text: 'Discover AI Features',
        link: '/features/ai'
      }
    }
  ];

 
const DesignSection = () => {

  const [activeTab, setActiveTab] = useState(tab2)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const progressInterval = useRef(null)
  const PROGRESS_DURATION = 10000;
  const UPDATE_INTERVAL = 100;

  useEffect(() => {
    startProgressTimer();
    return () => clearInterval(progressInterval.current)
  }, [activeTab])

  const startProgressTimer = () => {
    setProgress(0);
    clearInterval(progressInterval.current)
    progressInterval.current = setInterval(() => {
        setProgress (prev => {
            if (prev >= 100) {
                const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);
                const nextIndex = (currentIndex + 1) % tabsData.length
                setActiveTab(tabsData[nextIndex].id)
            }

            return prev + (UPDATE_INTERVAL / PROGRESS_DURATION * 100)

        })
    }, UPDATE_INTERVAL)
  }

  //handle next click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    setIsPlaying(true)
    setProgress(0)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)

    const video = document.querySelector(`video[data-tab='${activeTab}']`)

    if(video) {
        if(isPlaying) {
            video.pause();
            clearInterval(progressInterval.current)
        } else {
            video.play();
            startProgressTimer();
        }
    }
  }


  return (
    <div className='overflow-hidden py-24 bg-black text-white '>
        <div className='primary-container'>

            {/*header*/}
            <div className='max-w-[50rem] lg:mb-24 mb-12'>
                <h2 className='sm:text-5xl text-4xl md:text-5xl font-bold text-white mb-8'>Transform Customer Relationships into Growth</h2>
            </div>

            {/* content grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
                {/* content */}
                <div className='flex flex-col  gap-16'>
                    {/*subheading & btn*/}
                    <div className=''>
                        <p className='text-2xl text-gray-400'>
                        Elevate your business with Empowa CRM. Give your sales and marketing teams the tools to manage relationships effectively and convert more leads — so your team can focus on what matters most: building genuine connections with customers, not managing spreadsheets and scattered data.
                        </p>
                        <Link to='/getStarted' className='inline-flex items-center bg-yellow-700 rounded text-white hover:bg-cyan-900 px-8 py-4 mt-8 transition-colors duration-500 ease-in-out transform hover:scale-110'>Get Started - it's free</Link>
                    </div>


                    {/* accrodians with progress bar */}
                    <div className='space-y-6'>
                        {
                            tabsData.map((tab) => (
                                <div key={tab.id} onClick={() => handleTabClick(tab.id)} className='relative pl-4 cursor-pointer'>
                                    {/* progress bar */}
                                    <div className='absolute left-0 top-0 bottom-0 w-1 bg-gray-800'>
                                        {
                                            activeTab === tab.id && (
                                                <div className='absolute top-0 left-0 w-full bg-yellow-500 transition-all-duration-100' style={{height: `${progress}%`}}></div>
                                            )
                                        }
                                    </div>


                                    {/* title */}
                                    <h3 className='text-xl font-semibold text-white mb-2'>{tab.title}</h3>


                                    {/*sub title */}
                                    <p className={`text-gray-400 transition-all duration-300 ${activeTab === tab.id ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>{tab.subtitle}</p>


                                </div>
                            ))
                        }
                    </div>


                </div>


                {/* video */}
                <div className='relative'>
                    <div className='max-w-[640px] mx-auto h-[360px] overflow-hidden bg-gray-100 rounded-lg'>
                        {
                            tabsData.map((tab) => (
                                <div 
                                    key={tab.id}
                                    className={`w-full h-full flex items-center justify-center transition-opacity duration-500 ${activeTab === tab.id ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                    <video 
                                        src={tab.video} 
                                        data-tab={tab.id}
                                        className='w-full h-full object-cover p'
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                    ></video>

                                    {/* bottom text and play icon*/}
                                    <div className='flex justify-between absolute  bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent'>
                                        <Link to='/' className='inline-flex items-center text-yellow-500 hover:text-cyan-600 transition-colors'>{tab.cta.text}
                                        <HiArrowRight className='ml-4'/>
                                        </Link>
                                        <button onClick={togglePlayPause} className='p-2 text-white hover:text-grey-300'>
                                            {
                                                isPlaying ? <BsPauseFill size={24}/> : <BsPlayFill/>
                                            }
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default DesignSection