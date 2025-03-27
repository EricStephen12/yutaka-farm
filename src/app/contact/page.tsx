"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

// Define the types for form data
type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      // Submit the form data to our API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        reset(); // Reset the form
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
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
            src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Contact Background" 
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
                Contact Us
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
                Have questions about our products or services? We're here to help! Get in touch with our team using the information below.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Phone</h3>
                    <p className="text-neutral-600 mt-1">
                      <a href="tel:+2348174006548" className="hover:text-primary">08174006548</a>
                    </p>
                    <p className="text-neutral-600">
                      <a href="tel:+2348061279053" className="hover:text-primary">08061279053</a>
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Email</h3>
                    <p className="text-neutral-600 mt-1">
                      <a href="mailto:yutakafarms2@gmail.com" className="hover:text-primary">yutakafarms2@gmail.com</a>
                    </p>
                    <p className="text-neutral-600">
                      <a href="mailto:info@yutakafarm.com.ng" className="hover:text-primary">info@yutakafarm.com.ng</a>
                    </p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Locations</h3>
                    <div className="space-y-4 mt-1">
                      <div>
                        <p className="text-neutral-900 font-medium">HEAD OFFICE/FARM SITE:</p>
                        <p className="text-neutral-600">2 Leha Road after MTN mast and Royal Blue event Center, Karu, Abuja</p>
                      </div>
                      <div>
                        <p className="text-neutral-900 font-medium">ANNEX:</p>
                        <p className="text-neutral-600">Km 44, Abuja-Keffi Expressway, Doruwa</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Business Hours */}
                <div className="flex">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">Business Hours</h3>
                    <div className="space-y-1 mt-1">
                      <p className="text-neutral-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-neutral-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-neutral-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="bg-neutral-200 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="bg-neutral-200 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="bg-neutral-200 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://wa.me/2348174006548" aria-label="WhatsApp" className="bg-neutral-200 hover:bg-primary hover:text-white transition-colors rounded-full w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-4 sm:mb-6">Send Us a Message</h2>
                
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
                      Your message has been successfully sent. We will contact you very soon!
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn btn-primary text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Name*
                        </label>
                        <input
                          id="name"
                          type="text"
                          className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.name ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                          placeholder="John Doe"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.name.message}</p>
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
                      
                      {/* Subject */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                          Subject*
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.subject ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                          placeholder="How can we help?"
                          {...register('subject', { required: 'Subject is required' })}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.subject.message}</p>
                        )}
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Message*
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className={`w-full px-3 sm:px-4 py-2 text-base border ${errors.message ? 'border-red-500' : 'border-neutral-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                          placeholder="Write your message here..."
                          {...register('message', { required: 'Message is required' })}
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message.message}</p>
                        )}
                      </div>
                    </div>
                    
                    {isError && (
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-600 text-sm sm:text-base">
                          There was an error sending your message. Please try again or contact us directly.
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
                          'Send Message'
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Our Locations</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              Visit our farm sites in Abuja
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-[400px] w-full relative">
              {/* Replace with actual Google Maps iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5977566875376!2d7.517297514770924!3d9.093661093471723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745c9f220ac7%3A0x8e87f0131416ef83!2sKaru%2C%20Abuja!5e0!3m2!1sen!2sng!4v1615455421831!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                aria-hidden="false"
                tabIndex={0}
                title="Yutaka Farm Locations"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto my-4"></div>
            <p className="text-neutral-600 text-lg">
              Find answers to common questions about Yutaka Farm
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">What are your business hours?</h3>
              <p className="text-neutral-600">
                Our business hours are Monday to Friday from 8:00 AM to 6:00 PM, Saturday from 9:00 AM to 4:00 PM, and we are closed on Sundays.
              </p>
            </motion.div>
            
            {/* FAQ Item 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Do you offer farm tours?</h3>
              <p className="text-neutral-600">
                Yes, we welcome visitors to tour our farm facilities. Please contact us in advance to schedule a tour so we can ensure you have the best experience.
              </p>
            </motion.div>
            
            {/* FAQ Item 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">How can I place a wholesale order?</h3>
              <p className="text-neutral-600">
                You can place a wholesale order by visiting our <Link href="/wholesale" className="text-primary hover:underline">Wholesale Inquiry</Link> page and filling out the form. Alternatively, you can contact us directly via phone or email.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 