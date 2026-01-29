import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Blog", path: "/blog" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Career", path: "/career" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl">
            <div className="max-w-350 mx-auto px-25 flex justify-between items-center ">
                {/* Logo */}
                <NavLink to="/" end className="flex items-center">
                    <img src="/assets/logo1.png" alt="Logo" className="w-35" />
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-[10px] font-bold uppercase tracking-[0.2em] relative group transition-all ${isActive
                                    ? "text-(--color-yellow)"
                                    : "text-white/40 hover:text-(--color-green)"
                                }`
                            }
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 h-1px bg-(--color-green) w-0 group-hover:w-full transition-all duration-500" />
                        </NavLink>
                    ))}

                    <NavLink
                        to="/contact"
                        className="px-8 py-3 bg-(--color-green) text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-(--color-yellow) hover:text-black transition-all transform hover:scale-105 active:scale-95"
                    >
                        Start Project
                    </NavLink>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center bg-white/5 rounded-full"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black flex flex-col justify-center px-12 space-y-8 transition-all duration-700 ${isOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >

                {navLinks.map((link, idx) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-6xl font-bold text-white opacity-60 hover:opacity-100 hover:text-(--color-green) hover:italic hover:translate-x-4 transition-all duration-500"
                    >
                        {link.name}
                    </NavLink>
                ))}

                <NavLink
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-4 bg-(--color-green) text-color-black font-black uppercase tracking-[0.2em] rounded-full text-4xl text-center hover:bg-(--color-yellow) hover:text-black transition-all"
                >
                    Start Project
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
