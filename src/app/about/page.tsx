"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import About from '../../../public/images/facilities/about.jpg'
import Hydroponic2 from '../../../public/images/facilities/hydroponic2.jpg'
import Snail from '../../../public/images/facilities/snail.jpg'
import Crop from '../../../public/images/facilities/crop.jpg'


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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
            alt="Background Pattern" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                About Yutaka Farm
              </motion.h1>
              
              <motion.div 
                className="w-24 h-1 bg-primary mx-auto mb-6"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 96 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.div>
              
              <motion.p 
                className="text-lg text-neutral-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Nigeria and Africa's farmer preferred farm and agro-allied company, delivering agricultural excellence and exceptional customer service across the region.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src={About} 
                alt="Yutaka Farm Story" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold text-neutral-900 mb-4"
                variants={fadeInUp}
              >
                Our Story
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-primary mb-6"
                variants={fadeInUp}
              ></motion.div>
              
              <motion.p 
                className="text-neutral-600 mb-4"
                variants={fadeInUp}
              >
                Yutaka Farm was established with a clear vision to revolutionize agricultural practices in Nigeria and across Africa. Our journey began with a commitment to sustainable farming practices, innovation, and a deep understanding of the local agricultural landscape.
              </motion.p>
              
              <motion.p 
                className="text-neutral-600 mb-4"
                variants={fadeInUp}
              >
                Over the years, we have grown from a small-scale farm to one of Nigeria's preferred agricultural producers, serving individual customers, businesses, and partners with premium products and services.
              </motion.p>
              
              <motion.p 
                className="text-neutral-600"
                variants={fadeInUp}
              >
                Today, Yutaka Farm stands as a testament to agricultural excellence, with diverse operations including hydroponic greenhouses, livestock production, crop cultivation, and a food mart that brings fresh produce directly to consumers.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Our Vision & Mission</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              Guided by clear principles and goals that drive our commitment to agricultural excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Our Vision</h3>
              <p className="text-neutral-600 mb-4 flex-grow">
                Our Vision at Yutaka Farms is to be Nigeria and Africa's Farmer preferred Farm and agro-allied company with excellence in creating customer value, servicing our customer's needs, and maintaining a dedicated, talented, reliable staff.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Our Mission</h3>
              <p className="text-neutral-600 mb-4 flex-grow">
                We are premier producers of Agricultural products and provide the highest quality of customer service, education and value in an effort to strengthen our customers, company and agricultural community. We strive to connect the supply of our products from our producers to meet the steady needs of our end-users.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Our Core Values</h3>
              <ul className="text-neutral-600 space-y-2 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  We operate with respect and dignity for customers and co-workers
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  We maintain open and honest relationships with all parties
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  We are self-motivated to pursue personal growth and learning
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  We provide the most reliable and accurate information accessible
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  We are responsible stewards of others, our land, and our communities
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities & Operations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Our Facilities & Operations</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              Explore our diverse farm sections, each designed to deliver premium agricultural products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facility 1: Hydroponic Greenhouse */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-56">
                <Image 
                  src={Hydroponic2} 
                  alt="Hydroponic Greenhouse" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Hydroponic Greenhouse</h3>
                <p className="text-neutral-600 mb-4">
                  Our state-of-the-art hydroponic greenhouse produces fresh, high-quality vegetables year-round, using modern sustainable farming techniques.
                </p>
              </div>
            </motion.div>

            {/* Facility 2: Livestock */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative h-56">
                <Image 
                  src={Snail} 
                  alt="Livestock Facilities" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Livestock Facilities</h3>
                <p className="text-neutral-600 mb-4">
                  Our livestock operations include goat farming, snail farming, and fish ponds, all managed with the highest standards of animal welfare and quality.
                </p>
              </div>
            </motion.div>

            {/* Facility 3: Butchery & Abattoir */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-56">
                <Image 
                  src="https://tse3.mm.bing.net/th?id=OIP.dWEkY9z5yLPEKUsJExINaAHaEK&pid=Api&P=0&h=220" 
                  alt="Butchery & Abattoir" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Butchery & Abattoir</h3>
                <p className="text-neutral-600 mb-4">
                  Our modern butchery and abattoir facilities ensure the highest standards of hygiene and quality in processing our livestock products.
                </p>
              </div>
            </motion.div>

            {/* Facility 4: Food Mart & Groceries */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative h-56">
                <Image 
                  src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Food Mart & Groceries" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Food Mart & Groceries</h3>
                <p className="text-neutral-600 mb-4">
                  Our food mart brings farm-fresh produce directly to consumers, offering a wide range of our own products and other grocery items.
                </p>
              </div>
            </motion.div>

            {/* Facility 5: Crop Production */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative h-56">
                <Image 
                  src={Crop} 
                  alt="Crop Production" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Crop Production</h3>
                <p className="text-neutral-600 mb-4">
                  Our crop production includes beans, maize grain, soybean, rice, and cassava, all grown using sustainable farming practices.
                </p>
              </div>
            </motion.div>

            {/* Facility 6: Training Facilities */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="relative h-56">
                <Image 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Training Facilities" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Training Facilities</h3>
                <p className="text-neutral-600 mb-4">
                  Our training centers provide educational opportunities for farmers, students, and agricultural entrepreneurs looking to develop their skills.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Yutaka Farm Quality?</h2>
            <p className="text-xl text-white/90 mb-8">
              Discover our premium agricultural products and services. Place a wholesale inquiry today.
            </p>
            <Link href="/wholesale" className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-3">
              Inquire Now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
} 