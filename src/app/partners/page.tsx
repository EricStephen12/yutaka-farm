"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hydroponic3 from '../../../public/images/facilities/hydroponic3.jpg'

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

// Sample partner data (in a real app, this would come from a database or API)
const partners = [
  {
    id: 1,
    name: "SPAR",
    logo: "https://tse2.mm.bing.net/th?id=OIP.Lx8qYDnHa6pXuiPt-DeliwAAAA&pid=Api&P=0&h=220",
    description: "A leading partner in our retail distribution network, SPAR stocks our premium agricultural products in their stores throughout Nigeria, ensuring our fresh produce reaches quality-conscious consumers.",
    category: "Supermarket"
  },
  {
    id: 2,
    name: "SHOPRITE",
    logo: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Our partnership with Shoprite enables wide distribution of our fresh produce across their extensive network of stores, helping us bring quality agricultural products to customers nationwide.",
    category: "Supermarket"
  },
  {
    id: 3,
    name: "PRINCE EBEANO SUPERMARKET",
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Prince Ebeano Supermarket has been a valued retail partner, featuring our premium agricultural products prominently in their stores and helping expand our market reach.",
    category: "Supermarket"
  },
  {
    id: 4,
    name: "FIRSTBANK PLC",
    logo: "https://tse4.mm.bing.net/th?id=OIP.F6EbhBZboAsIOKG_zhDwzQHaHa&pid=Api&P=0&h=220",
    description: "Our financial partnership with FirstBank PLC has been instrumental in supporting our growth initiatives and sustainable farming practices through tailored financial services.",
    category: "Financial"
  },
  {
    id: 5,
    name: "H-MEDIX",
    logo: "https://tse3.mm.bing.net/th?id=OIP.RqZXYh35l3Dtebg5UPgevQHaE8&pid=Api&P=0&h=220",
    description: "H-Medix supermarkets showcase our products throughout their stores, creating a reliable channel for delivering our fresh farm produce to health-conscious consumers.",
    category: "Supermarket"
  },
  {
    id: 6,
    name: "BRITISH VILLAGE",
    logo: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "British Village has established a strong retail partnership with us, consistently featuring our premium agricultural products to their discerning customer base.",
    category: "Retail"
  },
  {
    id: 7,
    name: "GRAND SQUARE",
    logo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Grand Square features our high-quality agricultural products prominently in their retail locations, providing their customers with access to our fresh farm produce.",
    category: "Supermarket"
  },
  {
    id: 8,
    name: "CLEVER KITCHEN",
    logo: "https://i0.wp.com/outravelandtour.com/wp-content/uploads/2021/07/Clever-Kitchen-Abuja-2.jpg?w=1080&ssl=1",
    description: "Clever Kitchen collaborates with us to source fresh ingredients directly from our farm, ensuring their food service operations maintain the highest quality standards.",
    category: "Food Service"
  },
  {
    id: 9,
    name: "BAN KAN GIZO",
    logo: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Ban Kan Gizo has established a strong retail partnership with us, consistently offering our fresh produce to their customers across their stores.",
    category: "Retail"
  },
  {
    id: 10,
    name: "2K SUPERMARKET",
    logo: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "2K Supermarket distributes our premium agricultural products throughout their stores, helping us reach more customers with our quality farm produce.",
    category: "Supermarket"
  },
  {
    id: 11,
    name: "4U SUPERMARKET",
    logo: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "4U Supermarket features our fresh farm products prominently in their retail locations, providing their customers with access to our high-quality agricultural produce.",
    category: "Supermarket"
  },
  {
    id: 12,
    name: "DUNES CENTER",
    logo: "https://tse2.mm.bing.net/th?id=OIP.RKyiOjAV9rHcmjWjHdHcpgHaE8&pid=Api&P=0&h=220",
    description: "Dunes Center has been a valuable retail partner, featuring our farm fresh products in their shopping centers and helping us expand our market reach to more customers.",
    category: "Retail"
  }
];

