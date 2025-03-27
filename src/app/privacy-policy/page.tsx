"use client";

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p className="text-neutral-700 mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside ml-4 text-neutral-700 space-y-2">
                <li>Fill out forms on our website (contact, wholesale inquiry, subscription)</li>
                <li>Correspond with us by phone, email, or other means</li>
                <li>Sign up for our newsletter</li>
                <li>Visit our website (through cookies and similar technologies)</li>
              </ul>
              <p className="text-neutral-700 mt-3">
                The types of information we may collect include your name, email address, phone number, business name, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p className="text-neutral-700 mb-3">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc list-inside ml-4 text-neutral-700 space-y-2">
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Process wholesale orders and inquiries</li>
                <li>Send you administrative information</li>
                <li>Send you marketing communications if you have subscribed</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Email Communications</h2>
              <p className="text-neutral-700 mb-3">
                If you subscribe to our newsletter, we will send you periodic emails about our products, services, and promotions. You can unsubscribe at any time by:
              </p>
              <ul className="list-disc list-inside ml-4 text-neutral-700">
                <li>Clicking the "unsubscribe" link at the bottom of our emails</li>
                <li>Contacting us directly at info@yutakafarm.com.ng</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-neutral-700">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, so we cannot guarantee the security of information transmitted to or from our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Services</h2>
              <p className="text-neutral-700">
                We may use third-party services to help us operate our website and administer activities on our behalf. These third parties may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-neutral-700">
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Children's Privacy</h2>
              <p className="text-neutral-700">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-neutral-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Changes are effective immediately upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
              <p className="text-neutral-700">
                If you have any questions about this Privacy Policy, please contact us at:
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