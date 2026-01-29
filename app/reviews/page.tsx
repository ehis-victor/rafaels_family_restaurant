import Layout from '../components/Layout'
import Link from 'next/link'

export default function Reviews() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-gold to-brand-burgundy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">⭐⭐⭐⭐⭐</div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Customer Reviews
          </h1>
          <div className="text-2xl font-semibold mb-2">4.6 out of 5 stars</div>
          <p className="text-xl opacity-90">
            Based on 333 genuine customer reviews from our community
          </p>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-burgundy mb-8">
              What Our Customers Love Most
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-brand-cream rounded-xl p-6">
              <div className="text-3xl text-brand-red mb-3">🍽️</div>
              <h3 className="text-xl font-bold text-brand-burgundy mb-2">Excellent Service</h3>
              <p className="text-gray-600">
                Customers consistently praise our fast, friendly service and attentive staff
              </p>
            </div>

            <div className="text-center bg-brand-cream rounded-xl p-6">
              <div className="text-3xl text-brand-red mb-3">😋</div>
              <h3 className="text-xl font-bold text-brand-burgundy mb-2">Delicious Food</h3>
              <p className="text-gray-600">
                Fresh ingredients and generous portions keep our customers coming back for more
              </p>
            </div>

            <div className="text-center bg-brand-cream rounded-xl p-6">
              <div className="text-3xl text-brand-red mb-3">💰</div>
              <h3 className="text-xl font-bold text-brand-burgundy mb-2">Good Value</h3>
              <p className="text-gray-600">
                Great quality food at reasonable prices that families can afford
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-brand-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              Real Reviews from Real Customers
            </h2>
            <p className="text-xl text-gray-700">
              Here's what members of our Woodland community are saying about Rafael's
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-brand-gold text-xl">★★★★★</div>
                <div className="ml-3">
                  <div className="font-semibold text-brand-burgundy">Sarah M.</div>
                  <div className="text-sm text-gray-600">Woodland Local</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "This place is a hidden gem! The chicken fried steak is absolutely amazing - 
                crispy on the outside, tender on the inside, and that gravy is to die for. 
                The staff is incredibly friendly and the prices are very reasonable. 
                My family comes here every weekend now!"
              </blockquote>
              <div className="text-sm text-gray-500">Verified Customer • 2 weeks ago</div>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-brand-gold text-xl">★★★★★</div>
                <div className="ml-3">
                  <div className="font-semibold text-brand-burgundy">Mike R.</div>
                  <div className="text-sm text-gray-600">Regular Customer</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Best breakfast in Woodland, hands down! I've been coming here for months 
                and the quality is always consistent. The hash browns are perfectly crispy, 
                eggs cooked exactly how I like them, and the coffee is great too. 
                Fast service even when they're busy."
              </blockquote>
              <div className="text-sm text-gray-500">Verified Customer • 1 month ago</div>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-brand-gold text-xl">★★★★★</div>
                <div className="ml-3">
                  <div className="font-semibold text-brand-burgundy">Jennifer K.</div>
                  <div className="text-sm text-gray-600">Mom of 3</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Rafael's is our family's go-to restaurant! The kids love the mouse-eared 
                pancakes and the adults love the generous portions and home-style cooking. 
                The atmosphere is warm and welcoming - perfect for families. 
                Great value for the money!"
              </blockquote>
              <div className="text-sm text-gray-500">Verified Customer • 3 weeks ago</div>
            </div>

            {/* Review 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-brand-gold text-xl">★★★★★</div>
                <div className="ml-3">
                  <div className="font-semibold text-brand-burgundy">Carlos D.</div>
                  <div className="text-sm text-gray-600">Woodland Resident</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "The menudo here is authentic and delicious - reminds me of my grandmother's recipe! 
                The pozole is also excellent. It's great to have a local place that serves 
                quality Mexican dishes alongside American comfort food. 
                The service is always friendly and quick."
              </blockquote>
              <div className="text-sm text-gray-500">Verified Customer • 2 months ago</div>
            </div>

            {/* Review 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-brand-gold text-xl">★★★★★</div>
                <div className="ml-3">
                  <div className="font-semibold text-brand-burgundy">Anna T.</div>
                  <div className="text-sm text-gray-600">First-time Visitor</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "Stopped by during a road trip and was pleasantly surprised! 
                The veggie croissant was fresh and flavorful, and the staff was very accommodating. 
                The restaurant was clean and had a cozy, family-friendly atmosphere. 
                Will definitely stop here again when passing through!"
              </blockquote>
              <div className="text-sm text-gray-500">Verified Customer • 1 week ago</div>
            </div>

            {/* Review 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="text-brand-gold text-xl">★★★★★</div>
                <div className="ml-3">
                  <div className="font-semibold text-brand-burgundy">Robert L.</div>
                  <div className="text-sm text-gray-600">Senior Citizen</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "As someone who eats out frequently, I appreciate good service and fair prices. 
                Rafael's delivers on both! The portions are generous, the food tastes homemade, 
                and the staff treats everyone like family. The breakfast enchiladas are my favorite - 
                perfect amount of spice!"
              </blockquote>
              <div className="text-sm text-gray-500">Verified Customer • 5 days ago</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes from Reviews */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-8">
            Most Mentioned Dishes in Reviews
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-2">🥩</div>
              <div className="font-semibold text-brand-burgundy mb-1">Chicken Fried Steak</div>
              <div className="text-sm text-gray-600">Featured in 45+ reviews</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-2">🥞</div>
              <div className="font-semibold text-brand-burgundy mb-1">Mouse-Eared Pancakes</div>
              <div className="text-sm text-gray-600">Featured in 32+ reviews</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-2">🌮</div>
              <div className="font-semibold text-brand-burgundy mb-1">Breakfast Enchiladas</div>
              <div className="text-sm text-gray-600">Featured in 28+ reviews</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl mb-2">🍜</div>
              <div className="font-semibold text-brand-burgundy mb-1">Menudo & Pozole</div>
              <div className="text-sm text-gray-600">Featured in 22+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-8">
            Customer Satisfaction Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-warm-white rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-red mb-2">96%</div>
              <div className="text-sm text-gray-600 mb-1">Customers rate us</div>
              <div className="font-semibold text-brand-burgundy">4+ Stars</div>
            </div>

            <div className="bg-brand-warm-white rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-red mb-2">89%</div>
              <div className="text-sm text-gray-600 mb-1">Would recommend to</div>
              <div className="font-semibold text-brand-burgundy">Friends & Family</div>
            </div>

            <div className="bg-brand-warm-white rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-red mb-2">92%</div>
              <div className="text-sm text-gray-600 mb-1">Say they'll</div>
              <div className="font-semibold text-brand-burgundy">Return Soon</div>
            </div>

            <div className="bg-brand-warm-white rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-red mb-2">94%</div>
              <div className="text-sm text-gray-600 mb-1">Rate our service as</div>
              <div className="font-semibold text-brand-burgundy">Excellent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-burgundy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Ready to See What Everyone's Talking About?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the hundreds of satisfied customers who have made Rafael's their favorite dining spot. 
            Come taste why we have such great reviews!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Visit Our Restaurant
            </Link>
            <a href="tel:+15306617502" className="btn-outline border-white text-white hover:bg-white hover:text-brand-burgundy">
              Call to Order: (530) 661-7502
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}