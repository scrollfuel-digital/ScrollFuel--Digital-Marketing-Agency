import { Phone, Mail, MailOpen } from 'lucide-react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="max-w-6xl mx-auto px-1">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col pb-5">
                        <NavLink to="/" end className="flex items-center">
                            <img src="/assets/logo1.png" alt="Logo" className="w-45 " />
                        </NavLink>
                        {/* <span className="w-45 h-1 bg-primary rounded-full"></span> */}
                    </div>
                    <div className="flex flex-col items-end gap-4 mr-4">
                        <div className="flex gap-3 ">
                            <a href="https://www.instagram.com/" target="_blank" className="  cursor-pointer ">
                                {/* <Twitter size={24} /> */}
                                <img src="/assets/insta.png" alt="" width="40px" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" className="  cursor-pointer ">
                                {/* <Twitter size={24} /> */}
                                <img src="/assets/linkdin1.png" alt="" width="40px" />
                            </a>
                            <a href="https://in.pinterest.com/" target="_blank" className="  cursor-pointer ">
                                {/* <Twitter size={24} /> */}
                                <img src="/assets/pinterest.png" alt="" width="40px" />
                            </a>
                            <a href="https://www.behance.net/" target="_blank" className=" cursor-pointer ">
                                {/* <Twitter size={24} /> */}
                                <img src="/assets/behance.png" alt="" width="40px" />
                            </a>
                        </div>
                        {/* <span className="w-50 h-1 bg-primary rounded-full "></span> */}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-30 text-sm">
                    {/* Brand / Address */}
                    <div>
                        <span className="font-semibold text-lg text-white ">Address</span>
                        <p className="text-muted mt-3 font-bold">
                            Bidoba Sahkari Sanstha, Plot no 133, Wardha
                            Road, Near Hotel Center Point, Bante Layout,
                            Sonegaon, Ujwal Nagar, Nagpur-440022
                        </p>
                        <a
                            href="https://maps.app.goo.gl/oQfiqBwaEo6xyFYYA"
                            target="_blank"
                            className="inline-block mt-4 text-primary hover-text-secondary transition font-bold pb-2"
                        >
                            Find on Map →
                        </a>
                    </div>
                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-lg mb-3">Company</h4>
                        <ul className="space-y-3 text-muted">
                            <li><a href="/" className="hover-text-primary font-bold">Home</a></li>
                            <li><a href="/about" className="hover-text-primary font-bold">About</a></li>
                            <li><a href="/blog" className="hover-text-primary font-bold">Blog</a></li>
                            <li><a href="/portfolio" className="hover-text-primary font-bold">Portfolio</a></li>
                            <li><a href="/career" className="hover-text-primary font-bold">Career</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-lg mb-3">Services</h4>
                        <ul className="space-y-3 text-muted">
                            <li><a href="/services/seo-ppc-marketing" className="hover-text-primary font-bold">SEO & PPC Marketing</a></li>
                            <li><a href="/services/social-media-strategy" className="hover-text-primary font-bold">Social Media Strategy</a></li>
                            <li><a href="/services/content-strategy" className="hover-text-primary font-bold">Content Strategy</a></li>
                            <li><a href="/services/web-development" className="hover-text-primary font-bold">Web Development</a></li>
                            {/* <li><a href="/services/branding-design" className="hover-text-primary">Branding & Design</a></li> */}
                            <li><a href="/services/videography-photography" className="hover-text-primary font-bold">More....</a></li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact</h4>
                        <ul className="space-y-3 font-bold">
                            <li className="flex items-center gap-2 text-muted">
                                <Phone size={16} className=" text-primary" />
                                <span className='hover-text-primary'>+91 8788430110</span>
                            </li>
                            <li className="relative pl-7 text-muted font-bold">
                                <Mail size={16} className="absolute left-0 top-1 text-primary" />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=scrollfuel@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover-text-primary "
                                >
                                    scrollfuel@gmail.com
                                </a>
                            </li>

                            <li className="relative pl-7 text-muted">
                                <Mail size={16} className="absolute left-0 top-1 text-primary" />
                                <a
                                    href="mailto:scrollfueldigital@gmail.com"
                                    className="hover-text-primary"
                                >
                                    scrollfueldigital@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs font-bold text-muted">
                    © {new Date().getFullYear()} ScrollFuel Digital Marketing Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
