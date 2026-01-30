"use client";

import Layout from "./components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportOptions,
} from "./lib/animations";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/family-restaurant.jpg)",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              className="text-center lg:text-left text-white"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
                Welcome to Rafael's
                <span className="block text-brand-gold text-2xl lg:text-3xl mt-2">
                  Family Restaurant
                </span>
              </h1>
              <p className="text-xl mb-8 max-w-2xl opacity-95">
                Experience the warmth of family dining with delicious American
                comfort food, served fresh daily in our cozy Woodland location.
              </p>

              {/* Rating Badge */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
                <div className="flex items-center space-x-1">
                  <span className="text-brand-gold text-2xl">★★★★★</span>
                  <span className="text-lg font-semibold">4.6</span>
                </div>
                <span className="text-gray-200">(333 reviews)</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary text-center">
                  Visit Us Today
                </Link>
                <a href="tel:+15306617502" className="btn-outline text-center">
                  Call to Order: (530) 661-7502
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative hidden lg:block"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <img
                src="/images/hero-food-image.jpg"
                alt="Delicious food served fresh daily at Rafael's Family Restaurant"
                className="aspect-square rounded-2xl object-cover shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Restaurant Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-8">
            A Family Tradition Since Day One
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Located in the heart of Woodland, Rafael's Family Restaurant has
            been serving the community with authentic American comfort food and
            genuine hospitality. From our hearty breakfast favorites to
            satisfying lunch options, every dish is prepared with love and the
            finest ingredients.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy text-center mb-12">
            Why Choose Rafael's?
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Great Food */}
            <motion.div
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl text-brand-red mb-4">🍳</div>
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy mb-4">
                Great Food
              </h3>
              <p className="text-gray-700">
                Fresh ingredients, time-honored recipes, and generous portions
                make every meal memorable. From our famous Chicken Fried Steak
                to fluffy pancakes, taste the difference quality makes.
              </p>
            </motion.div>

            {/* Fast Service */}
            <motion.div
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl text-brand-red mb-4">⚡</div>
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy mb-4">
                Fast Service
              </h3>
              <p className="text-gray-700">
                We respect your time. Our experienced team ensures quick,
                efficient service without compromising on quality. Perfect for
                busy mornings and lunch breaks.
              </p>
            </motion.div>

            {/* Fair Pricing */}
            <motion.div
              className="text-center bg-white rounded-xl p-8 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl text-brand-red mb-4">💰</div>
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy mb-4">
                Fair Pricing
              </h3>
              <p className="text-gray-700">
                Enjoy exceptional value with meals ranging from $10–$20 per
                person. Great food shouldn't break the bank, and at Rafael's, it
                doesn't have to.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Dishes Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              Customer Favorites
            </h2>
            <p className="text-xl text-gray-700">
              Discover why these dishes keep our guests coming back
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-brand-cream rounded-lg p-6 text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-3">🥩</div>
              <h4 className="font-semibold text-brand-burgundy mb-2">
                Chicken Fried Steak
              </h4>
              <p className="text-sm text-gray-600">with Eggs & Hash Browns</p>
            </motion.div>
            <motion.div
              className="bg-brand-cream rounded-lg p-6 text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-3">🥞</div>
              <h4 className="font-semibold text-brand-burgundy mb-2">
                Fluffy Pancakes
              </h4>
              <p className="text-sm text-gray-600">
                Kids love our Mouse-Eared special!
              </p>
            </motion.div>
            <motion.div
              className="bg-brand-cream rounded-lg p-6 text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-3">🌮</div>
              <h4 className="font-semibold text-brand-burgundy mb-2">
                Breakfast Enchiladas
              </h4>
              <p className="text-sm text-gray-600">
                Verde style with fresh avocado
              </p>
            </motion.div>
            <motion.div
              className="bg-brand-cream rounded-lg p-6 text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl mb-3">🥗</div>
              <h4 className="font-semibold text-brand-burgundy mb-2">
                Veggie Croissant
              </h4>
              <p className="text-sm text-gray-600">Fresh and satisfying</p>
            </motion.div>
          </motion.div>

          <div className="text-center">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-burgundy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Ready for a Delicious Meal?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join us at Rafael's Family Restaurant for breakfast, lunch, or
            dinner. We're open daily at 7:00 AM in Purity Plaza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Get Directions
            </Link>
            <a
              href="tel:+15306617502"
              className="btn-outline border-white text-white hover:bg-white hover:text-brand-burgundy"
            >
              Call (530) 661-7502
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
