// TermsOfServices.jsx
import React from 'react';
import { Shield, FileText, Scale, Clock } from 'lucide-react';

const TermsOfServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <p className="text-gray-600 mb-4">
                By accessing and using TechNetME's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">2. Service Description</h2>
              </div>
              <p className="text-gray-600 mb-4">
                TechNetME provides software trading, GPS systems, and security solutions. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Custom software development and integration</li>
                <li>GPS tracking and navigation systems</li>
                <li>Security devices and monitoring services</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-orange-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Users are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Providing accurate information when using our services</li>
                <li>Maintaining the confidentiality of their account credentials</li>
                <li>Using our services in compliance with applicable laws</li>
                <li>Notifying us immediately of any unauthorized use of their account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms are established in individual service agreements. All fees are non-refundable unless otherwise specified in writing. Late payments may result in service suspension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, software, and materials provided by TechNetME are protected by intellectual property laws. Users may not reproduce, distribute, or create derivative works without express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                TechNetME shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate services with written notice. Upon termination, all rights and obligations cease, except those that by their nature should survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> info@TechNetME.com<br />
                  <strong>Phone:</strong> +971563011732<br />
                  <strong>Address:</strong> 123 Tech Street, Business District, City, State 12345
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServices;