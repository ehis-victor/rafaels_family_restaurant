"use client";

import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportOptions,
} from "../lib/animations";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-cream to-brand-warm-white py-20 lg:py-32">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl lg:text-6xl font-serif font-bold text-brand-burgundy mb-6">
            Our Family Story
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Welcome to Rafael's Family Restaurant, where every meal is prepared with love 
            and served with genuine hospitality in the heart of Woodland, California.
          </p>
        </motion.div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Story Content */}
            <motion.div variants={staggerItem}>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-6">
                A Family Tradition of Great Food
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Since opening our doors, Rafael's Family Restaurant has been more than just a place to eat—
                  it's been a gathering place for families, friends, and neighbors in the Woodland community.
                </p>
                <p>
                  Our journey began with a simple vision: to create a warm, welcoming space where people 
                  could enjoy delicious, home-style American comfort food at prices that won't break the bank. 
                  Located in the bustling Purity Plaza on Main Street, we've been proud to serve 
                  our community with the same passion and dedication from day one.
                </p>
                <p>
                  What started as a dream has blossomed into a beloved local institution, earning us a 
                  4.6-star rating from over 333 happy customers who have made us part of their daily routine.
                </p>
              </div>
            </motion.div>

            {/* Family Image */}
            <motion.div className="relative" variants={staggerItem}>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/family-restaurant.jpg"
                  alt="Rafael's Family Restaurant - Family owned and operated, serving Woodland since day one"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our commitment to quality, value, and community sets us apart
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div
              className="text-center bg-white rounded-xl p-6 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl text-brand-red mb-4">🏡</div>
              <h3 className="text-xl font-serif font-bold text-brand-burgundy mb-3">
                Family Atmosphere
              </h3>
              <p className="text-gray-600">
                We create a warm, welcoming environment where everyone feels like family. 
                From solo diners to large groups, all are welcome.
              </p>
            </motion.div>

            <motion.div
              className="text-center bg-white rounded-xl p-6 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl text-brand-red mb-4">🥘</div>
              <h3 className="text-xl font-serif font-bold text-brand-burgundy mb-3">
                Comfort Food
              </h3>
              <p className="text-gray-600">
                Our menu features beloved American classics prepared from scratch with 
                fresh ingredients and time-honored recipes.
              </p>
            </motion.div>

            <motion.div
              className="text-center bg-white rounded-xl p-6 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl text-brand-red mb-4">👥</div>
              <h3 className="text-xl font-serif font-bold text-brand-burgundy mb-3">
                Friendly Service
              </h3>
              <p className="text-gray-600">
                Our experienced team is dedicated to providing fast, friendly service 
                that makes every visit memorable and enjoyable.
              </p>
            </motion.div>

            <motion.div
              className="text-center bg-white rounded-xl p-6 shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl text-brand-red mb-4">🌟</div>
              <h3 className="text-xl font-serif font-bold text-brand-burgundy mb-3">
                Community First
              </h3>
              <p className="text-gray-600">
                As a local business, we're committed to supporting our Woodland community 
                and being a positive presence in our neighborhood.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-700">
              We're open daily and ready to serve you breakfast, lunch, or dinner
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Location Info */}
            <motion.div className="bg-brand-cream rounded-xl p-8" variants={staggerItem}>
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy mb-6">
                📍 Find Us Here
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="font-semibold text-brand-red min-w-0 w-20">Address:</div>
                  <div>9 Main St STE 107, Woodland, CA 95695</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="font-semibold text-brand-red min-w-0 w-20">Located:</div>
                  <div>Purity Plaza</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="font-semibold text-brand-red min-w-0 w-20">Plus Code:</div>
                  <div>M6H8+9M Woodland, California, USA</div>
                </div>
              </div>
            </motion.div>

            {/* Contact & Hours */}
            <motion.div className="bg-brand-cream rounded-xl p-8" variants={staggerItem}>
              <h3 className="text-2xl font-serif font-bold text-brand-burgundy mb-6">
                📞 Contact & Hours
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="font-semibold text-brand-red min-w-0 w-16">Phone:</div>
                  <div>
                    <a href="tel:+15306617502" className="hover:text-brand-red transition-colors">
                      (530) 661-7502
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="font-semibold text-brand-red min-w-0 w-16">Hours:</div>
                  <div>Open daily at 7:00 AM</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="font-semibold text-brand-red min-w-0 w-16">Services:</div>
                  <div>Dine-in • Takeaway • Delivery</div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="font-semibold text-brand-red min-w-0 w-16">Price:</div>
                  <div>$10–$20 per person</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Customer Rating */}
      <section className="py-16 bg-brand-burgundy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={scaleIn}
          >
            <div className="text-6xl text-brand-gold mb-4">⭐⭐⭐⭐⭐</div>
            <div className="text-4xl font-serif font-bold mb-2">4.6 out of 5 stars</div>
            <div className="text-xl opacity-90">Based on 333 customer reviews</div>
          </motion.div>
          
          <motion.div
            className="bg-brand-red bg-opacity-20 rounded-2xl p-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUp}
          >
            <blockquote className="text-xl italic mb-4">
              "Rafael's is our go-to family restaurant! The food is always fresh, the service is 
              excellent, and the prices are very reasonable. The chicken fried steak is the best 
              in town, and our kids love the mouse-eared pancakes!"
            </blockquote>
            <cite className="font-semibold">— A Happy Woodland Family</cite>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-warm-brown text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Ready to Become Part of Our Family?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the hundreds of satisfied customers who have made Rafael's their favorite dining spot. 
            We can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-secondary">
              View Our Menu
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-brand-warm-brown">
              Visit Us Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}