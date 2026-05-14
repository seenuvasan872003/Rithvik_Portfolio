import React from "react";
import { FaMapMarkerAlt, FaPlane, FaLanguage, FaGlobe } from "react-icons/fa";

const Education = () => {
    return (
        <section id="education" className="mt-32 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                {/* Education */}
                <div className="flex flex-col h-full">
                    <div className="bg-yellow-400 text-black border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 self-start">
                        <h2 className="text-xl font-bold uppercase">Education</h2>
                    </div>

                    <div className="bg-white dark:bg-gray-800 border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative flex-grow">
 
                        {/* MSc */}
                        <h3 className="font-bold text-xl">MSc Business Analysis and Consulting</h3>
                        <p className="text-gray-600 dark:text-gray-400">University of Strathclyde</p>
                        <span className="bg-[#5ce1e6] border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            2023 - 2025
                        </span>
                        <p className="text-sm mt-3 text-gray-500 flex items-center gap-2"><FaMapMarkerAlt className="text-red-500 text-lg" />Glasgow, UK</p>
 
                        {/* B.Com */}
                        <h3 className="font-bold text-xl mt-6">Bachelor of Commerce (B.Com)</h3>
                        <p className="text-gray-600 dark:text-gray-400">SRM Institute of Science and Technology</p>
                        <span className="bg-yellow-300 border-[2px] border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            2019 - 2022
                        </span>
                        <p className="text-sm mt-3 text-gray-500 flex items-center gap-2"><FaMapMarkerAlt className="text-red-500 text-lg" />Chennai, India</p>
 
                    </div>
                </div>

                {/* Additional Info */}
                <div className="flex flex-col h-full">
                    <div className="bg-[#5ce1e6] text-black border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-4 self-start">
                        <h2 className="text-xl font-bold uppercase">Additional Info</h2>
                    </div>

                    <div className="bg-white dark:bg-gray-800 border-[3px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-grow">

                        {/* Relocation */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <FaPlane className="text-blue-500" /> Relocation Status
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                Open to opportunities in India, Europe, United Kingdom, Dubai (UAE), Australia, New Zealand, and Canada.
                            </p>
                        </div>

                        {/* Languages */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <FaLanguage className="text-green-500 text-xl" /> Languages
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-bold">
                                English <span className="font-normal">(Fluent)</span>, Tamil <span className="font-normal">(Native)</span>
                            </p>
                        </div>

                        {/* International Exposure */}
                        <div>
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <FaGlobe className="text-purple-500" /> International Exposure
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                UK postgraduate study and academic projects with global market exposure (UK / EU / US).
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;