import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import profile from '../assets/profileimage/profileimage.jpeg';

const ContactPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [screenShake, setScreenShake] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [status, setStatus] = useState('');
    const audioCtxRef = useRef(null);

    // Play a soft notification beep using Web Audio API
    const playBeep = () => {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            audioCtxRef.current = ctx;
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(520, ctx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.3);

            gainNode.gain.setValueAtTime(0.4, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.5);
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            // Audio not supported
        }
    };

    useEffect(() => {
        if (dismissed) return;

        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 10000); // 60 seconds

        return () => clearTimeout(timer);
    }, [dismissed]);

    const handleOpen = () => {
        setIsOpen(true);
        setScreenShake(true);
        playBeep();
        setTimeout(() => setScreenShake(false), 700);
    };

    const handleClose = () => {
        setIsOpen(false);
        setShowPopup(false);
        setDismissed(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('https://portfolio-contact-data.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                setStatus('✅ Message sent!');
                setFormData({ name: '', phone: '', email: '' });
                setTimeout(() => handleClose(), 1500);
            } else {
                setStatus(data.message || 'Error sending message');
            }
        } catch {
            setStatus('Server error. Try again later.');
        }
    };

    if (!showPopup) return null;

    return (
        <>
            {/* Screen Shake Overlay */}
            {screenShake && (
                <div className="fixed inset-0 pointer-events-none z-[9998] animate-screen-shake" />
            )}

            {/* Floating bubble at bottom right */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

                {/* Full Popup Box */}
                {isOpen && (
                    <div
                        style={{
                            animation: 'popupSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                        }}
                        className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-80 p-5 relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white border-[2px] border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                            title="Close"
                        >
                            <FaTimes className="text-sm" />
                        </button>

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4 pr-8">
                            <img
                                src={profile}
                                alt="Seenuvasan"
                                className="w-10 h-10 rounded-full object-cover border-[2px] border-black"
                            />
                            <div>
                                <p className="font-bold text-sm text-black">👋 Hey there!</p>
                                <p className="text-xs text-gray-600">Let's connect — I'd love to hear from you!</p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-2 border-[2px] border-black text-sm text-black bg-white outline-none focus:bg-yellow-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="p-2 border-[2px] border-black text-sm text-black bg-white outline-none focus:bg-yellow-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="p-2 border-[2px] border-black text-sm text-black bg-white outline-none focus:bg-yellow-50 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black font-bold text-sm py-2 border-[2px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
                            >
                                Send Message 🚀
                            </button>
                            {status && <p className="text-center text-xs font-bold">{status}</p>}
                        </form>
                    </div>
                )}

                {/* Profile Image Bubble — always visible after 60s */}
                <button
                    onClick={handleOpen}
                    title="Say Hi!"
                    className={`relative w-16 h-16 rounded-full border-[3px] border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#7db4ea] hover:scale-110 transition-transform cursor-pointer focus:outline-none ${!isOpen ? 'animate-profile-shake' : ''}`}
                    style={{ animation: !isOpen ? 'profileShake 1.2s ease-in-out infinite' : 'none' }}
                >
                    <img
                        src={profile}
                        alt="Say Hi"
                        className="w-full h-full object-cover scale-[1.15] translate-y-1"
                    />
                    {/* Pulsing ring */}
                    {!isOpen && (
                        <span className="absolute inset-0 rounded-full border-[3px] border-yellow-400 animate-ping opacity-60" />
                    )}
                </button>
            </div>

            {/* Keyframe styles */}
            <style>{`
                @keyframes profileShake {
                    0%, 100% { transform: rotate(0deg); }
                    15% { transform: rotate(-10deg); }
                    30% { transform: rotate(10deg); }
                    45% { transform: rotate(-8deg); }
                    60% { transform: rotate(8deg); }
                    75% { transform: rotate(-4deg); }
                    90% { transform: rotate(4deg); }
                }

                @keyframes popupSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes screenVibrate {
                    0%, 100% { transform: translate(0, 0); }
                    10% { transform: translate(-4px, -2px); }
                    20% { transform: translate(4px, 2px); }
                    30% { transform: translate(-3px, 3px); }
                    40% { transform: translate(3px, -3px); }
                    50% { transform: translate(-4px, 2px); }
                    60% { transform: translate(4px, -2px); }
                    70% { transform: translate(-2px, 4px); }
                    80% { transform: translate(2px, -4px); }
                    90% { transform: translate(-1px, 1px); }
                }

                .animate-screen-shake {
                    animation: screenVibrate 0.6s ease-in-out;
                }
            `}</style>
        </>
    );
};

export default ContactPopup;
