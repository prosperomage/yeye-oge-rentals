import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { inventoryProducts } from "../data/products";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

;

// Extract distinct available category metrics for filter options buttons
const ITEMS_PER_PAGE = 5;

const CATEGORIES = ["All", ...Array.from(new Set(inventoryProducts.map((i) => i.category)))];

export default function inventoryPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState<number>(1);

    // 1. First, handle our filtration step
    const filteredItems = selectedCategory === "All"
        ? inventoryProducts
        : inventoryProducts.filter((item) => item.category === selectedCategory);

    // 2. Next, calculate real-time pagination limits
    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

    // Slice the filtered dataset to show only the slice for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayedItems = filteredItems.slice(startIndex, endIndex);

    // Helper to handle category changes and force reset page view tracking
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Crucial: Resets back to page 1
    };

    const handleQuickAdd = (itemId: string) => {
        console.log(`Quick-adding item ${itemId} straight into state managers.`);
    };


    return (
        <div>
            <Navbar />
            <main className="min-h-screen bg-cream font-body text-dark py-16 antialiased">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Editorial Heading Section */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-semibold text-gold tracking-wider uppercase bg-white border border-cream-dark px-3 py-1 rounded-full shadow-sm">
                            Premium Catalog
                        </span>
                        <h1 className="font-heading text-4xl md:text-6xl text-burgundy mt-4 mb-3">
                            Our Rental Inventory
                        </h1>
                        <p className="text-mid font-light text-sm md:text-base leading-relaxed">
                            Browse our pristine collection of structural canopies, seating arrangements, heavy-duty power setups, and cooling solutions ready for your next event.
                        </p>
                    </div>

                    {/* Dynamic Category Filtering Row */}
                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
                        {CATEGORIES.map((category) => {
                            const isActive = selectedCategory === category;
                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() => handleCategoryChange(category)}
                                    className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                                            ? "bg-burgundy text-cream shadow-sm scale-[1.02]"
                                            : "bg-white text-dark border border-cream-dark hover:border-mid/40 hover:bg-cream/40"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    {/* Responsive Grid Displaying sliced view segments */}
                    {displayedItems.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                                {displayedItems.map((item) => (
                                    <Card
                                        key={item.id}
                                        item={item}
                                        onAddToQuote={handleQuickAdd}
                                    />
                                ))}
                            </div>

                            {/* Pagination Controls Wrapper Bar */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-12 border-t border-cream-dark/60 pt-8">
                                    {/* Previous Button */}
                                    <button
                                        type="button"
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                        className="w-10 h-10 rounded-xl bg-white border border-cream-dark text-dark flex items-center justify-center transition-all hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                        aria-label="Previous Page"
                                    >
                                        <HiChevronLeft className="text-lg" />
                                    </button>

                                    {/* Numbered Page List Chips */}
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
                                        const isCurrent = currentPage === pageNumber;
                                        return (
                                            <button
                                                key={pageNumber}
                                                type="button"
                                                onClick={() => setCurrentPage(pageNumber)}
                                                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all cursor-pointer ${isCurrent
                                                        ? "bg-burgundy text-cream shadow-sm"
                                                        : "bg-white text-dark border border-cream-dark hover:border-mid/40 hover:bg-cream/40"
                                                    }`}
                                            >
                                                {pageNumber}
                                            </button>
                                        );
                                    })}

                                    {/* Next Button */}
                                    <button
                                        type="button"
                                        disabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                        className="w-10 h-10 rounded-xl bg-white border border-cream-dark text-dark flex items-center justify-center transition-all hover:bg-cream disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                                        aria-label="Next Page"
                                    >
                                        <HiChevronRight className="text-lg" />
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center p-12 bg-white rounded-2xl border border-cream-dark max-w-md mx-auto">
                            <p className="text-mid font-light">No gear found matching this category profile setup.</p>
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    )
}