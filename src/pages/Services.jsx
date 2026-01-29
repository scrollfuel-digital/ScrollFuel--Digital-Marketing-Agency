import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";

/* ---------------- INTRO / CONTACT CARD ---------------- */

const ContactCard = () => {
    return (
        <div className="text-black max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-6">
            <h1 className="text-5xl font-semibold ">
                Our Services
            </h1>

            <p className="text-black/80 text-lg leading-relaxed max-w-2xl ">
                At ScrollFuel, we create digital solutions that go beyond visuals.
                Our work helps brands communicate clearly, connect with the right
                audience, and deliver measurable results. Whether you’re building
                something new or strengthening an existing presence, we support
                your growth at every stage.
            </p>

        </div>
    );
};


const ServiceCard = ({ service, onClick }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            layout
            onClick={onClick}
            className="bg-white rounded-3xl max-w-6xl w-full grid lg:grid-cols-2 overflow-hidden cursor-pointer"
            style={{ height: expanded ? "80vh" : "70vh" }}
        >
            {/* IMAGE */}
            <div className="bg-black flex items-center justify-center">
                <img
                    src={service.illustration}
                    alt={service.title}
                    className="w-full h-full object-cover px-14"
                />
            </div>

            {/* CONTENT */}
            <div
                className="px-14 flex flex-col justify-center items-center text-center"
                style={{ background: service.bg }}
            >
                <motion.h2
                    layout
                    className="text-4xl font-bold mb-4"
                    style={{ color: service.text }}
                >
                    {service.title}
                </motion.h2>

                <motion.p
                    layout
                    className="max-w-md mx-auto text-sm mb-6"
                    style={{ color: service.text }}
                >
                    {service.description}
                </motion.p>

                {/* KEYWORDS – COLLAPSED VIEW */}
                {!expanded && (
                    <div className="flex flex-wrap justify-center gap-3 max-w-md mb-6">
                        {service.keywords?.map((keyword, i) => (

                            <motion.span
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                className="
        px-4 py-1 text-xs
         bg-black/10
        rounded
        text-black
        
        backdrop-blur-sm
        hover:bg-black
        hover:text-white
        transition
    "
                            >
                                {keyword}
                            </motion.span>

                        ))}
                    </div>
                )}

                {/* EXPANDED KEYWORDS SECTION */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="mt-8 max-w-md"
                        >
                            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide text-black">
                                What we cover
                            </h4>

                            <div className="flex flex-wrap justify-center gap-3">
                                {service.keywords?.map((keyword, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-1 text-xs border border-black rounded-full text-black hover:bg-black hover:text-white transition"
                                    >
                                        {keyword}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
/* ---------------- MAIN PAGE ---------------- */

const Services = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    const totalCards = services.length + 1;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            ref={containerRef}
            className="relative bg-white "
            style={{ height: `${totalCards * 90}vh` }}
        >
            {/* STICKY VIEWPORT */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">

                    {/* INTRO SECTION */}
                    <motion.div
                        style={{
                            y: useTransform(
                                scrollYProgress,
                                [0, 1 / totalCards],
                                ["0%", "-70%"]
                            ),
                        }}
                        className="absolute inset-0 flex items-center justify-center px-6 "
                    >
                        <ContactCard />
                    </motion.div>

                    {/* SERVICE CARDS */}
                    {services.map((service, index) => {
                        const start = (index + 1) / totalCards;
                        const end = (index + 2) / totalCards;

                        const y = useTransform(
                            scrollYProgress,
                            [start, end],
                            ["80%", "0%"]
                        );

                        const opacity = useTransform(
                            scrollYProgress,
                            [start - 0.02, start],
                            [0, 1]
                        );

                        return (
                            <motion.div
                                key={service.slug}
                                style={{
                                    y,
                                    opacity,
                                    pointerEvents:
                                        opacity === 0 ? "none" : "auto",
                                }}
                                className="absolute inset-0 flex items-center justify-center px-6"
                            >
                                <ServiceCard
                                    service={service}
                                    onClick={() =>
                                        navigate(`/services/${service.slug}`)
                                    }
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
