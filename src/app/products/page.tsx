"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hydroponic4 from '../../../public/images/facilities/hydroponic4.jpg'
import Snail from '../../../public/images/facilities/snail.jpg'
import Carrot from '../../../public/images/products/carrot.jpg'
import Ginger from '../../../public/images/products/ginger.jpg'
import Lettuce from '../../../public/images/products/lettuce.jpg'
import Spinach from '../../../public/images/products/spinach.jpg'
import Rice from '../../../public/images/gallery/rice.jpg'
import Crop2 from '../../../public/images/facilities/crop2.jpg'

// Import hero images for gallery
import HeroImage1 from '../../../public/images/hero/IMG-20250326-WA0054.jpg'
import HeroImage2 from '../../../public/images/hero/IMG-20250326-WA0055.jpg'
import HeroImage3 from '../../../public/images/hero/IMG-20250326-WA0056.jpg'
import HeroImage4 from '../../../public/images/hero/IMG-20250326-WA0057.jpg'
import HeroImage5 from '../../../public/images/hero/IMG-20250326-WA0058.jpg'
import HeroImage6 from '../../../public/images/hero/IMG-20250326-WA0059.jpg'
import HeroImage7 from '../../../public/images/hero/IMG-20250326-WA0060.jpg'
// New hero images
import HeroImage8 from '../../../public/images/hero/IMG-20250326-WA0061.jpg'
import HeroImage9 from '../../../public/images/hero/IMG-20250326-WA0000.jpg'
import HeroImage10 from '../../../public/images/hero/IMG-20250326-WA0033.jpg'
import HeroImage11 from '../../../public/images/hero/IMG-20250326-WA0034.jpg'
import HeroImage12 from '../../../public/images/hero/IMG-20250326-WA0038.jpg'
import HeroImage13 from '../../../public/images/hero/IMG-20250326-WA0053.jpg'
import HeroCarrot from '../../../public/images/hero/carrot.jpg'
import HeroGinger from '../../../public/images/hero/ginger.jpg'
import HeroLettuce from '../../../public/images/hero/lettuce.jpg'
import HeroSpinach from '../../../public/images/hero/spinach.jpg'
import HeroSpinach2 from '../../../public/images/hero/spinach2.jpg'

// Add this at the top of the file, below imports
const fallbackImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

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

