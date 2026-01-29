import React from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
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
                className="text-gray-700 hover:text-brand-red transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-red transition-colors duration-200 font-medium"
              >
                About
              </Link>
              <Link
                href="/menu"
                className="text-gray-700 hover:text-brand-red transition-colors duration-200 font-medium"
              >
                Menu
              </Link>
              <Link
                href="/reviews"
                className="text-gray-700 hover:text-brand-red transition-colors duration-200 font-medium"
              >
                Reviews
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-brand-red transition-colors duration-200 font-medium"
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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call to Order</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-brand-red focus:outline-none focus:text-brand-red"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-brand-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant Info */}
            <div>
              <div className="text-2xl font-serif font-bold text-brand-gold mb-4">
                Rafael's Family Restaurant
              </div>
              <p className="text-gray-300 mb-4">
                Serving delicious American comfort food in a warm, family-friendly atmosphere since day one.
              </p>
              <div className="flex items-center space-x-1 text-brand-gold">
                <span className="text-lg">★★★★★</span>
                <span className="ml-2 text-sm">4.6 (333 reviews)</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact & Hours</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 9 Main St STE 107, Woodland, CA 95695</p>
                <p>📞 (530) 661-7502</p>
                <p>🕒 Open daily at 7:00 AM</p>
                <p>🏢 Located in Purity Plaza</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <div className="space-y-2 text-gray-300">
                <p>🍽️ Dine-in</p>
                <p>🥡 Takeaway</p>
                <p>🚚 Delivery</p>
                <p>💰 $10–$20 per person</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Rafael's Family Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}