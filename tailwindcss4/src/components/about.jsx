import React, { useEffect, useRef, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router'


const features = [
    {
      id: "ai-1",
      title: "Intelligent Customer Insights",
      description:
        "Leverage AI-powered analytics to understand your customers better. Empowa CRM's intelligent system identifies patterns in customer behavior, provides actionable insights, and helps you make data-driven decisions to improve relationships and boost sales.",
      link: "/features/ai-insights",
      linkText: "Discover AI insights",
      video: "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design-assistant-ai.mp4",
      poster: "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/6705703132e8c6c85119c96d_design-assistant.avif",
    },
    {
      id: "ai-2",
      title: "Automated Lead Nurturing",
      description:
        "Never miss an opportunity with Empowa's AI-driven lead nurturing. Our system automatically identifies high-value prospects, schedules personalized follow-ups, and recommends the perfect timing for outreach based on previous successful interactions.",
      link: "/features/lead-automation",
      linkText: "Explore lead automation",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/writing-assistant-square.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
    },
    {
      id: "ai-3",
      title: "Smart Pipeline Management",
      description:
        "Visualize and optimize your entire sales process with AI assistance. Empowa CRM analyzes your pipeline, identifies bottlenecks, and suggests improvements to move deals through customizable stages faster, turning more leads into loyal customers.",
      link: "/features/pipeline-optimization",
      linkText: "Learn about smart pipelines",
      video:
        "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/writing-assistant-square.mp4",
      poster:
        "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
    },
  ];

const About = () => {

  const [activeFeature, setActiveFeature] = useState(0)
  const featuresRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                const id = entry.target.getAttribute('id');
                const index = features.findIndex((feature) => feature.id === id);

                if(index !== -1) {
                    setActiveFeature(index)
                    const video = document.querySelector(`video[data-feature="${id}"]`);
                    if(video) video.play()
                }
            }
        })
    }, options)

    const featuresElements = document.querySelectorAll(".feature-item");
    featuresElements.forEach((feature) => observerRef.current.observe(feature))

    return () => {
        if(observerRef.current) {
            observerRef.current.disconnect();
        }
    }
    
}, [])
  return (
    <div className='bg-white text-black py-24'>
        <div className='primary-container'>
            {/* header section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8'>
                <div className='md:mb-24'>
                    <h2 className='text-4xl md:text-6xl front-bold mb-8 max-w-[50rem]'>Intelligent Automation for Smarter Customer Relationships</h2>
                </div>
                <div className='mb-24'>
                    <p className='text-xl text-black mb-8 max-w-[35rem]'>
                        Harness the power of artificial intelligence to streamline your workflow, 
                        gain valuable insights, and provide exceptional customer experiences without 
                        the complexity.
                    </p>
                    <Link className='inline-flex items-center hover:text-cyan-700 text-yellow-600 text-lg font-medim group transition-colors duration-200'>
                        Discover our AI Features <HiArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 hover:text-cyan-900'/>
                    </Link>
                </div>
            </div>

            {/* image and content */}
            <div className='grid grid-cols-1 lg:grid-cols-2  md:gap-32 gap-8'>
                    {/* image */}
                    <div>
                        <div className='sticky top-24'>
                            <div className='aspect-square rounded-lg overflow-x-hidden border border-yellow-700/20'>
                                <video 
                                src={features[activeFeature].video}
                                key={features[activeFeature].id}
                                poster={features[activeFeature].poster}
                                className='w-full h-full object-cover'
                                muted
                                playsInline
                                loop
                                autoPlay
                                ></video>
                            </div>
                        </div>
                    </div>

                    {/* content */}
                    <div>
                        {/* into text */}
                        <div className='md:mb-28 mb-16 md:h-72 border-b border-yellow-600 pb-16'>
                            <div className='max-w-[35ch] mb-4'>
                                <h3 className='text-2xl font-semibold'>Smart Customer Analytics</h3>
                            </div>
                            <p className='text-xl text-gray-500 mb-8 max-w-[35rem]'>
                            Let AI analyze your customer data to identify patterns, predict needs, and recommend 
                            personalized engagement strategies to boost retention and sales.
                            </p>
                            <Link className='inline-flex items-center hover:text-cyan-700 text-yellow-600 text-lg font-medim group transition-colors duration-200'>
                                 Discover our AI Features <HiArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 hover:text-cyan-900'/>
                            </Link>
                        </div>

                        {/* features text */}
                        <div ref={featuresRef} className='space-y-24'>
                            {
                                features.map((feature, index) => (
                                    <div key={feature.id} id={feature.id} className='feature-item scroll-mt-24 md:h-72 border-b border-yellow-600'>
                                    
                                        <div className='max-w-[35ch] mb-4'>
                                                <h3 className='text-2xl font-semibold'>{feature.title}</h3>
                                        </div>
                                        <p className='text-xl text-gray-500 mb-8 max-w-[35rem]'>{feature.description}</p>
                                        <Link className='inline-flex items-center hover:text-cyan-700 text-yellow-600 text-lg font-medim group transition-colors duration-200'>
                                            {feature.linkText} <HiArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 hover:text-cyan-900'/>
                                        </Link>
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

export default About