import Layout from '../components/Layout'
import Link from 'next/link'

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-warm-brown to-brand-burgundy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Visit Us Today
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Located in the heart of Woodland at Purity Plaza. We're open daily at 7:00 AM 
            and ready to serve you delicious food with warm hospitality.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-burgundy mb-8">
                Restaurant Information
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-red text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-burgundy mb-2">Address</h3>
                    <p className="text-gray-700 text-lg">
                      9 Main St STE 107<br />
                      Woodland, CA 95695<br />
                      United States
                    </p>
                    <p className="text-brand-warm-brown font-medium mt-2">
                      📍 Located in Purity Plaza
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Google Plus Code: M6H8+9M Woodland, California, USA
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-red text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-burgundy mb-2">Phone</h3>
                    <a 
                      href="tel:+15306617502" 
                      className="text-lg text-brand-red hover:text-brand-burgundy transition-colors font-semibold"
                    >
                      (530) 661-7502
                    </a>
                    <p className="text-gray-600 mt-1">
                      Perfect for takeout orders and reservations
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-red text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-burgundy mb-2">Hours</h3>
                    <p className="text-lg text-gray-700 font-medium">
                      Open Daily at 7:00 AM
                    </p>
                    <p className="text-gray-600 mt-1">
                      Serving breakfast, lunch, and dinner
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 space-y-4">
                <a 
                  href="tel:+15306617502" 
                  className="btn-primary w-full text-center block"
                >
                  📞 Call to Order: (530) 661-7502
                </a>
                <a 
                  href="https://www.google.com/maps/dir//9+Main+St+STE+107,+Woodland,+CA+95695" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center block"
                >
                  🗺️ Get Directions
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-burgundy mb-8">
                Find Us on the Map
              </h2>
              
              {/* Embedded Map */}
              <div className="bg-brand-cream rounded-xl p-6 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-brand-burgundy to-brand-red rounded-lg shadow-inner flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-lg opacity-90 mb-4">
                      Rafael's Family Restaurant
                    </p>
                    <p className="text-sm opacity-80">
                      9 Main St STE 107, Woodland, CA 95695
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a 
                    href="https://www.google.com/maps/place/9+Main+St+STE+107,+Woodland,+CA+95695"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:text-brand-burgundy font-semibold"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Location Features */}
              <div className="mt-8 bg-brand-warm-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-brand-burgundy mb-4">
                  Location Features
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Easy Parking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Wheelchair Accessible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Family Friendly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Air Conditioned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-8">
            How We Serve You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl text-brand-red mb-4">🍽️</div>
              <h3 className="text-xl font-bold text-brand-burgundy mb-3">Dine-In</h3>
              <p className="text-gray-600">
                Enjoy a comfortable meal in our warm, family-friendly dining room. 
                Perfect for breakfast meetings, family dinners, or a quick lunch.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl text-brand-red mb-4">🥡</div>
              <h3 className="text-xl font-bold text-brand-burgundy mb-3">Takeaway</h3>
              <p className="text-gray-600">
                Call ahead for quick pickup. All our delicious meals are carefully 
                packaged to maintain quality and temperature.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-4xl text-brand-red mb-4">🚚</div>
              <h3 className="text-xl font-bold text-brand-burgundy mb-3">Delivery</h3>
              <p className="text-gray-600">
                Can't make it to us? We'll come to you! Ask about our delivery 
                options for the Woodland area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-6">
            Affordable Family Dining
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Great food doesn't have to be expensive. Most of our meals range from $10–$20 per person, 
            making Rafael's perfect for families, students, and anyone looking for quality food at fair prices.
          </p>
          
          <div className="bg-brand-warm-white rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-4xl text-brand-gold mb-4">💰</div>
            <div className="text-2xl font-bold text-brand-burgundy mb-2">$10 – $20 per person</div>
            <div className="text-lg text-gray-600 mb-4">Average meal price including drink</div>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span>✓ Kids meals from $6.95</span>
              <span>•</span>
              <span>✓ Senior-friendly portions</span>
              <span>•</span>
              <span>✓ Great value</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Rating */}
      <section className="py-16 bg-brand-burgundy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="text-5xl text-brand-gold mb-4">⭐⭐⭐⭐⭐</div>
            <div className="text-3xl font-serif font-bold mb-2">Join 333 Happy Customers</div>
            <div className="text-xl opacity-90">Average rating: 4.6 out of 5 stars</div>
          </div>
          
          <div className="bg-brand-red bg-opacity-20 rounded-2xl p-8 max-w-2xl mx-auto">
            <blockquote className="text-xl italic mb-4">
              "The perfect neighborhood restaurant! Great food, friendly service, and prices 
              that won't break the bank. Rafael's has become our family's regular spot."
            </blockquote>
            <cite className="font-semibold">— Happy Woodland Family</cite>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-brand-warm-brown text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            We Can't Wait to Serve You!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're craving a hearty breakfast, satisfying lunch, or comfortable dinner, 
            Rafael's Family Restaurant is ready to welcome you with delicious food and warm hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15306617502" className="btn-secondary">
              📞 Call Now: (530) 661-7502
            </a>
            <Link href="/menu" className="btn-outline border-white text-white hover:bg-white hover:text-brand-warm-brown">
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}