import React from 'react';
import { FaDownload, FaFilePdf } from 'react-icons/fa';
import cvPdf from '../assets/cv/rithvik.pdf';

const CVDownload = () => {
    return (
        <section id="cv" className="mt-32 px-4 flex flex-col items-center">
            <h3 className="text-xl font-cursive italic mb-4">View My Resume</h3>
            <div className="bg-[#5ce1e6] border-[3px] border-black px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 mb-4">
                <FaFilePdf className="text-4xl" />
                <span className="text-3xl font-extrabold tracking-wider text-black">Download CV</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium text-center">
                Get a copy of my resume to see my full work history and skills.
            </p>
            <a
                href={cvPdf}
                download="seenuvasan.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-white dark:bg-gray-800 text-black dark:text-white border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-bold flex items-center gap-2"
            >
                <FaDownload /> Download Now
            </a>
        </section>
    );
};

export default CVDownload;
