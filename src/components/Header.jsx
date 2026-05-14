import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaFilePdf } from 'react-icons/fa';
import cvPdf from '../assets/cv/rithvik.pdf';

const Header = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-yellow-300 dark:bg-yellow-400 border-[3px] border-black mx-4 sm:mx-8 lg:mx-12 mt-6 flex justify-between items-center px-4 py-3 relative z-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            {/* Logo */}
            <div className="bg-[#5ce1e6] border-[3px] border-black px-3 py-1 font-extrabold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer text-black">
                RITHVIK
            </div>

            {/* Nav links */}
            <nav className={`${isMenuOpen ? 'flex flex-col absolute top-20 left-0 right-0 bg-yellow-300 dark:bg-yellow-400 border-[3px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'hidden'} lg:flex items-center lg:static`}>
                <div className={`${isMenuOpen ? 'flex flex-col w-full gap-4 text-xl' : 'flex space-x-6 items-center'} font-bold text-black`}>
                    <a href="#home" className="hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#about" className="hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#projects" className="hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#skills" className="hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
                    <a href="#education" className="hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Education</a>
                    <a href="#contact" className="hover:text-pink-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
            </nav>

            <div className="flex items-center space-x-3 lg:space-x-4">
                <a href={cvPdf} download="seenuvasan.pdf" target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 bg-white border-[3px] border-black px-4 py-1.5 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    <FaFilePdf className="text-red-500" />
                    <span className="font-cursive italic">Resume</span>
                </a>
                <button className="hidden sm:block bg-[#5ce1e6] border-[3px] border-black px-4 py-1.5 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black">
                    Hire Me!
                </button>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-[#5ce1e6] border-[3px] border-black p-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
                >
                    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden bg-[#5ce1e6] border-[3px] border-black p-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-black"
                >
                    {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
