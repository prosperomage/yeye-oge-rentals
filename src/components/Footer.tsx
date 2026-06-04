import { Link } from "react-router-dom";
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-cream font-body mt-20 border-t border-cream-dark/10 antialiased">
            <div className="container mx-auto px-6 py-16">

                {/* Top Section */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Column */}
                    <div>
                        <h2 className="font-heading text-4xl text-gold mb-4 tracking-wide">
                            Yeye Oge
                        </h2>
                        <p className="text-cream-dark/80 font-light leading-relaxed text-sm md:text-base">
                            Premium event rentals for weddings, birthdays,
                            naming ceremonies, corporate events, and unforgettable
                            owambes across Lagos and beyond.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="font-semibold text-gold tracking-wider text-sm uppercase mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-cream-dark/90 font-light">
                            <li>
                                <Link to="/" className="hover:text-gold transition-colors duration-200 block py-0.5">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/inventory" className="hover:text-gold transition-colors duration-200 block py-0.5">
                                    Inventory
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gold transition-colors duration-200 block py-0.5">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gold transition-colors duration-200 block py-0.5">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="hover:text-gold transition-colors duration-200 block py-0.5">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-semibold text-gold tracking-wider text-sm uppercase mb-5">
                            Our Rentals
                        </h3>
                        <ul className="space-y-3 text-cream-dark/80 font-light">
                            <li className="hover:text-cream transition-colors duration-200 cursor-default">Event Chairs</li>
                            <li className="hover:text-cream transition-colors duration-200 cursor-default">Tables</li>
                            <li className="hover:text-cream transition-colors duration-200 cursor-default">Canopies</li>
                            <li className="hover:text-cream transition-colors duration-200 cursor-default">Decorations</li>
                            <li className="hover:text-cream transition-colors duration-200 cursor-default">Generators</li>
                            <li className="hover:text-cream transition-colors duration-200 cursor-default">Lighting Equipment</li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-semibold text-gold tracking-wider text-sm uppercase mb-5">
                            Contact Us
                        </h3>
                        <div className="space-y-4 text-cream-dark/90 font-light text-sm md:text-base">
                            <div className="flex items-center gap-3 group">
                                <FaPhoneAlt className="text-gold group-hover:scale-110 transition-transform duration-200" />
                                <a href="tel:+2340000000000" className="hover:text-gold transition-colors duration-200">+234 XXX XXX XXXX</a>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <FaEnvelope className="text-gold group-hover:scale-110 transition-transform duration-200" />
                                <a href="mailto:hello@yeyeoge.com" className="hover:text-gold transition-colors duration-200">hello@yeyeoge.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-gold" />
                                <span>Lagos, Nigeria</span>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                aria-label="WhatsApp Profile"
                                className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center text-cream hover:bg-gold hover:text-dark transform hover:-translate-y-1 transition-all duration-200 shadow-inner"
                            >
                                <FaWhatsapp className="text-lg" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram Profile"
                                className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center text-cream hover:bg-gold hover:text-dark transform hover:-translate-y-1 transition-all duration-200 shadow-inner"
                            >
                                <FaInstagram className="text-lg" />
                            </a>
                            <a
                                href="#"
                                aria-label="Facebook Profile"
                                className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center text-cream hover:bg-gold hover:text-dark transform hover:-translate-y-1 transition-all duration-200 shadow-inner"
                            >
                                <FaFacebookF className="text-base" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider Line */}
                <div className="border-t border-burgundy-light/30 my-10" />

                {/* Bottom Legal Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm text-cream-dark/60 font-light">
                    <p>
                        &copy; {new Date().getFullYear()} Yeye Oge. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-gold transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="hover:text-gold transition-colors duration-200">
                            Terms of Service
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;