// Testimonials from partners
const testimonials = [
  {
    id: 1,
    name: "Michael Adeyemi",
    position: "Procurement Manager, SPAR Nigeria",
    quote: "Our partnership with Yutaka Farm has greatly enhanced our fresh produce offering. Their consistent quality and reliable delivery have made them one of our most valued agricultural suppliers in Nigeria.",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "Chioma Okonkwo",
    position: "Fresh Foods Director, SHOPRITE",
    quote: "Yutaka Farm consistently delivers premium quality agricultural products that meet our strict standards. Their commitment to freshness and timely supply has strengthened our ability to provide the best produce to our customers.",
    image: "https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
  },
  {
    id: 3,
    name: "Taiwo Olumide",
    position: "General Manager, PRINCE EBEANO SUPERMARKET",
    quote: "Our customers specifically look for Yutaka Farm products because of their exceptional quality. Their fresh produce has become a key differentiator for our supermarket and a major draw for health-conscious shoppers.",
    image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  }
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src={Hydroponic3} 
            alt="Partnerships Background" 
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
                Partnership Opportunities
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
                Collaboration is at the heart of our success. Whether you're interested in financial investment opportunities or distribution partnerships, we offer various ways to grow together in Nigeria's agricultural sector.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Partnership Section - NEW SECTION */}
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
                src={Hydroponic3} 
                alt="Financial Partnership" 
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
                Financial Partnership Opportunities
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-primary mb-6"
                variants={fadeInUp}
              ></motion.div>
              
              <motion.p 
                className="text-lg text-neutral-600 mb-6"
                variants={fadeInUp}
              >
                Invest in Nigeria's agricultural future with Yutaka Farm. We offer various financial partnership opportunities for investors looking to support sustainable agriculture while achieving attractive returns.
              </motion.p>

              <div className="space-y-6">
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Growth Investment</h3>
                    <p className="text-neutral-600">
                      Support our expansion into new agricultural markets and technologies with capital investment opportunities designed for growth-oriented investors.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Infrastructure Financing</h3>
                    <p className="text-neutral-600">
                      Participate in funding state-of-the-art agricultural facilities, from hydroponic greenhouses to processing centers, with defined returns on investment.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Strategic Partnerships</h3>
                    <p className="text-neutral-600">
                      Form a joint venture with us to develop new agricultural business lines, combining your capital with our expertise in the Nigerian market.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-8"
                variants={fadeInUp}
              >
                <Link href="/contact" className="btn btn-primary text-lg px-8 py-3" style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
                  Discuss Partnership Opportunities
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Partners Section - MADE SMALLER */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Our Current Business Partners</h2>
            <div className="w-20 h-1 bg-primary mx-auto my-3"></div>
            <p className="text-neutral-600">
              We're proud to collaborate with these exceptional businesses across Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <div className="relative h-32 bg-neutral-100 flex items-center justify-center p-4">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-primary text-center">{partner.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.h2 
                className="text-3xl font-bold text-neutral-900 mb-4"
                variants={fadeInUp}
              >
                Benefits of Partnering With Us
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-primary mb-6"
                variants={fadeInUp}
              ></motion.div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Premium Product Selection</h3>
                    <p className="text-neutral-600">
                      Our partners receive exclusive access to our highest quality farm-fresh produce, ensuring they can offer premium agricultural products to their customers.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Competitive Returns</h3>
                    <p className="text-neutral-600">
                      Financial partners enjoy structured returns on their investment while supporting sustainable agriculture in Nigeria's growing market.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Quality Guarantee</h3>
                    <p className="text-neutral-600">
                      Our rigorous quality control ensures that only the finest products reach your shelves, meeting the highest standards for freshness and appearance.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">Impact Investment</h3>
                    <p className="text-neutral-600">
                      Your partnership helps develop sustainable agriculture in Nigeria, creating jobs and improving food security while generating financial returns.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Partnership Benefits" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - MADE SMALLER */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Partner Testimonials</h2>
            <div className="w-20 h-1 bg-primary mx-auto my-3"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white rounded-lg p-5 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-900">{testimonial.name}</h3>
                    <p className="text-neutral-500 text-xs">{testimonial.position}</p>
                  </div>
                </div>
                <svg className="w-8 h-8 text-primary/20 mb-2" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-neutral-600 text-sm italic leading-relaxed">{testimonial.quote.length > 120 ? `${testimonial.quote.substring(0, 120)}...` : testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Section - UPDATED */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in a Financial Partnership?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join our growing network of financial partners and discover how we can grow together while advancing sustainable agriculture in Nigeria and Africa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-3" style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
                Schedule a Consultation
              </Link>
              <Link href="/wholesale" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
                Wholesale Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 