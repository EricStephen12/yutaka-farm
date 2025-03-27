"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Spinach2 from '../../../public/images/products/spinach2.jpg'

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

// Training programs
const trainingPrograms = [
  {
    id: "hydroponic",
    title: "Hydroponic Farming Fundamentals",
    description: "Learn the basics of hydroponic farming, including system setup, plant nutrition, and maintenance techniques.",
    image: "https://i.pinimg.com/736x/d0/08/b4/d008b4467d14c28f62de098c58de5e91.jpg",
    duration: "2 weeks",
    format: "In-person, hands-on training"
  },
  {
    id: "livestock",
    title: "Advanced Livestock Management",
    description: "Comprehensive training on livestock care, breeding, nutrition, and sustainable animal husbandry practices.",
    image: "https://i.pinimg.com/236x/b1/b7/44/b1b74485f7c02c5fa2e5b62b72be6f5f.jpg",
    format: "In-person with practical sessions"
  },
  {
    id: "aquaculture",
    title: "Commercial Fish Farming",
    description: "Learn how to set up and manage commercial fish farms, including water quality management and fish health.",
    image: "https://i.pinimg.com/736x/94/46/64/944664451ff28eec9331eb75de76b791.jpg",
    duration: "2 weeks",
    format: "In-person with field trips"
  },
  {
    id: "snail",
    title: "Heliculture: Snail Farming Techniques",
    description: "Specialized training on commercial snail farming, covering breeding, feeding, housing, and market strategies.",
    image: "https://i.pinimg.com/474x/df/96/5b/df965bd12bc739e4bc62c4328cc8a403.jpg",
    format: "In-person with practical demonstrations"
  },
  {
    id: "crop",
    title: "Sustainable Crop Production",
    description: "Learn modern techniques for sustainable crop production, soil management, and integrated pest management.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    duration: "2 weeks",
    format: "In-person with field work"
  },
  {
    id: "business",
    title: "Agribusiness Management",
    description: "Comprehensive training on running a profitable agricultural business, including marketing, finance, and operations.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    duration: "1 week",
    format: "Hybrid (online and in-person)"
  }
];

// Consulting services data
const consultingServices = [
  {
    id: 1,
    title: "Farm Design & Setup",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
      </svg>
    ),
    description: "Expert guidance on designing and setting up efficient, sustainable farming operations. Our consultants help you optimize land use, select appropriate technologies, and implement effective workflows."
  },
  {
    id: 2,
    title: "Production Optimization",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    description: "Analyze your current production methods and identify opportunities for improvement. We help enhance yields, reduce waste, and implement more efficient processes for maximum profitability."
  },
  {
    id: 3,
    title: "Market Analysis & Strategy",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ),
    description: "Comprehensive market research and strategic planning to help you identify profitable opportunities, position your products effectively, and develop robust distribution channels."
  },
  {
    id: 4,
    title: "Sustainable Practices Implementation",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    description: "Expert guidance on transitioning to environmentally responsible farming practices. We help you implement techniques that reduce environmental impact while maintaining or improving profitability."
  },
  {
    id: 5,
    title: "Technology Integration",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
      </svg>
    ),
    description: "Guidance on selecting and implementing agricultural technologies that enhance efficiency and productivity. From IoT sensors to management software, we help you navigate the digital transformation of farming."
  },
  {
    id: 6,
    title: "Compliance & Certification",
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    description: "Assistance with navigating regulatory requirements and obtaining industry certifications. We guide you through the process of complying with standards for organic, fair trade, or other specialized certifications."
  }
];

