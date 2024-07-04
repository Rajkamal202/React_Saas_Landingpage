import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import FeatureSection from './Components/Features'
import Workflow from './Components/WorkFlow'
import Pricing from './Components/Price'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'



const App = () => {
  return (
    <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <Hero/>
    </div>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    <div className='flex justify-center items-center p-4 border  from-blue-500 via-white to-yellow-300 border-solid border-blue-200 m-4'>
      <h3 className=' bg-gradient-to-r bg-clip-text  to-blue-600 via-white from-yellow-400 text-transparent'>Created :- RAJKAMAL RAO</h3>
    </div>
    
    
    </div>
  )
}

export default App

