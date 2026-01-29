import { motion } from "framer-motion";
import {
    Target,
    Eye,
    TrendingUp,
    ShieldCheck,
    BarChart3,
    Users
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export default function AboutUs() {
    return (
        <section className="bg-white text-black overflow-hidden">

            {/* HERO SECTION */}
            <div className="relative min-h-[85vh] flex items-center">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute -top-24 -left-24 w-105 h-105 bg-primary rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-120 h-120 bg-secondary rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="text-black max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-6">
                    <h1 className="text-5xl font-semibold ">
                        About us
                    </h1>

                    <p className="text-black/80 text-lg leading-relaxed max-w-2xl ">
                        Scrollfuel Digital Marketing Agency is a growth-focused digital marketing company committed to helping businesses succeed online. Our approach combines creativity, technology, and analytics to deliver measurable digital marketing results. Scrollfuel Digital Marketing Agency is a growth-focused digital marketing company helping brands win online through strategy, creativity, and performance-driven execution.
                    </p>

                </div>
            </div>

            {/* VISION & MISSION */}
            <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Eye size={36} className="text-primary mb-4" />
                    <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-black/75 text-lg">
                        To become a trusted digital marketing agency delivering sustainable business growth through ethical and performance-driven strategies.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                >
                    <Target size={36} className="text-primary mb-4" />
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-black/75 text-lg">
                        To help brands increase visibility, engagement, and conversions using data-driven digital marketing solutions.
                    </p>
                </motion.div>
            </div>

            {/* FOUNDER STORY */}
            {/* <div className="bg-primary py-28">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-primary to-transparent rounded-3xl" />
                        <div className="relative bg-white rounded-3xl p-10 shadow-xl">
                            <TrendingUp size={40} className="text-primary mb-6" />
                            <h2 className="text-3xl font-semibold mb-6">Founder Story</h2>
                            <p className="text-black/75 text-lg leading-relaxed">
                                Scrollfuel Digital Marketing Agency was founded with one clear belief.
                                Marketing should deliver measurable results, not vanity metrics.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p className="text-black/75 text-lg mb-6">
                            Every brand has a growth story. Our role is to fuel it with smart strategy and sharp execution.
                        </p>
                        <p className="text-black/75 text-lg">
                            Traffic that converts. Campaigns that scale. Results you can measure.
                        </p>
                    </motion.div>
                </div>
            </div> */}

            {/* VALUES */}
            <div className="max-w-7xl mx-auto px-6 py-28">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl font-semibold text-center"
                >
                    Our Digital Marketing Values
                </motion.h2>

                <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Transparency & Accountability",
                            text: "Clear communication and honest reporting."
                        },
                        {
                            icon: BarChart3,
                            title: "ROI-Driven Marketing",
                            text: "Every decision is tied to business impact."
                        },
                        {
                            icon: TrendingUp,
                            title: "Continuous Optimization",
                            text: "We test, learn, and improve constantly."
                        },
                        {
                            icon: Users,
                            title: "Client-First Growth",
                            text: "Your success is our benchmark."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
                        >
                            <item.icon size={34} className="mx-auto text-primary mb-5" />
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-black/75">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>


        </section>
    );
}