// Success stories
const successStories = [
  {
    id: 1,
    name: "Samuel Ayo",
    program: "Hydroponic Farming Fundamentals",
    testimonial: "The training I received completely transformed my approach to farming. Within six months of completing the program, I launched my own hydroponic facility that now supplies vegetables to local restaurants.",
    image: "https://i.pinimg.com/236x/bb/26/85/bb2685f295f326de253273d7570dd793.jpg"
  },
  {
    id: 2,
    name: "Infeanyi Okafor",
    program: "Advanced Livestock Management",
    testimonial: "As a small-scale farmer, the livestock management techniques I learned have significantly improved my herd's health and productivity. My farm's profitability has increased by over 30% since implementing these practices.",
    image: "https://i.pinimg.com/236x/9b/e3/5a/9be35a49cd66d2bcb7ecd226f70dddae.jpg"
  },
  {
    id: 3,
    name: "chinonye Anayo",
    program: "Sustainable Crop Production",
    testimonial: "The sustainable farming methods I learned have not only improved my crop yields but also significantly reduced my environmental impact. I'm now able to command premium prices for my organic produce.",
    image: "https://i.pinimg.com/474x/cd/9c/71/cd9c7137d392fb78f86cc3a30b0d95e5.jpg"
  }
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src={Spinach2} 
            alt="Training Background" 
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
                Training & Consultancy
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
                Empowering the next generation of agricultural professionals with hands-on training and expert consultancy services. Learn from industry leaders and transform your agricultural practices.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
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
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Our Training Approach" 
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
                Our Approach to Agricultural Education
              </motion.h2>
              
              <motion.div 
                className="w-20 h-1 bg-primary mb-6"
                variants={fadeInUp}
              ></motion.div>
              
              <motion.p 
                className="text-neutral-600 mb-6"
                variants={fadeInUp}
              >
                At Yutaka Farm, we believe that sustainable agricultural development begins with knowledge transfer and skills development. Our training programs combine classroom learning with hands-on practical experience on our working farm.
              </motion.p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Practical, Hands-On Learning</h3>
                    <p className="text-neutral-600">
                      Our training facilities provide real-world experience with working hydroponic systems, livestock operations, and crop production areas.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Expert Instructors</h3>
                    <p className="text-neutral-600">
                      All courses are taught by experienced agricultural professionals with years of practical experience and academic credentials.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Customizable Programs</h3>
                    <p className="text-neutral-600">
                      We tailor our training and consultancy services to meet the specific needs of individuals, communities, businesses, and governmental organizations.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex"
                  variants={fadeInUp}
                >
                  <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Ongoing Support</h3>
                    <p className="text-neutral-600">
                      Participants receive continuing support after completing our programs, including access to resources, networking opportunities, and follow-up consultations.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Courses Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Our Training Programs</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              Comprehensive training courses designed to equip participants with practical skills and knowledge for agricultural success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div 
                key={program.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-64">
                  <Image 
                    src={program.image} 
                    alt={program.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-primary">{program.title}</h3>
                    <div className="flex space-x-2">
                      <span className="text-xs font-medium text-white bg-primary px-2 py-1 rounded-full">
                        {program.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-4">
                    {program.description}
                  </p>
                </div>
                <div className="p-4 bg-neutral-50 border-t border-neutral-100">
                  <Link href="/contact" className="w-full btn btn-primary text-center py-2">
                    Inquire About This Course
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Consultancy Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              Expert guidance to help you optimize your agricultural operations, solve complex challenges, and achieve your business goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Success Stories</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              How our training and consultancy services have transformed agricultural businesses across Nigeria
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div 
                key={story.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image 
                    src={story.image} 
                    alt={story.name} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{story.name}</h3>
                  <p className="text-sm text-neutral-500 mb-4">{story.program}</p>
                  <p className="text-neutral-600 italic">
                    "{story.testimonial}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary text-white py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
            alt="CTA Background" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Agricultural Practices?</h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you're looking to enhance your skills through our training programs or need expert consultancy services, we're here to help you succeed in agriculture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-neutral-100 text-lg px-8 py-3" style={{ position: 'relative', zIndex: 20, pointerEvents: 'auto' }}>
                Contact Our Team
              </Link>
              <Link href="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3" style={{ position: 'relative', zIndex: 20, pointerEvents: 'auto' }}>
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 