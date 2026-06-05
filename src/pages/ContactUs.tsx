import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    rentalItems: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Connect this to your backend API or email handler (Formspree, EmailJS, etc.)
    console.log("Owambe Booking Request Data Submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="font-body bg-white rounded-2xl border border-cream-dark p-8 md:p-12 shadow-sm text-center max-w-2xl mx-auto my-12 animate-fade-in">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl text-gold">✨</span>
        </div>
        <h3 className="font-heading text-3xl text-burgundy mb-4">E ku itoju! (Thank You!)</h3>
        <p className="text-dark/90 font-light mb-6 leading-relaxed">
          We have received your event details. Our booking coordinator will review the availability of the items for your date and reach out to you via WhatsApp or phone within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-burgundy hover:text-burgundy-light transition-colors underline cursor-pointer"
        >
          Submit another request
        </button>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="font-body bg-white rounded-2xl border border-cream-dark p-6 md:p-10 shadow-sm max-w-3xl mx-auto my-12 antialiased">
        <div className="mb-8">
          <span className="text-xs font-semibold text-gold tracking-wider uppercase bg-cream px-3 py-1 rounded-full">
            Secure Your Date
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-burgundy mt-3 mb-2">
            Request a Rental Quote
          </h2>
          <p className="text-mid font-light text-sm md:text-base">
            Tell us about your upcoming Owambe, naming ceremony, or corporate event. We will handle the logistics.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-sm font-medium text-dark">
                Full Name <span className="text-burgundy">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g., Chioma Adebayo"
                className="w-full bg-cream/40 border border-cream-dark rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy placeholder:text-mid/50 text-sm md:text-base transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-dark">
                WhatsApp or Phone Number <span className="text-burgundy">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +234 803 123 4567"
                className="w-full bg-cream/40 border border-cream-dark rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy placeholder:text-mid/50 text-sm md:text-base transition-all duration-200"
              />
            </div>
          </div>

          {/* Row 2: Basic Contact & Meta */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-dark">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              className="w-full bg-cream/40 border border-cream-dark rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy placeholder:text-mid/50 text-sm md:text-base transition-all duration-200"
            />
          </div>

          {/* Row 3: Event Logistics Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="eventDate" className="text-sm font-medium text-dark">
                Event Date <span className="text-burgundy">*</span>
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full bg-cream/40 border border-cream-dark rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy text-sm md:text-base transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="guestCount" className="text-sm font-medium text-dark">
                Estimated Guest Count
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="e.g., 250"
                className="w-full bg-cream/40 border border-cream-dark rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy placeholder:text-mid/50 text-sm md:text-base transition-all duration-200"
              />
            </div>
          </div>

          {/* Rental Items Summary Field */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="rentalItems" className="text-sm font-medium text-dark">
              Requested Rental Items <span className="text-burgundy">*</span>
            </label>
            <textarea
              id="rentalItems"
              name="rentalItems"
              required
              rows={3}
              value={formData.rentalItems}
              onChange={handleChange}
              placeholder="e.g., 200 Chiavari chairs, 20 round tables, 2 premium canopies, 1 standby generator."
              className="w-full bg-cream/40 border border-cream-dark rounded-xl p-4 text-dark focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy placeholder:text-mid/50 text-sm md:text-base resize-y transition-all duration-200"
            />
          </div>

          {/* Additional Message notes */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-dark">
              Special Instructions / Delivery Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Share location specifics, layout preferences, or setup timeline requests..."
              className="w-full bg-cream/40 border border-cream-dark rounded-xl p-4 text-dark focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy placeholder:text-mid/50 text-sm md:text-base resize-y transition-all duration-200"
            />
          </div>

          {/* CTA Form submission button following 10% Gold focus rule */}
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-light text-dark font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] cursor-pointer text-center text-base md:text-lg mt-2"
          >
            Send Quote Request
          </button>
        </form>
      </div>
      <Footer />
    </>

  )
}













export default ContactUs