"use client";

import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOptions,
} from "../lib/animations";

export default function Menu() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-burgundy to-brand-red text-white py-20">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl opacity-90">
            Fresh, delicious American comfort food prepared with love and the
            finest ingredients
          </p>
        </motion.div>
      </section>

      {/* Menu Navigation */}
      <section className="bg-white py-8 sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-8 overflow-x-auto">
            <a
              href="#breakfast"
              className="whitespace-nowrap text-brand-burgundy hover:text-brand-red font-semibold py-2 border-b-2 border-brand-red"
            >
              Breakfast
            </a>
            <a
              href="#lunch"
              className="whitespace-nowrap text-gray-600 hover:text-brand-red font-semibold py-2"
            >
              Lunch
            </a>
            <a
              href="#soups"
              className="whitespace-nowrap text-gray-600 hover:text-brand-red font-semibold py-2"
            >
              Soups
            </a>
            <a
              href="#kids"
              className="whitespace-nowrap text-gray-600 hover:text-brand-red font-semibold py-2"
            >
              Kids Menu
            </a>
          </nav>
        </div>
      </section>

      {/* Breakfast Section */}
      <section id="breakfast" className="py-16 bg-brand-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              🍳 Breakfast Favorites
            </h2>
            <p className="text-xl text-gray-700">
              Start your day right with our hearty breakfast selections
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            {/* Featured Breakfast Items */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-50 h-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/chicken-fried-steak.jpg"
                    alt="Chicken Fried Steak with Eggs and Hash Browns"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-burgundy mb-2">
                    Chicken Fried Steak with Eggs & Hash Browns
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Our signature dish! Tender chicken fried steak topped with
                    country gravy, served with two fresh eggs and crispy hash
                    browns.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-red font-semibold">$14.95</span>
                    <span className="bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Customer Favorite
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-50 h-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/breakfast-enchiladas.jpg"
                    alt="Breakfast Enchiladas Verde with fresh avocado"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-burgundy mb-2">
                    Breakfast Enchiladas Verde
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Scrambled eggs and cheese wrapped in soft tortillas, topped
                    with green salsa and served with fresh avocado and beans.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-red font-semibold">$12.50</span>
                    <span className="bg-brand-warm-brown text-white px-3 py-1 rounded-full text-sm">
                      Spicy
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-50 h-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/pancakes-waffles.jpg"
                    alt="Fluffy buttermilk pancakes and Belgian waffles"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-burgundy mb-2">
                    Fluffy Waffles & Pancakes
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Golden buttermilk pancakes or Belgian waffles served with
                    butter, syrup, and fresh berries. Kids love our special
                    Mouse-Eared Pancake!
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-red font-semibold">$9.95</span>
                    <span className="bg-brand-cream text-brand-burgundy px-3 py-1 rounded-full text-sm">
                      Kid Friendly
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-50 h-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/veggie-croissant.jpg"
                    alt="Fresh veggie croissant with cream cheese and herbs"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-burgundy mb-2">
                    Veggie Croissant
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Fresh vegetables, cream cheese, and herbs served on a
                    buttery croissant with a side of fruit and hash browns.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-red font-semibold">$11.25</span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      Vegetarian
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lunch Section */}
      <section id="lunch" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              🍽️ Lunch Specials
            </h2>
            <p className="text-xl text-gray-700">
              Satisfying lunch options for every appetite
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-brand-cream rounded-lg p-6"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🍔</div>
                <h3 className="text-lg font-bold text-brand-burgundy">
                  Classic Burgers
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-4">
                Juicy beef patties with fresh toppings and crispy fries
              </p>
              <div className="text-center text-brand-red font-semibold">
                From $13.95
              </div>
            </motion.div>

            <motion.div
              className="bg-brand-cream rounded-lg p-6"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🌯</div>
                <h3 className="text-lg font-bold text-brand-burgundy">
                  Fresh Wraps
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-4">
                Grilled chicken, turkey, or veggie wraps with crisp vegetables
              </p>
              <div className="text-center text-brand-red font-semibold">
                From $11.95
              </div>
            </motion.div>

            <motion.div
              className="bg-brand-cream rounded-lg p-6"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🥙</div>
                <h3 className="text-lg font-bold text-brand-burgundy">
                  Deli Sandwiches
                </h3>
              </div>
              <p className="text-gray-600 text-center mb-4">
                Premium meats and cheeses on fresh bread with house-made sides
              </p>
              <div className="text-center text-brand-red font-semibold">
                From $12.50
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Soups Section */}
      <section id="soups" className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              🍲 Soups & Comfort Food
            </h2>
            <p className="text-xl text-gray-700">
              Warm, hearty soups made from scratch daily
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-50 h-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/vegetable-beef-soup.jpg"
                    alt="Hearty vegetable beef soup with garlic bread"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-burgundy mb-2">
                    Vegetable Beef Soup with Garlic Bread
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Hearty homemade soup with tender beef, fresh vegetables, and
                    herbs. Served with warm, buttery garlic bread.
                  </p>
                  <span className="text-brand-red font-semibold">$10.95</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-50 h-50 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/menudo-pozole.jpg"
                    alt="Traditional menudo and pozole with avocado and egg"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-burgundy mb-2">
                    Menudo & Pozole with Avocado and Egg
                 </h3>
                  <p className="text-gray-600 mb-3">
                    Traditional Mexican soup with hominy and tender meat, topped
                    with fresh avocado and a perfectly cooked egg.
                  </p>
                  <span className="text-brand-red font-semibold">$13.95</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kids Menu */}
      <section id="kids" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-burgundy mb-4">
              🧒 Kids Menu
            </h2>
            <p className="text-xl text-gray-700">
              Delicious meals specially made for our little guests (12 & under)
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-yellow-50 border-4 border-yellow-200 rounded-xl p-6 text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl mb-3">🐭</div>
              <h3 className="text-lg font-bold text-brand-burgundy mb-2">
                Mouse-Eared Pancakes
              </h3>
              <p className="text-gray-600 mb-3">
                Two fun pancakes shaped like mouse ears with syrup and butter
              </p>
              <span className="text-brand-red font-semibold text-lg">
                $7.95
              </span>
            </motion.div>

            <motion.div
              className="bg-blue-50 border-4 border-blue-200 rounded-xl p-6 text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl mb-3">🍟</div>
              <h3 className="text-lg font-bold text-brand-burgundy mb-2">
                Chicken Tenders & Fries
              </h3>
              <p className="text-gray-600 mb-3">
                Crispy chicken tenders with golden fries and ranch dipping sauce
              </p>
              <span className="text-brand-red font-semibold text-lg">
                $8.95
              </span>
            </motion.div>

            <motion.div
              className="bg-green-50 border-4 border-green-200 rounded-xl p-6 text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl mb-3">🧀</div>
              <h3 className="text-lg font-bold text-brand-burgundy mb-2">
                Grilled Cheese & Fruit
              </h3>
              <p className="text-gray-600 mb-3">
                Classic grilled cheese sandwich served with fresh seasonal fruit
              </p>
              <span className="text-brand-red font-semibold text-lg">
                $6.95
              </span>
            </motion.div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-gray-600 italic">
              All kids meals include a choice of milk, juice, or soft drink
            </p>
          </div>
        </div>
      </section>

      {/* Appetizers */}
      <section className="py-16 bg-brand-burgundy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8">
            🌶️ Appetizers & Starters
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-brand-red bg-opacity-20 rounded-lg p-6"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h3 className="text-2xl font-bold mb-3">Jalapeño Poppers</h3>
              <p className="mb-3 opacity-90">
                Fresh jalapeños stuffed with cream cheese, breaded and fried to
                perfection. Served with ranch dipping sauce.
              </p>
              <span className="text-brand-gold font-semibold text-lg">
                $8.95
              </span>
            </motion.div>

            <motion.div
              className="bg-brand-red bg-opacity-20 rounded-lg p-6"
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <h3 className="text-2xl font-bold mb-3">Loaded Potato Skins</h3>
              <p className="mb-3 opacity-90">
                Crispy potato skins loaded with cheese, bacon, and green onions.
                Served with sour cream.
              </p>
              <span className="text-brand-gold font-semibold text-lg">
                $9.95
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-warm-brown text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            Hungry? Let's Get You Fed!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Come taste why our customers keep coming back for more. We're ready
            to serve you fresh, delicious food at great prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Visit Our Restaurant
            </Link>
            <a
              href="tel:+15306617502"
              className="btn-outline border-white text-white hover:bg-white hover:text-brand-warm-brown"
            >
              Call for Takeout: (530) 661-7502
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
