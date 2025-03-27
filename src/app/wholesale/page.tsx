"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

// Define the types for form data
type WholesaleFormData = {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  products: string[];
  quantity: string;
  deliveryDate: string;
  notes: string;
};

// Available products for selection
const productOptions = [
  { id: 'vegetables', name: 'Hydroponic Vegetables', category: 'Hydroponic Greenhouse' },
  { id: 'lettuce', name: 'Lettuce', category: 'Hydroponic Greenhouse' },
  { id: 'kale', name: 'Kale', category: 'Hydroponic Greenhouse' },
  { id: 'spinach', name: 'Spinach', category: 'Hydroponic Greenhouse' },
  { id: 'cucumber', name: 'Cucumber', category: 'Hydroponic Greenhouse' },
  { id: 'tomatoes', name: 'Tomatoes', category: 'Hydroponic Greenhouse' },
  { id: 'bellpeppers', name: 'Bell Peppers', category: 'Hydroponic Greenhouse' },
  { id: 'okro', name: 'Okro', category: 'Hydroponic Greenhouse' },
  { id: 'goat', name: 'Goat Products', category: 'Livestock' },
  { id: 'snail', name: 'Snail Products', category: 'Livestock' },
  { id: 'fish', name: 'Fish Products', category: 'Livestock' },
  { id: 'beans', name: 'Beans', category: 'Crop Production' },
  { id: 'maize', name: 'Maize Grain', category: 'Crop Production' },
  { id: 'soyabean', name: 'Soyabean', category: 'Crop Production' },
  { id: 'rice', name: 'Rice', category: 'Crop Production' },
  { id: 'cassava', name: 'Cassava', category: 'Crop Production' },
];

// Group products by category
const groupProductsByCategory = () => {
  return productOptions.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof productOptions>);
};