// Product categories
const productCategories = [
  {
    id: "hydroponic",
    title: "Hydroponic Vegetables",
    description: "Fresh, pesticide-free vegetables grown in our state-of-the-art hydroponic greenhouse. Our controlled environment ensures consistent quality and year-round availability.",
    image:Hydroponic4,
    items: [
      { name: "Lettuce", image: Lettuce },
      { name: "Kale", image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
      { name: "Spinach", image: Spinach },
      { name: "Cucumber", image: "https://images.unsplash.com/photo-1566486189376-d5f21e25aae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" },
      { name: "Tomatoes", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" },
      { name: "Ginger", image: Ginger },
      { name: "Okra", image: "https://tse1.mm.bing.net/th?id=OIP.H9NSL542vjWkCNl5lYuYAQHaE8&pid=Api&P=0&h=220" },
      { name: "Carrots", image: Carrot }
    ]
  },
  {
    id: "livestock",
    title: "Livestock & Animal Products",
    description: "Ethically raised livestock and animal products from our farm. We prioritize animal welfare and sustainable practices to deliver the highest quality products.",
    image: "https://images.unsplash.com/photo-1605605889412-2ae292678e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    sections: [
      {
        title: "Goat Farm",
        description: "Premium goat meat and dairy products from our carefully managed goat farm.",
        image: "https://i.pinimg.com/236x/b1/b7/44/b1b74485f7c02c5fa2e5b62b72be6f5f.jpg"
      },
      {
        title: "Snail Farm",
        description: "Nutritious and delicious snails grown in controlled environments for optimal quality.",
        image: Snail,
      },
      {
        title: "Fish Farm",
        description: "Fresh fish from our ponds, raised without harmful chemicals or additives.",
        image: "https://i.pinimg.com/736x/94/46/64/944664451ff28eec9331eb75de76b791.jpg"
      },
      {
        title: "Butchery & Abattoir",
        description: "Professional butchery services with strict hygiene standards for processing our animal products.",
        image: "https://tse3.mm.bing.net/th?id=OIP.dWEkY9z5yLPEKUsJExINaAHaEK&pid=Api&P=0&h=220"
      }
    ]
  },
  {
    id: "crops",
    title: "Grocery & Crop Production",
    description: "Wide range of staple crops and grocery items from our farm and food mart. We grow our crops using sustainable farming practices to ensure both quality and environmental responsibility.",
    image: Crop2,
    items: [
      { name: "Beans", image: "https://i.pinimg.com/236x/b2/05/97/b2059714338c1dc62266d06cc7798595.jpg" },
      { name: "Maize Grain", image: "https://i.pinimg.com/236x/0c/51/65/0c516543404dec3e50bde80b2624fd67.jpg" },
      { name: "Soyabean", image: "https://i.pinimg.com/236x/3f/d3/f0/3fd3f059b6d969c336db003bd6593b2f.jpg" },
      { name: "Rice", image: Rice },
      { name: "Cassava", image: "https://i.pinimg.com/236x/8b/71/03/8b7103b8032f00d63a3bb276e2cb0ec7.jpg" }
    ],
    food_mart: {
      title: "Food Mart & Groceries Shop",
      description: "Visit our food mart for a convenient shopping experience with fresh farm products and other grocery items.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
  }
];

// Benefits 
const benefits = [
  {
    title: "Farm Fresh Quality",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    description: "Direct from our farm to your table, ensuring the freshest products with optimal nutritional value."
  },
  {
    title: "Sustainable Practices",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    description: "We use environmentally responsible farming methods that preserve natural resources and reduce ecological impact."
  },
  {
    title: "Consistent Supply",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
      </svg>
    ),
    description: "Our diverse production facilities ensure reliable availability of products throughout the year, even during off-seasons."
  },
  {
    title: "Locally Produced",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1 1 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    description: "Support local agriculture and reduce food miles by choosing our Nigerian-grown products."
  }
];

export default function ProductsPage() {
  // State for gallery modal
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Gallery images array
  const galleryImages = [
    { image: HeroImage7, title: "Premium Farm Products" },
    { image: HeroImage1, title: "Fresh Vegetables" },
    { image: HeroImage2, title: "Organic Produce" },
    { image: HeroImage3, title: "Quality Vegetables" },
    { image: HeroImage4, title: "Sustainable Farming" },
    { image: HeroImage5, title: "Farm Excellence" },
    { image: HeroImage6, title: "Premium Quality" },
    { image: HeroImage8, title: "Farm Fresh Products" },
    { image: HeroImage9, title: "Quality Farming" },
    { image: HeroImage10, title: "Vegetable Selection" },
    { image: HeroImage11, title: "Crop Production" },
    { image: HeroImage12, title: "Yutaka Farm Harvest" },
    { image: HeroImage13, title: "Agricultural Excellence" },
    { image: HeroCarrot, title: "Fresh Carrots" },
    { image: HeroGinger, title: "Premium Ginger" },
    { image: HeroLettuce, title: "Hydroponic Lettuce" },
    { image: HeroSpinach, title: "Organic Spinach" },
    { image: HeroSpinach2, title: "Fresh Spinach Varieties" }
  ];

  // Open gallery modal with specific image
  const openGalleryModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryModalOpen(true);
    // Prevent page scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close gallery modal
  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
    // Re-enable page scrolling
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Add keyboard event listeners when modal is open
  useEffect(() => {
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      if (!isGalleryModalOpen) return;
      
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'Escape') {
        closeGalleryModal();
      }
    };

    window.addEventListener('keydown', handleKeyboardNavigation);
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, [isGalleryModalOpen]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src={Hydroponic4} 
            alt="Products Background" 
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
                Our Products & Services
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
                Discover our premium agricultural products grown and raised using sustainable practices. From fresh hydroponic vegetables to quality livestock and staple crops, we're committed to delivering excellence in every category.
              </motion.p>
              
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a 
                  href="#gallery" 
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  View Product Gallery
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hydroponic Vegetables Section */}
      <section id="hydroponic" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl font-bold text-neutral-900 mb-4"
                variants={fadeInUp}
              >
                {productCategories[0]?.title}
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-primary mb-6"
                variants={fadeInUp}
              ></motion.div>
              
              <motion.p 
                className="text-neutral-600 mb-8"
                variants={fadeInUp}
              >
                {productCategories[0]?.description}
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                variants={fadeInUp}
              >
                {productCategories[0]?.items?.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="relative h-24 w-24 mx-auto mb-2 rounded-full overflow-hidden bg-neutral-100">
                      <Image 
                        src={item.image || fallbackImage} 
                        alt={item.name} 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p className="text-neutral-800 font-medium">{item.name}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-8"
                variants={fadeInUp}
              >
                <Link href="/wholesale" className="btn btn-primary">
                  Inquire About Wholesale
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src={productCategories[0]?.image || fallbackImage} 
                alt="Hydroponic Greenhouse" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Livestock & Animal Products Section - Compact Version */}
      <section id="livestock" className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-1"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3"
                variants={fadeInUp}
              >
                {productCategories[1]?.title}
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-primary mb-4"
                variants={fadeInUp}
              ></motion.div>
              
              <motion.p 
                className="text-neutral-600 mb-6"
                variants={fadeInUp}
              >
                {productCategories[1]?.description}
              </motion.p>
              
              <motion.div 
                className="mb-6"
                variants={fadeInUp}
              >
                <Link href="/wholesale" className="btn btn-primary">
                  Inquire About Wholesale
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Livestock Cards */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {productCategories[1]?.sections?.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row items-center hover:shadow-md transition-shadow">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 m-3">
                      <Image 
                        src={section.image || fallbackImage} 
                        alt={section.title} 
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="p-3 sm:p-4 flex-1 text-center sm:text-left">
                      <h3 className="text-base font-semibold text-primary mb-1">{section.title}</h3>
                      <p className="text-sm text-neutral-600 line-clamp-2">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Product Gallery Section - Responsive */}
      <section id="gallery" className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Product Gallery</h2>
            <div className="w-16 h-1 bg-primary mx-auto my-3"></div>
            <p className="text-neutral-600">
              Explore our premium agricultural products showcasing quality and excellence
            </p>
          </motion.div>

          {/* Flex-based gallery for better responsiveness */}
          <div className="gallery-container">
            {/* Main image */}
            <div 
              className="w-full mb-3 overflow-hidden rounded-lg shadow-sm cursor-pointer"
              onClick={() => openGalleryModal(0)}
            >
              <div className="relative pb-[60%]">
                <Image 
                  src={galleryImages[0].image} 
                  alt={galleryImages[0].title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{galleryImages[0].title}</h3>
                    <p className="text-sm text-white/90">Click to view gallery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {galleryImages.slice(1).map((item, index) => (
                <motion.div 
                  key={index}
                  className={`gallery-item ${index >= 7 ? 'hidden md:hidden' : ''} cursor-pointer`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => openGalleryModal(index + 1)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-sm group h-0 pb-[100%]">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <p className="p-2 text-white text-xs md:text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View more button */}
            <div className="mt-6 text-center">
              <button 
                onClick={() => {
                  // Find all gallery items
                  const items = document.querySelectorAll('.gallery-item');
                  items.forEach(item => {
                    item.classList.remove('hidden', 'md:hidden');
                  });
                  // Hide this button after showing all items
                  document.querySelector('.view-all-btn')?.classList.add('hidden');
                }}
                className="view-all-btn inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                <span>View All Images</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>

            {/* Contact link */}
            <div className="text-center mt-4">
              <Link href="/contact" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                Contact us for more product information
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {isGalleryModalOpen && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-2 md:p-4"
          onClick={closeGalleryModal}
          tabIndex={0}
        >
          {/* Modal Content */}
          <div 
            className="relative max-w-6xl w-full h-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              onClick={closeGalleryModal}
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Image Container */}
            <div className="flex-1 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={galleryImages[currentImageIndex].image}
                  alt={galleryImages[currentImageIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Image Count */}
              <div className="absolute top-2 left-2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="text-xl font-bold">{galleryImages[currentImageIndex].title}</h3>
              </div>
              
              {/* Previous Button - Left side */}
              <button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black/50 rounded-full hover:bg-primary/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              {/* Next Button - Right side */}
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black/50 rounded-full hover:bg-primary/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="mt-4 overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {galleryImages.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative w-16 h-16 rounded overflow-hidden cursor-pointer transition-all ${
                      currentImageIndex === index ? 'ring-2 ring-primary scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grocery & Crop Production Section */}
      <section id="crops" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{productCategories[2]?.title}</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              {productCategories[2]?.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src={productCategories[2]?.image || fallbackImage} 
                alt="Crop Production" 
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
              <motion.h3 
                className="text-xl font-bold text-primary mb-4"
                variants={fadeInUp}
              >
                Our Staple Crops
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                variants={fadeInUp}
              >
                {productCategories[2]?.items?.map((item, index) => (
                  <div key={index} className="text-center bg-neutral-50 p-4 rounded-lg">
                    <div className="relative h-20 w-20 mx-auto mb-3 rounded-full overflow-hidden bg-neutral-100">
                      <Image 
                        src={item.image || fallbackImage} 
                        alt={item.name} 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p className="text-neutral-800 font-medium">{item.name}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-8"
                variants={fadeInUp}
              >
                <Link href="/wholesale" className="btn btn-primary">
                  Inquire About Wholesale
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Food Mart Section */}
          <motion.div 
            className="bg-neutral-50 rounded-lg shadow-md overflow-hidden p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">{productCategories[2]?.food_mart?.title}</h3>
                <p className="text-neutral-600 mb-6">
                  {productCategories[2]?.food_mart?.description}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Fresh farm products available daily
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Wide selection of grocery items
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Convenient location and friendly service
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Visit Our Store
                </Link>
              </div>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image 
                  src={productCategories[2]?.food_mart?.image || fallbackImage} 
                  alt="Food Mart" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Benefits Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Why Choose Our Products</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              We're committed to delivering the highest quality agricultural products with exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order Our Products?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch for wholesale inquiries or visit our food mart for retail purchases. We're ready to serve you with the finest agricultural products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/wholesale" className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-3">
                Wholesale Inquiry
              </Link>
              <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 