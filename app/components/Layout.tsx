"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenuContainer, mobileMenuItem, fadeInDown } from "../lib/animations";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Navigation Header */}
      <motion.header
        className="bg-white shadow-md sticky top-0 z-50"
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-serif font-bold text-brand-burgundy">
                Rafael's
              </div>
              <div className="text-sm text-brand-warm-brown font-medium">
                Family Restaurant
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className={`font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? "text-brand-burgundy border-b-2 border-brand-red"
                    : "text-gray-700 hover:text-brand-red"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActive("/about")
                    ? "text-brand-burgundy border-b-2 border-brand-red"
                    : "text-gray-700 hover:text-brand-red"
                }`}
              >
                About
              </Link>
              <Link
                href="/menu"
                className={`font-medium transition-colors duration-200 ${
                  isActive("/menu")
                    ? "text-brand-burgundy border-b-2 border-brand-red"
                    : "text-gray-700 hover:text-brand-red"
                }`}
              >
                Menu
              </Link>
              <Link
                href="/reviews"
                className={`font-medium transition-colors duration-200 ${
                  isActive("/reviews")
                    ? "text-brand-burgundy border-b-2 border-brand-red"
                    : "text-gray-700 hover:text-brand-red"
                }`}
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-colors duration-200 ${
                  isActive("/contact")
                    ? "text-brand-burgundy border-b-2 border-brand-red"
                    : "text-gray-700 hover:text-brand-red"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Call to Action */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+15306617502"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call to Order</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-brand-red focus:outline-none focus:text-brand-red"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-b shadow-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuContainer}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
              <motion.div variants={mobileMenuItem}>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded font-medium transition-colors ${
                    isActive("/")
                      ? "bg-brand-cream text-brand-burgundy"
                      : "text-gray-700 hover:bg-brand-cream"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={mobileMenuItem}>
                <Link
                  href="/about"
                  className={`block py-2 px-3 rounded font-medium transition-colors ${
                    isActive("/about")
                      ? "bg-brand-cream text-brand-burgundy"
                      : "text-gray-700 hover:bg-brand-cream"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={mobileMenuItem}>
                <Link
                  href="/menu"
                  className={`block py-2 px-3 rounded font-medium transition-colors ${
                    isActive("/menu")
                      ? "bg-brand-cream text-brand-burgundy"
                      : "text-gray-700 hover:bg-brand-cream"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
              </motion.div>
              <motion.div variants={mobileMenuItem}>
                <Link
                  href="/reviews"
                  className={`block py-2 px-3 rounded font-medium transition-colors ${
                    isActive("/reviews")
                      ? "bg-brand-cream text-brand-burgundy"
                      : "text-gray-700 hover:bg-brand-cream"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </Link>
              </motion.div>
              <motion.div variants={mobileMenuItem}>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 rounded font-medium transition-colors ${
                    isActive("/contact")
                      ? "bg-brand-cream text-brand-burgundy"
                      : "text-gray-700 hover:bg-brand-cream"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={mobileMenuItem}>
                <a
                  href="tel:+15306617502"
                  className="btn-primary block text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📞 Call to Order
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-dark-brown text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Rafael's Family Restaurant",
              image: "/images/hero-food-image.jpg",
              description:
                "Serving delicious American comfort food in a warm, family-friendly atmosphere since day one.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9 Main St STE 107",
                addressLocality: "Woodland",
                addressRegion: "CA",
                postalCode: "95695",
                addressCountry: "US",
              },
              telephone: "+15306617502",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "07:00",
                closes: "21:00",
              },
              priceRange: "$10-$20",
              servesCuisine: "American",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.6",
                reviewCount: "333",
              },
              sameAs: ["https://www.google.com/maps", "https://www.yelp.com"],
            }),
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant Info */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">
                Rafael's Family Restaurant
              </h2>
              <p className="text-gray-300 mb-4">
                Serving delicious American comfort food in a warm,
                family-friendly atmosphere since day one.
              </p>
              <div
                className="flex items-center space-x-1 text-brand-gold"
                itemProp="aggregateRating"
                itemScope
                itemType="https://schema.org/AggregateRating"
              >
                <span className="text-lg">★★★★★</span>
                <span className="ml-2 text-sm">
                  <span itemProp="ratingValue">4.6</span> (
                  <span itemProp="reviewCount">333</span> reviews)
                </span>
              </div>
            </section>

            {/* Contact Info */}
            <section>
              <h3 className="text-lg font-semibold mb-4">Contact & Hours</h3>
              <address className="space-y-2 text-gray-300 not-italic">
                <p>
                  📍{" "}
                  <span
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                  >
                    <span itemProp="streetAddress">9 Main St STE 107</span>,{" "}
                    <span itemProp="addressLocality">Woodland</span>,{" "}
                    <span itemProp="addressRegion">CA</span>{" "}
                    <span itemProp="postalCode">95695</span>
                  </span>
                </p>
                <p>
                  📞{" "}
                  <a href="tel:+15306617502" itemProp="telephone">
                    (530) 661-7502
                  </a>
                </p>
                <p>🕒 Open daily at 7:00 AM</p>
                <p>🏢 Located in Purity Plaza</p>
              </address>
            </section>

            {/* Services */}
            <section>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>🍽️ Dine-in</li>
                <li>🥡 Takeaway</li>
                <li>🚚 Delivery</li>
                <li itemProp="priceRange">💰 $10–$20 per person</li>
              </ul>
            </section>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Rafael's Family Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
