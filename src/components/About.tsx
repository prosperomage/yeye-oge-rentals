export default function About() {
    return (
        <section id="about" className="bg-cream font-body py-24 text-dark antialiased overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Visual Grid Column - Left */}
                    <div className="lg:col-span-5 relative">
                        {/* Structural design accent cards acting as content frames */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-2xl blur-xl pointer-events-none" />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-burgundy/5 rounded-full blur-2xl pointer-events-none" />

                        <div className="relative bg-white p-8 rounded-3xl border border-cream-dark shadow-sm space-y-6 z-10">
                            <div className="border-l-4 border-gold pl-4">
                                <h4 className="font-heading text-4xl text-burgundy">10+</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider text-mid">Years Styling Owambes</p>
                            </div>

                            <div className="border-l-4 border-burgundy pl-4">
                                <h4 className="font-heading text-4xl text-dark">1,200+</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider text-mid">Events Managed Successfully</p>
                            </div>

                            <div className="border-l-4 border-gold-light pl-4">
                                <h4 className="font-heading text-4xl text-burgundy-light">100%</h4>
                                <p className="text-xs font-semibold uppercase tracking-wider text-mid">Lagos & Out-of-State Delivery</p>
                            </div>
                        </div>
                    </div>

                    {/* Text/Content Column - Right */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <span className="text-xs font-semibold text-gold tracking-wider uppercase bg-white border border-cream-dark px-3 py-1 rounded-full shadow-sm">
                                The Heritage of Yeye Oge
                            </span>
                            <h2 className="font-heading text-4xl md:text-5xl text-burgundy mt-4 mb-2 tracking-wide leading-tight">
                                Crafting Unforgettable African Celebrations
                            </h2>
                        </div>

                        <p className="text-mid text-base md:text-lg font-light leading-relaxed">
                            At **Yeye Oge**, we believe that an Owambe is not just an event—it is a cultural tapestry of joy, prestige, and beautiful community connections. For over a decade, we have provided flawless event rentals to hosts who refuse to compromise on elegance.
                        </p>

                        <p className="text-dark/80 text-sm md:text-base font-light leading-relaxed">
                            From majestic high-peak marquee tents and gleaming gold Chiavari chairs to robust standby soundless generators, our premium inventory is meticulously polished and thoroughly checked before arriving at your venue. We strip the logistical stress from weddings, coronation anniversaries, and corporate galas, leaving you free to dance, celebrate, and look radiant.
                        </p>

                        <div className="pt-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-cream font-heading text-xl shadow-sm">
                                Y
                            </div>
                            <div>
                                <h5 className="font-semibold text-dark text-sm md:text-base">Premium Standards, Every Time</h5>
                                <p className="text-xs text-mid font-light">White-glove logistical drop-off and placement setup across Lagos.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

