import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Link } from 'lucide-react';
import { useRef } from "react";
import { textContainer, letterAnimation } from "../animations/text.js";
import ClientsSection from "./ClientsSection.jsx";
import About from "./About.jsx";
// import { services } from "../data/services.js";
import Services from "../components/Services.jsx";
const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <main className="bg-white text-black overflow-hidden">
            {/* HERO */}
            <section
                ref={heroRef}
                className="min-h-screen flex items-center relative px-6 lg:px-20"
            >
                <motion.div
                    style={{ y: heroY, scale: heroScale }}
                    className=" flex justify-center items-center w-full"
                >
                    <div className="text-center flex flex-col items-center">
                        <motion.h1
                            className="text-3xl lg:text-5xl font-bold leading-tight"
                        >
                            {/* Line 1 */}
                            {/* <motion.div
                                variants={textContainer}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-wrap"
                            >
                                {"Scrollfuel Digital Marketing Agency".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={letterAnimation}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.div> */}

                            {/* Line 2 */}
                            <motion.div
                                variants={textContainer}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-wrap mt-1"
                            >
                                {"Driving Measurable Online Growth".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={letterAnimation}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 text-lg text-gray-700 max-w-xl text-center"
                        >
                            Scrollfuel Digital Marketing Agency helps brands grow online through data-driven SEO, paid ads, social media, and high-performance websites. We focus on measurable results, quality leads, and sustainable revenue growth.

                        </motion.p>

                        <motion.button
                            variants={fadeUp}
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.05 }}
                            className="mt-8 px-8 py-4 bg-(--color-green) text-black font-semibold rounded-full flex items-center space-x-2 gap-1"
                        >
                            Get Started <ArrowRight />
                        </motion.button>
                    </div>

                    {/* HERO ILLUSTRATION */}
                    {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className=""
            >
              <img src="/assets/illustrations/seo.jpg" alt="" width="300px" height="10px" />
            </motion.div>
          </motion.div> */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: -1200, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut",
                            }}
                            className=""
                        >
                            <img
                                src="/assets/illustrations/seo.jpg"
                                alt="SEO Illustration"
                                className="w-75 h-auto"
                            />
                        </motion.div>
                    </motion.div> */}

                </motion.div>
            </section>
            {/* Client */}
            <section className="">
                <ClientsSection />
            </section>

            {/* SERVICES */}
            <section>
                <Services />
            </section>

            {/* <section className="py-32 px-6 lg:px-20 bg-black text-white">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-20"
                >
                    What we do best
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        "SEO & Growth",
                        "Paid Advertising",
                        "Brand & Web Design",
                    ].map((service, i) => (
                        <motion.div
                            key={service}
                            variants={fadeUp}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white text-black p-8 rounded-2xl relative overflow-hidden"
                        >
                            <div className="h-24 mb-6 bg-(--color-green) rounded-xl flex items-center justify-center">
                                Illustration
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{service}</h3>
                            <p className="text-gray-700">
                                Strategic execution focused on results, conversions, and long
                                term growth.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* PROCESS */}
            {/* <section className="py-32 px-6 lg:px-20">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-20"
                >
                    How we work
                </motion.h2>

                <div className="space-y-24">
                    {[
                        "Research & Strategy",
                        "Execution & Optimization",
                        "Scale & Growth",
                    ].map((step, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col lg:flex-row gap-12 items-center"
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold mb-4">{step}</h3>
                                <p className="text-gray-700">
                                    Every decision is driven by data, testing, and measurable
                                    performance.
                                </p>
                            </div>

                            <motion.div
                                animate={{ rotate: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 5 }}
                                className="flex-1 h-64 bg-(--color-yellow) rounded-3xl flex items-center justify-center"
                            >
                                Illustration
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section> */}
            {/* Testimonial */}
            
            {/*  */}
            {/* About Us */}
            <section>
                <About />
            </section>
            {/* CTA */}
            <section className="py-32 px-6 lg:px-20 bg-(--color-green) text-black">
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
                        Let’s build something impactful, animated, and conversion-focused.
                    </p>
                    <button className="px-10 py-4 bg-black text-white rounded-full font-semibold">
                       <a href="/contact">Contact Us</a> 
                    </button>
                </motion.div>
            </section>
        </main>
    );
}
