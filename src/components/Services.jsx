import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services.js";
import { letterAnimation, rotateLetterAnimation, textContainer } from "../animations/text.js";
/* ICON COMPONENT */
const ServiceIcon = ({ type }) => {

    const icons = {
        Video: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M10 9L15 12L10 15V9Z" />
                <path d="M2 8H22M2 16H22" strokeOpacity="0.3" />
            </svg>
        ),
        Palette: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
                <path d="M12 2V6M12 18V22M2 12H6M18 12H22" strokeOpacity="0.4" />
            </svg>
        ),
        Instagram: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
        ),
        Code: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <path d="M16 18L22 12L16 6" />
                <path d="M8 6L2 12L8 18" />
                <path d="M13 4L11 20" strokeOpacity="0.5" />
            </svg>
        ),
        TrendingUp: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
                <path d="M16 7H22V13" />
                <path d="M2 4V20H20" strokeOpacity="0.3" />
            </svg>
        ),
        FileText: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
                <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" />
                <path d="M14 2V8H20" />
                <path d="M8 13H16M8 17H16M8 9H10" strokeOpacity="0.4" />
            </svg>
        ),
    };

    return icons[type] || icons.FileText;
};

/* SERVICES SECTION */

const Services = () => {
    const navigate = useNavigate();
    return (
        <section id="services" className="py-20 bg-dark text-white relative">

            {/* <motion.h2
                variants={textContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-bold text-3xl pb-10 text-center text-white"
            >
                {"Everything Your Brand Needs".split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterAnimation}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2> */}
            {/* <motion.h2
                variants={textContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-bold text-3xl pb-10 text-center text-white"
            >
                {"Everything Your Brand Needs".split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={rotateLetterAnimation}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2> */}
            <motion.h2
                className="font-bold text-3xl pb-10 text-center text-white flex justify-center flex-wrap gap-0.5"
            >
                {"Everything Your Brand Needs".split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        animate={{ rotateY: [0, 60] }} // full 3D rotation
                        transition={{
                            repeat: Infinity,      
                            duration: 4,           
                            delay: index * 0.05,   
                            ease: "linear",        
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.h2>

            <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/15 border border-white/10 rounded-3xl overflow-hidden">
                    {services.map((ser, idx) => (
                        <div
                            key={ser.slug}
                            onClick={() => navigate(`/services/${ser.slug}`)}
                            className="group p-12 bg-dark hover:bg-neutral-900/40 transition-all duration-700 cursor-pointer relative overflow-hidden"
                        >
                            {/* corner accent */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover-border-primary transition-colors" />

                            <div className="relative z-10 space-y-10">
                                {/* icon */}
                                <div className="text-secondary group-hover-text-primary group-hover:scale-110 transition-all duration-500">
                                    <ServiceIcon type={ser.icon} />
                                </div>

                                {/* text */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold tracking-tight text-secondary group-hover-text-primary transition-colors">
                                        {ser.title}
                                    </h3>

                                    <p className="text-muted text-sm leading-relaxed font-light line-clamp-3 group-hover:text-gray-300 transition-colors">
                                        {ser.description}
                                    </p>
                                </div>

                                {/* footer */}
                                <div className="pt-4 flex items-center justify-between">
                                    {/* <span className="text-[9px] font-black tracking-widest uppercase text-white/80 group-hover:text-primary/70 transition-colors">
                                        Solution 0{idx + 1}
                                    </span> */}

                                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-all">
                                        <div className="w-1 h-1 bg-secondary group-hover-bg-primary transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
