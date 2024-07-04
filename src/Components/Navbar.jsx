import { Menu, X} from "lucide-react";
import { useState } from "react";
import logo from '../assets/logo.png'
import { navItems } from "../constants"


const Navbar = () => {
    // Here we declare two variable and it default value is false which will indicate that it desclose in the begining
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
   // This one is simply toggle the value of mobileDrawerOpen
    const toggleNavbar = () =>{
        setMobileDrawerOpen(!mobileDrawerOpen)

    }
  return (

    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
    <div className='container px-4 mx-auto relative text-sm'>
    <div className='flex justify-between items-center'>
    <div className='flex items-center flex-shrink-0'>
    <img className='h-10 w-10 mr-2' src={logo} alt='Logo of navbar'/>
    <span className='text-xl tracking-tight'>
     VRPage
    </span>
    </div>
{/* This is where we fetch data from constants to Navbar */}
    <ul className='hidden lg:flex ml-14 space-x-12'>
       {navItems.map ((item, index) =>(
        <li key={index}>
            <a href={item.href}>{item.label}</a>
        </li>
       ))}
    </ul>
    <div className='hidden lg:flex justify-center space-x-12 items-center '>
    <a href='#' className='py-2 px-3 border rounded-md '>
        Sign In
    </a>
    <a href='#' className="py-2 px-3 rounded-md bg-gradient-to-r hover:from-yellow-400 hover:via-gray-600 hover:to-blue-500 from-yellow-800 via-black to-blue-600">
     Create an account
    </a>
    </div>
    {/* This one we made for mobile Navbar  */}
    <div className="lg:hidden md:flex flex-col justify-end">
     <button onClick={toggleNavbar}>
     {mobileDrawerOpen ? <X/> : <Menu/>}
     </button>
    </div>
    </div>
    {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
         <ul>
            {navItems.map((item, index)=> (
                <li key={index} className="py-4">
                     <a href="{item.href}">{item.label}</a>
                </li>
            ))}
         </ul>
        <div className="flex space-x-6">
            <a href="#" className="py-2 px-3 border rounded-md">
            Sign In
            </a>
            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r hover:from-yellow-400 hover:via-gray-600 hover:to-blue-500 from-yellow-800 via-black to-blue-600">
              Create an account
            </a>
        </div>
        </div>
    ) }
    

    </div>

    </nav>
  )
}

export default Navbar