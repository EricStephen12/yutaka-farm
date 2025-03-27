"use client";

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms of Service</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600">
            Please read these terms carefully before using our services.
          </p>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-neutral-700 mb-3">
                Welcome to Yutaka Farm. These Terms of Service govern your use of our website at yutakafarm.com.ng and the products and services we offer.
              </p>
              <p className="text-neutral-700">
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Use of Our Services</h2>
              <p className="text-neutral-700 mb-3">
                Our website and services are intended for informational purposes and to facilitate inquiries for agricultural products and services.
              </p>
              <p className="text-neutral-700">
                You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Products and Services</h2>
              <p className="text-neutral-700 mb-3">
                Yutaka Farm offers various agricultural products and services. All descriptions of products and services are subject to change at any time without notice.
              </p>
              <p className="text-neutral-700">
                We reserve the right to discontinue any product or service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Wholesale Inquiries</h2>
              <p className="text-neutral-700 mb-3">
                Our wholesale inquiry form is provided for your convenience to express interest in our products. Submission of an inquiry does not constitute a binding order.
              </p>
              <p className="text-neutral-700">
                All wholesale orders are subject to confirmation, product availability, and our acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Intellectual Property</h2>
              <p className="text-neutral-700">
                All content on our website, including text, graphics, logos, images, and software, is the property of Yutaka Farm and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Privacy Policy</h2>
              <p className="text-neutral-700">
                Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to Terms</h2>
              <p className="text-neutral-700">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes indicates your acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
              <p className="text-neutral-700">
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc list-inside mt-2 text-neutral-700">
                <li>Email: info@yutakafarm.com.ng</li>
                <li>Phone: 08174006548, 08061279053</li>
              </ul>
            </section>
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-200 text-neutral-500 text-sm">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 