import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import FAQ from '../components/FAQ'
import { Link } from 'react-router-dom'
import About from '../components/About'

const Home = () => {
    return (
        <div className="font-body bg-cream text-dark antialiased">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-burgundy min-h-[80vh] flex items-center relative overflow-hidden">
                <div className="container mx-auto px-4 py-16 relative z-10">

                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-cream mb-6 tracking-wide leading-tight">
                        Make Your Owambe Shine
                    </h1>

                    <p className="font-body text-xl md:text-2xl text-cream-dark max-w-xl mb-8 font-light leading-relaxed">
                        Premium chairs, tables, canopies, generators and décor for
                        weddings, naming ceremonies and corporate events.
                    </p>

                    <div className="flex flex-wrap gap-4 font-body">
                        <Link to='/inventory'>
                            <Button>
                                Browse Inventory
                            </Button>
                        </Link>

                        <Button variant="outline">
                            WhatsApp Us
                        </Button>
                    </div>

                </div>

                {/* Subtle design accent mimicking structural elegance */}
                <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl pointer-events-none"></div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-cream-dark/30">
                <FAQ />
            </section>
            {/* about section */}
            <About />


            <Footer />
        </div>
    )
}

export default Home