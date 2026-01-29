import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { textContainer, letterAnimation } from "../animations/text.js";
import ClientsSection from "./ClientsSection.jsx";
import About from "./About.jsx";
import Services from "../components/Services.jsx";

/* Diagonal fade */
const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

export default function Home() {
    const heroRef = useRef(null);

    // 1 Section refs array
    const sectionRefs = useRef([]);

    // 2 Automatic scroll
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < sectionRefs.current.length) {
                sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1000); // 6 seconds per section

        return () => clearInterval(interval);
    }, []);

    // 3️⃣ Hero scroll animations
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <main className="bg-white text-black overflow-hidden">

            {/* HERO */}
            <section
                ref={(el) => {
                    heroRef.current = el;
                    sectionRefs.current[0] = el;
                }}
                className="min-h-screen flex flex-col justify-center px-6 lg:px-20"
            >
                {/* TOP TEXT */}
                <motion.div
                    style={{ y: heroY, scale: heroScale }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <motion.h1 className="text-6xl font-bold leading-tight mt-10">
                        <motion.div
                            variants={textContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap justify-center"
                        >
                            {"Driving Measurable Online Growth"
                                .split("")
                                .map((char, i) => (
                                    <motion.span key={i} variants={letterAnimation}>
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                        </motion.div>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        className="mt-6 text-lg text-gray-700"
                    >
                        Scrollfuel Digital Marketing Agency helps brands grow online through data-driven SEO, paid ads, social media, and high-performance websites. We focus on measurable results, quality leads, and sustainable revenue growth.
                    </motion.p>

                    <motion.button
                        variants={fadeUp}
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 px-8 py-3 bg-(--color-green) font-semibold rounded-full flex items-center gap-2 mx-auto"
                    >
                        Get Started <ArrowRight />
                    </motion.button>
                </motion.div>

                {/* BOTTOM ILLUSTRATIONS */}
                <div className="mt-16 flex justify-between items-center w-full">
                    {/* All your motion images stay the same */}
                    <motion.img
                        src="/assets/hero/desktop.png"
                        alt="Screen"
                        className="absolute bottom-80 right-10 w-55 drop-shadow-xl"
                        initial={{ opacity: 0, y: -300, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    />
                    <motion.img
                        src="/assets/hero/setting.png"
                        alt="Gear"
                        className="absolute top-110 right-20 w-30 h-30"
                        initial={{ opacity: 0, x: "100vw", scale: 0.6 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    />
                    <motion.img
                        src="/assets/hero/mobile.png"
                        alt="Mobile"
                        className="absolute top-125 right-56 w-30 h-30"
                        initial={{ opacity: 0, y: "100vh", scale: 0.6 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                    />
                    <motion.img
                        src="/assets/hero/like.png"
                        alt="Like"
                        className="absolute top-110 right-70 w-17.5 "
                        initial={{ opacity: 0, x: -40, y: -40, rotate: -15, scale: 0.6 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                    />
                    <motion.img
                        src="/assets/hero/mike.png"
                        alt="Mike"
                        className="absolute top-120 right-110 w-60 h-60"
                        initial={{ opacity: 0, y: "100vh", rotate: -15, scale: 0.6 }}
                        animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 2.0 }}
                    />
                    <motion.img
                        src="/assets/hero/gmail.png"
                        alt="Gear"
                        className="absolute top-150 right-200 w-37.5"
                        initial={{ opacity: 0, y: "100vh", scale: 0.6 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
                    />
                    <motion.img
                        src="/assets/hero/search.png"
                        alt="Gear"
                        className="absolute top-150 right-240 w-37.5"
                        initial={{ opacity: 0, y: "-100vh", scale: 0.6 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                    />
                    <motion.img
                        src="/assets/hero/laptop.png"
                        alt="Gear"
                        className="absolute top-100 right-280 w-80.5 h-80"
                        initial={{ opacity: 0, x: "-100vw", scale: 0.6 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    />
                </div>
            </section>

            {/* CLIENTS */}
            <ClientsSection ref={(el) => (sectionRefs.current[1] = el)} />

            {/* SERVICES */}
            <Services ref={(el) => (sectionRefs.current[2] = el)} />

            {/* ABOUT */}
            <About ref={(el) => (sectionRefs.current[3] = el)} />

            {/* CTA */}
            <section
                ref={(el) => (sectionRefs.current[4] = el)}
                className="py-32 px-6 lg:px-20 bg-(--color-green)"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to scale your brand?
                    </h2>

                    <p className="text-lg mb-10">
                        Let’s build something impactful and conversion-focused.
                    </p>

                    <a href="/contact">
                        <button className="px-10 py-4 bg-black text-white rounded-full font-semibold">
                            Contact Us
                        </button>
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
