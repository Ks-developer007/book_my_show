import React from "react";
import {BiChevronDown,BiMenu,BiSearch} from "react-icons/bi";

function NavSm(){
    return <>
    
    <div className="text-white flex items-center justify-between"></div>
    <div>
<h3 className="text-xl font-bold">It all starts Here!!</h3>
<span className="text=grey-400 text-xs flex items-center cursor-pointer hover:text-white">
    Kolkata<BiChevronDown/>
    </span>

    </div>
    <div className="w-full h-full"></div>
    
    </>
}

 function NavMd(){
        return <>
        <div className="w-full flex items-center gap-3 px-3 py-1 rounded-md bg-white">
        <BiSearch/>
        <input type="search" className="w-full bg-transparent border-none focus:outline-none"/>
        </div>
        </>
    }
    
function NavLg(){
return <>
           <div className="container flex mx-auto items-center gap-3 bg-white px-4 justify-between">
           <div className="flex items-center w-1/2 gap-3">
            <div className="w-10 h-10">
        <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"className="w-full h-full" />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch/>
            <input type="search" classname="w-full bg-transperent border-none focus:outline-none"
            placeholder="search for movies,events plys sports and activites"></input>

        </div>
        </div>
        <div className="flex items-center gap-3">
            <span className="text-grey-200 text-base flex items-center cursor-pointer hover:text-white">
                Kolkata <BiMenu/>
                </span>
                <button className="bg-red-600 text-white px-2 text-sm rounded">

                Sign In
                </button>
                <div classname="w-8 h-8 text-white">
                    <BiMenu classname="w-full h-full"/>
                </div>
                </div>
                </div>
        </>
    }

    //main component
    const Navbar=()=>{
        return (
            <nav className="bg-darkBAckground-700 px-4 py-4">
                {/* this is for mobile screen - Navbar */}
            <div className="md:hidden">
                <NavSm/>
            </div>

                            {/* this is for medium screen - Navbar */}
                            <div className="hidden md:flex lg:hidden">
                <NavMd/>
            </div>

                            {/* this is for large screen - Navbar */}
                            <div className="hidden md:hidden lg:flex">
                <NavLg/>
            </div>
            </nav>
        )
    }

export default Navbar;