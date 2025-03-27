"use client";

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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    description: "Support local agriculture and reduce food miles by choosing our Nigerian-grown products."
  }
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image 
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
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

      {/* Livestock & Animal Products Section */}
      <section id="livestock" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">{productCategories[1]?.title}</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              {productCategories[1]?.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories[1]?.sections?.map((section, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-56">
                  <Image 
                    src={section.image || fallbackImage} 
                    alt={section.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{section.title}</h3>
                  <p className="text-neutral-600 mb-4">
                    {section.description}
                  </p>
                  <Link href="/wholesale" className="text-primary hover:underline font-medium inline-flex items-center">
                    Inquire About Wholesale
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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