import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            company: "Weboin Technologies",
            role: "Business Analyst",
            period: "01/2026 – Present",
            color: "bg-blue-400",
            points: [
                "Supported business requirement gathering and analysis for digital marketing and growth-focused client projects",
                "Performed data analysis and reporting using Excel to identify process gaps and optimisation opportunities",
                "Collaborated with technical teams to translate business needs into functional understanding",
                "Participated in stakeholder discussions and internal review meetings",
                "Gained hands-on exposure to digital marketing analytics, SEO/SMO performance tracking, and data-driven business analysis"
            ]
        },
        {
            company: "Keystore More",
            role: "Sales Analyst",
            period: "09/2024 – 09/2025",
            color: "bg-pink-400",
            points: [
                "Analysed sales data to identify trends, patterns, and performance gaps",
                "Prepared sales reports, dashboards, and forecasts for management",
                "Monitored KPIs such as revenue, conversion rates, and sales pipeline performance",
                "Supported sales teams with data-driven insights",
                "Assisted in sales forecasting, budgeting, and demand planning"
            ]
        },
        {
            company: "Swaya Cadd Tech",
            role: "SAP FICO Consultant (Internship)",
            period: "06/2022 – 08/2022",
            color: "bg-yellow-400",
            points: [
                "Assisted in SAP FICO module activities including GL, AP, and AR",
                "Supported configuration and validation of financial postings",
                "Assisted month-end closing and preparation of financial statements",
                "Analysed financial data to identify discrepancies and support cost control",
                "Prepared reports to improve financial process transparency and efficiency"
            ]
        }
    ];

    return (
        <section id="experience" className="px-4">
            <div className="bg-purple-400 text-black border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-12">
                <h2 className="text-2xl font-bold uppercase tracking-tight">Professional Experience</h2>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative">
                        <div className="bg-white dark:bg-gray-800 border-[3px] border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                                <div>
                                    <div className={`${exp.color} border-[2px] border-black px-3 py-1 inline-block mb-3 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                                        {exp.period}
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight mb-1">{exp.role}</h3>
                                    <p className="text-lg font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                        <FaBriefcase className="text-purple-500" /> {exp.company}
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex gap-4 text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                                        <span className="min-w-[12px] h-[12px] mt-1.5 bg-black dark:bg-white border border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
