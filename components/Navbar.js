
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [changeBg, setChangeBg] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    });
  
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };

    useEffect(() =>{
      let backgroundTransparacyVar = clientWindowHeight / 610;
      if (backgroundTransparacyVar < 1) {
          setChangeBg(true)
      }
      else{
        setChangeBg(false)
      }
    }, [clientWindowHeight])

    return (
        <nav className= {changeBg ? `w-full bg-tr  md:bg-transparent fixed z-50 `: `w-full bg-orange-500 md:bg-orange-500 fixed z-50 ` }>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a >
                            <h2 className="text-2xl font-headd text-white font-bold">DELUXE</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2  text-white rounded-md outline-none focus:border-white focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 text-white h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 text-white h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-gray-700">
                                <Link href='/'>
                                <a >Home</a>
                                </Link>
                            </li>
                            <li className="text-white hover:text-gray-700">
                            <Link href='/rooms'>
                                <a >Rooms</a>
                                </Link>
                            </li>
                            <li className="text-white hover:text-gray-700">
                            <Link href='/facilities'>
                                <a >Facilities</a>
                                </Link>
                            </li>
                          
                            <li className="text-white hover:text-gray-700">
                            <Link href='/contacts'>
                                <a >Contact Us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}