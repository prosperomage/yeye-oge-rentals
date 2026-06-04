import { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenu, HiX } from "react-icons/hi"
import Button from "./Button"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-cream border-b border-cream-dark font-body sticky top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">

                {/* Logo utilizing DM Serif Display */}
                <Link to="/">
                    <h2 className="font-heading text-3xl md:text-4xl text-gold hover:text-gold-light transition-colors duration-200">
                        Yeye Oge
                    </h2>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8 font-medium text-dark">
                    <Link to="/" className="hover:text-burgundy transition-colors duration-200">Home</Link>
                    <Link to="/inventory" className="hover:text-burgundy transition-colors duration-200">Inventory</Link>
                    <Link to="/about" className="hover:text-burgundy transition-colors duration-200">About</Link>
                    <Link to="/contact" className="hover:text-burgundy transition-colors duration-200">Contact</Link>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Button>
                        Get Quote
                    </Button>
                </div>

                {/* Mobile Menu Trigger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl text-burgundy focus:outline-none cursor-pointer p-1"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Navigation Drawer Dropdown */}
            <div
                className={`md:hidden bg-white border-b border-cream-dark px-4 transition-all duration-300 ease-in-out ${isOpen ? "max-h-100 py-6 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="flex flex-col gap-5 font-medium text-dark text-lg">
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-burgundy border-b border-cream/40 pb-2 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/inventory"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-burgundy border-b border-cream/40 pb-2 transition-colors duration-200"
                    >
                        Inventory
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-burgundy border-b border-cream/40 pb-2 transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="hover:text-burgundy border-b border-cream/40 pb-2 transition-colors duration-200"
                    >
                        Contact
                    </Link>

                    {/* Centered Mobile CTA Button */}
                    <div className="pt-2">
                        <Button >
                            Get Quote
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar