"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hydroponic1 from '../../public/images/facilities/hydroponic1.jpg'
import Crop from '../../public/images/facilities/crop.jpg'
import Chicken from '../../public/images/gallery/chicken.jpg'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 -z-10 pointer-events-none"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Nigeria's Premier Agricultural Excellence
              </h1>
              
              <p className="text-lg text-neutral-700 mb-8">
                We are premier producers of agricultural products providing the highest quality of customer service, education and value to strengthen our customers, company and agricultural community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/wholesale" className="btn btn-primary" style={{ position: 'relative', zIndex: 3, pointerEvents: 'auto' }}>
                  Inquire Now
                </Link>
                <Link href="/about" className="btn btn-outline" style={{ position: 'relative', zIndex: 3, pointerEvents: 'auto' }}>
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Yutaka Farm"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Premium Products</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600">
              Discover our range of high-quality agricultural products, grown and raised with sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={Hydroponic1}
                  alt="Hydroponic Vegetables"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Hydroponic Vegetables</h3>
                <p className="text-neutral-600 mb-4">
                  Fresh, pesticide-free vegetables grown in our state-of-the-art hydroponic greenhouse.
                </p>
                <Link href="/products#hydroponic" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={Chicken}
                  alt="Livestock & Animal Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Livestock & Animal Products</h3>
                <p className="text-neutral-600 mb-4">
                  Ethically raised livestock and animal products from our farm with focus on quality.
                </p>
                <Link href="/products#livestock" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={Crop}
                  alt="Crop Production"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Crop Production</h3>
                <p className="text-neutral-600 mb-4">
                  Staple crops including beans, maize grain, soybean, rice, and cassava grown sustainably.
                </p>
                <Link href="/products#crops" className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Yutaka Farm Quality?</h2>
            <p className="text-xl mb-8">
              Discover our premium agricultural products and services. Place a wholesale inquiry today.
            </p>
            <Link href="/wholesale" className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-3">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
