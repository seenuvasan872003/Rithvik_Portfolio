import React from 'react';
import { 
    FaChartPie, 
    FaChartLine, 
    FaBullhorn, 
    FaHandshake, 
    FaTools, 
    FaFileExcel, 
    FaPython, 
    FaChartBar, 
    FaSalesforce, 
    FaHubspot, 
    FaBriefcase,
    FaClipboardList,
    FaCogs,
    FaMoneyBillWave,
    FaLightbulb,
    FaSearch,
    FaShareAlt,
    FaBullseye,
    FaGlobe,
    FaPercentage,
    FaHandHoldingUsd,
    FaBinoculars,
    FaThLarge,
    FaComments,
    FaUsers,
    FaLanguage,
    FaFileAlt
} from 'react-icons/fa';
import { SiSap } from 'react-icons/si';

const skillCategories = [
    {
        title: 'Business & Data Analysis',
        bgColor: 'bg-blue-400',
        icon: <FaChartPie />,
        items: [
            { name: 'Business Requirements Gathering', icon: <FaClipboardList className="text-blue-500" /> },
            { name: 'Data Analysis & Reporting', icon: <FaChartBar className="text-orange-500" /> },
            { name: 'KPI Tracking', icon: <FaChartLine className="text-green-500" /> },
            { name: 'Process Improvement', icon: <FaCogs className="text-gray-500" /> },
            { name: 'Cost–Benefit Analysis', icon: <FaMoneyBillWave className="text-yellow-600" /> },
            { name: 'Insight Generation', icon: <FaLightbulb className="text-yellow-400" /> }
        ]
    },
    {
        title: 'Digital Marketing Analytics',
        bgColor: 'bg-pink-400',
        icon: <FaBullhorn />,
        items: [
            { name: 'SEO Analysis', icon: <FaSearch className="text-blue-400" /> },
            { name: 'SMO & Social Media Analytics', icon: <FaShareAlt className="text-blue-600" /> },
            { name: 'Campaign Performance Tracking', icon: <FaBullseye className="text-red-500" /> },
            { name: 'Website & Customer Analytics', icon: <FaGlobe className="text-indigo-500" /> },
            { name: 'Marketing ROI Analysis', icon: <FaPercentage className="text-green-500" /> }
        ]
    },
    {
        title: 'Sales & Commercial Analysis',
        bgColor: 'bg-indigo-400',
        icon: <FaChartLine />,
        items: [
            { name: 'Sales Performance Analysis', icon: <FaChartBar className="text-blue-500" /> },
            { name: 'Revenue & Trend Analysis', icon: <FaHandHoldingUsd className="text-green-600" /> },
            { name: 'Forecasting Support', icon: <FaBinoculars className="text-purple-500" /> },
            { name: 'Dashboard & Report Preparation', icon: <FaThLarge className="text-gray-700" /> }
        ]
    },
    {
        title: 'Stakeholder Collaboration',
        bgColor: 'bg-yellow-400',
        icon: <FaHandshake />,
        items: [
            { name: 'Stakeholder Communication', icon: <FaComments className="text-blue-500" /> },
            { name: 'Cross-Functional Coordination', icon: <FaUsers className="text-green-600" /> },
            { name: 'Requirement Translation', icon: <FaLanguage className="text-orange-500" /> },
            { name: 'Presentation & Reporting', icon: <FaFileAlt className="text-red-500" /> }
        ]
    },
    {
        title: 'Tools & Technologies',
        bgColor: 'bg-teal-400',
        icon: <FaTools />,
        items: [
            { name: 'MS Excel', icon: <FaFileExcel className="text-green-600" /> },
            { name: 'Tableau', icon: <FaChartBar className="text-blue-600" /> },
            { name: 'Python', icon: <FaPython className="text-blue-400" /> },
            { name: 'SAP FICO', icon: <SiSap className="text-blue-600" /> },
            { name: 'HubSpot CRM', icon: <FaHubspot className="text-orange-500" /> },
            { name: 'Salesforce CRM', icon: <FaSalesforce className="text-blue-400" /> },
            { name: 'Freshsales', icon: <FaBriefcase className="text-gray-600" /> }
        ]
    }
]; 

const Skills = () => {
    return (
        <section id="skills" className="mt-32 px-4 relative">
            <div className="inline-block bg-[#5ce1e6] dark:bg-blue-600 border-2 border-black px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-3xl font-bold uppercase tracking-wider">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                        {/* Top color bar */}
                        <div className={`absolute top-0 left-0 right-0 h-2 border-b-4 border-black ${category.bgColor}`} />

                        <h3 className="text-xl font-bold flex items-center gap-3 mb-6 mt-4">
                            <span className="text-2xl">{category.icon}</span>
                            {category.title}
                        </h3>
                        <hr className="border-t-4 border-black mb-6" />

                        <div className="flex flex-wrap gap-x-3 gap-y-4">
                            {category.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    className="flex items-center gap-2 bg-white dark:bg-gray-700 border-2 border-black px-3 py-1 font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0_0_0_0_rgba(0,0,0,1)] transition-all cursor-pointer"
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