export default function WholesalePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<WholesaleFormData>();
  
  const selectedProducts = watch('products') || [];
  const groupedProducts = groupProductsByCategory();
  
  const onSubmit = async (data: WholesaleFormData) => {
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      // Submit the form data to our API
      const response = await fetch('/api/wholesale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Something went wrong');
      }
      
      // Prepare WhatsApp message text
      const productsList = Array.isArray(data.products) ? data.products.join(', ') : 'None selected';
      const whatsappText = encodeURIComponent(
        `Hello Yutaka Farm, I would like to place a wholesale order:\n\n` +
        `Name: ${data.fullName}\n` +
        `Business: ${data.businessName || 'N/A'}\n` +
        `Products: ${productsList}\n` +
        `Quantity: ${data.quantity}\n` +
        `Delivery Date: ${data.deliveryDate}\n` +
        `Notes: ${data.notes || 'None'}\n\n` +
        `Please contact me to discuss this order further.`
      );
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/2348174006548?text=${whatsappText}`, '_blank');
      
      setIsSuccess(true);
      reset(); // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-neutral-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Wholesale Background" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
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
                Wholesale Inquiry
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
                Looking to order in bulk? Fill out the form below to place your wholesale inquiry. Our team will contact you shortly to discuss your requirements.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-3 sm:mb-6">
                  Wholesale Inquiry
                </h2>
                
                {isSuccess ? (
                  <motion.div 
                    className="text-center py-6 sm:py-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                    <p className="text-neutral-600 mb-4 sm:mb-6">
                      Your wholesale inquiry has been successfully submitted. We will contact you very soon!
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn btn-primary text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                    {/* Personal Information */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="font-medium text-lg text-neutral-800 border-b pb-2">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {/* Full Name */}
                        <div className="sm:col-span-2">
                          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-1">
                            Full Name*
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.fullName ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                            placeholder="John Doe"
                            {...register('fullName', { required: 'Full name is required' })}
                          />
                          {errors.fullName && (
                            <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.fullName.message}</p>
                          )}
                        </div>
                        
                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                            Phone Number*
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.phone ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                            placeholder="+1 (234) 567-8901"
                            {...register('phone', { required: 'Phone number is required' })}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.phone.message}</p>
                          )}
                        </div>
                        
                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                            Email Address*
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.email ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                            placeholder="your@email.com"
                            {...register('email', { 
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                              }
                            })}
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Business Name */}
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-neutral-700 mb-1">
                          Business Name
                        </label>
                        <input
                          id="businessName"
                          type="text"
                          className="w-full px-3 sm:px-4 py-2 text-base border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Business Ltd."
                          {...register('businessName')}
                        />
                      </div>
                    </div>
                    
                    {/* Order Information */}
                    <div className="space-y-3 sm:space-y-4 pt-2">
                      <h3 className="font-medium text-lg text-neutral-800 border-b pb-2">Order Information</h3>
                      
                      {/* Products */}
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Products of Interest*
                        </label>
                        
                        <div className="space-y-4 max-h-60 overflow-y-auto pr-2 py-1">
                          {Object.entries(groupedProducts).map(([category, products]) => (
                            <div key={category} className="space-y-2">
                              <h4 className="text-sm font-semibold text-neutral-800">{category}</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pl-2">
                                {products.map((product) => (
                                  <div key={product.id} className="flex items-start">
                                    <input
                                      id={`product-${product.id}`}
                                      type="checkbox"
                                      value={product.name}
                                      className="mt-1 h-4 w-4 text-primary border-neutral-300 rounded focus:ring-primary"
                                      {...register('products', { required: 'Please select at least one product' })}
                                    />
                                    <label htmlFor={`product-${product.id}`} className="ml-2 text-sm text-neutral-700">
                                      {product.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {errors.products && (
                          <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.products.message}</p>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {/* Quantity */}
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1">
                            Estimated Quantity*
                          </label>
                          <input
                            id="quantity"
                            type="text"
                            className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.quantity ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                            placeholder="E.g., 500 lbs, 200 units"
                            {...register('quantity', { required: 'Quantity is required' })}
                          />
                          {errors.quantity && (
                            <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.quantity.message}</p>
                          )}
                        </div>
                        
                        {/* Delivery Date */}
                        <div>
                          <label htmlFor="deliveryDate" className="block text-sm font-medium text-neutral-700 mb-1">
                            Preferred Delivery Date*
                          </label>
                          <input
                            id="deliveryDate"
                            type="date"
                            className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.deliveryDate ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                            {...register('deliveryDate', { required: 'Delivery date is required' })}
                          />
                          {errors.deliveryDate && (
                            <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.deliveryDate.message}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Notes */}
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
                          Additional Notes
                        </label>
                        <textarea
                          id="notes"
                          rows={3}
                          className="w-full px-3 sm:px-4 py-2 text-base border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Any specific requirements or questions..."
                          {...register('notes')}
                        ></textarea>
                      </div>
                    </div>
                    
                    {isError && (
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-600 text-sm sm:text-base">
                          There was an error submitting your inquiry. Please try again or contact us directly.
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-4 sm:mt-6">
                      <button
                        type="submit"
                        className="w-full btn btn-primary py-2 sm:py-3 text-sm sm:text-base"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          'Submit Inquiry'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Information Column */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* How It Works */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4">How Our Wholesale Process Works</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-primary-700 font-bold text-sm sm:text-base">1</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-1">Submit Inquiry</h4>
                      <p className="text-sm sm:text-base text-neutral-600">
                        Fill out our wholesale form with your requirements and contact information.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-primary-700 font-bold text-sm sm:text-base">2</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-1">Quick Response</h4>
                      <p className="text-sm sm:text-base text-neutral-600">
                        Our team will reach out within 24 hours to discuss pricing, availability, and details.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-primary-700 font-bold text-sm sm:text-base">3</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-1">Confirm Order</h4>
                      <p className="text-sm sm:text-base text-neutral-600">
                        After agreeing on terms, we'll confirm your order and arrange payment methods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-primary-700 font-bold text-sm sm:text-base">4</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-1">Delivery</h4>
                      <p className="text-sm sm:text-base text-neutral-600">
                        We'll prepare and deliver your order as scheduled, ensuring freshness and quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4">Direct Contact</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Phone</p>
                      <p className="text-base font-medium text-neutral-800">
                        <a href="tel:+2348174006548" className="hover:text-primary">08174006548</a>
                      </p>
                      <p className="text-base font-medium text-neutral-800">
                        <a href="tel:+2348061279053" className="hover:text-primary">08061279053</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <p className="text-base font-medium text-neutral-800">
                        <a href="mailto:yutakafarms2@gmail.com" className="hover:text-primary">yutakafarms2@gmail.com</a>
                      </p>
                      <p className="text-base font-medium text-neutral-800">
                        <a href="mailto:info@yutakafarm.com.ng" className="hover:text-primary">info@yutakafarm.com.ng</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Address</p>
                      <div className="space-y-2">
                        <div>
                          <p className="text-base font-medium text-neutral-800">HEAD OFFICE/FARM SITE:</p>
                          <p className="text-sm text-neutral-600">2 Leha Road after MTN mast and Royal Blue event Center, Karu, Abuja</p>
                        </div>
                        <div>
                          <p className="text-base font-medium text-neutral-800">ANNEX:</p>
                          <p className="text-sm text-neutral-600">Km 44, Abuja-Keffi Expressway, Doruwa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 sm:mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-1">What are your minimum order quantities?</h4>
                    <p className="text-sm sm:text-base text-neutral-600">
                      Our minimum quantities vary by product. Generally, vegetables start at 10kg, livestock products at 20kg, and crop produce at 50kg. Contact us for specific product MOQs.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-1">Do you offer samples?</h4>
                    <p className="text-sm sm:text-base text-neutral-600">
                      Yes, we provide samples for qualified businesses. Sample requests can be made through the inquiry form or by contacting our sales team directly.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-1">What are your payment terms?</h4>
                    <p className="text-sm sm:text-base text-neutral-600">
                      We typically require a 30% deposit to confirm orders, with the balance due before delivery. Established clients may qualify for terms of Net 15 or Net 30.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 