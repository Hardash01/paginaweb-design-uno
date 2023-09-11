import { useState } from "react"
import { MenuIcon, XIcon } from "./Icons"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
    };

    return (
        <nav className="bg-gray-200 relative">
            <div 
                className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:w-5/6 lg:w-5/6 p-3 md:pl-0"
            >
                <a href='#' className="flex items-center py-2">
                    <p className="font-bold text-3xl">SYM</p>
                </a>
                <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
                aria-controls="navbar-default"
                aria-expanded={isMenuOpen}
                >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                    <XIcon className="w-6 h-6 text-black" aria-hidden="true" />
                ) : (
                    <MenuIcon className="w-6 h-6 text-black" aria-hidden="true" />
                )}
                </button>
                <div
                    className={`absolute top-full left-0 px-1 py-1 w-full md:w-auto ${
                        isMenuOpen ? 'block' : 'hidden'
                    } transition-all duration-500 ease-in-out bg-gray-200 md:flex md:items-center md:space-x-8  md:relative md:bg-transparent`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-naranja700 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <a href='#sobremi' className="uppercase block py-2 pl-3 pr-4 text-black font-bold rounded transition duration-300 hover:bg-purple-400 md:p-1">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="uppercase block py-2 pl-3 pr-4 text-black rounded transition duration-300 hover:bg-purple-400 md:p-1">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="uppercase block py-2 pl-3 pr-4 text-black rounded transition duration-300 hover:bg-purple-400 md:p-1">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#more" className="uppercase block py-2 pl-3 pr-4 text-black rounded transition duration-300 hover:bg-purple-400 md:p-1">
                                More
                            </a>
                        </li>
                        <li className="flex items-center">
                            <MenuIcon className=" w-6 h-6 text-black  mt-2 ml-3 md:ml-0 md:mt-0"/>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    )
}

export default Header