import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // EmailJS Credentials
        const serviceId = 'service_5dg4jua';
        const adminTemplateId = 'template_bbsm04s'; // Template for you
        const userTemplateId = 'template_pm1fhc8';   // Auto-reply for the user
        const publicKey = 'vFFgCRmTyQ4NL7d3N';

        // 1. Data for Admin Email
        const adminData = {
            service_id: serviceId,
            template_id: adminTemplateId,
            user_id: publicKey,
            template_params: {
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                to_name: 'Rithvik',
                message: `You have a new contact request from ${formData.name}. \nPhone: ${formData.phone} \nEmail: ${formData.email}`
            }
        };

        // 2. Data for User Confirmation Email (Auto-Reply)
        const userData = {
            service_id: serviceId,
            template_id: userTemplateId,
            user_id: publicKey,
            template_params: {
                to_name: formData.name,
                to_email: formData.email,
                from_name: 'Rithvik Dayashankar',
                reply_to: 'rithvikray@gmail.com'
            }
        };

        try {
            // Send both emails simultaneously
            const [adminRes, userRes] = await Promise.all([
                fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(adminData),
                }),
                fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData),
                })
            ]);

            if (adminRes.ok && userRes.ok) {
                setStatus('Success! Message sent and confirmation delivered.');
                setFormData({ name: '', phone: '', email: '' });
            } else if (adminRes.ok) {
                setStatus('Message sent! (Confirmation email failed to send)');
                setFormData({ name: '', phone: '', email: '' });
            } else {
                setStatus('Failed to send. Please check your EmailJS settings.');
            }
        } catch (error) {
            console.error('Email Error:', error);
            setStatus('Network error. Please try again later.');
        }
    };

    return (
        <section id="contact" className="mt-32 px-4 mb-24">
            <div className="bg-yellow-400 text-black border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-12">
                <h2 className="md:text-2xl text-xl font-bold uppercase tracking-wider">GET IN TOUCH</h2>
            </div>

            <div className="text-center mb-12">
                <p className="font-bold md:text-2xl text-xl dark:text-gray-300">Let's build something amazing together</p>
            </div>

            <div className="max-w-2xl mx-auto mb-16">
                <form className=" p-8 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-bold dark:text-gray-300 text-black text-lg">Name.</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="p-3 border-[3px] border-black bg-white text-black outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-bold dark:text-gray-300 text-black text-lg">Phone No.</label>
                        <input type="tel" id="phone" name="phone" placeholder="+91 23456 78900" value={formData.phone} onChange={handleChange} required className="p-3 border-[3px] border-black bg-white text-black outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-bold dark:text-gray-300 text-black text-lg">Email.</label>
                        <input type="email" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="p-3 border-[3px] border-black bg-white text-black outline-none focus:bg-yellow-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" />
                    </div>
                    <button type="submit" className="mt-4 bg-yellow-400 text-black font-bold uppercase tracking-wider text-xl py-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                        Submit
                    </button>
                    {status && <p className="text-center font-bold text-lg mt-4">{status}</p>}
                </form>
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/rithvik-dayashankar-0b9561310/" target="_blank" rel="noreferrer" className="relative group hover:-translate-y-2 transition-transform cursor-pointer block">
                    <div className="w-56 h-32 bg-[#5ce1e6] text-black border-[3px] border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <FaLinkedinIn className="text-4xl mb-2" />
                        <span className="font-cursive italic font-bold">LinkedIn</span>
                    </div>
                    {/* Tape */}
                    <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/90 border border-yellow-300 rotate-12"></div>
                </a>

                {/* GitHub */}
                {/* <a href="https://github.com/seenuvasan872003" target="_blank" rel="noreferrer" className="relative group hover:-translate-y-2 transition-transform cursor-pointer block">
                    <div className="w-56 h-32 bg-yellow-400 text-black border-[3px] border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <FaGithub className="text-4xl mb-2" />
                        <span className="font-cursive italic font-bold">GitHub</span>
                    </div>
                    Tape
                    <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/90 border border-yellow-300 -rotate-12"></div>
                </a> */}

                {/* Email */}
                <a href="mailto:rithvikray@gmail.com" className="relative group hover:-translate-y-2 transition-transform cursor-pointer block">
                    <div className="w-56 h-32 bg-pink-400 text-black border-[3px] border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <FaEnvelope className="text-4xl mb-2" />
                        <span className="font-cursive italic font-bold">Email</span>
                    </div>
                    {/* Tape */}
                    <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/90 border border-yellow-300 rotate-6"></div>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/9600118478" target="_blank" rel="noreferrer" className="relative group hover:-translate-y-2 transition-transform cursor-pointer block">
                    <div className="w-56 h-32 bg-[#25D366] text-black border-[3px] border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        <FaWhatsapp className="text-4xl mb-2" />
                        <span className="font-cursive italic font-bold">WhatsApp</span>
                    </div>
                    {/* Tape */}
                    <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/90 border border-yellow-300 -rotate-6"></div>
                </a>
            </div>
        </section>
    );
};

export default Contact;
