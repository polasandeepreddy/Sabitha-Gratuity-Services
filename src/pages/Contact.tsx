import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  CheckCircle,
  Award,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'AS-15 Valuation',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'AS-15 Valuation',
    'Trust Formation',
    'Trust Registration',
    'PCIT Approval',
    'Trust Rule Framing',
    'Trust Modifications',
    'General Consultation',
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 90005 52708',
      description: 'Mon-Fri from 9am to 6pm',
      action: 'tel:+919000552708',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'neelima@gratuityservices.com',
      description: 'We respond within 24 hours',
      action: 'mailto:neelima@gratuityservices.com',
    },
    {
      icon: MapPin,
      title: 'Service Areas',
      details: 'Telangana, Andhra Pradesh, Karnataka',
      description: 'On-site consultations available',
      action: '#',
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to get started with your gratuity and trust requirements?
              Contact us today for expert consultation and personalized
              solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Award className="h-4 w-4 text-purple-500" />
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <method.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {method.details}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
                {method.action !== '#' && (
                  <a
                    href={method.action}
                    className="text-sm text-blue-600 font-medium hover:text-blue-700"
                    target={
                      method.action.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      method.action.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>

              {/* ⚠️ Warning Message */}
              <div className="text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-3 text-sm mb-4 space-y-2">
                <div className="flex items-start space-x-2">
                  <span className="text-lg">⚠️</span>
                  <span>
                    <strong>Note:</strong> The website is currently under development. Please check back later for more updates.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-blue-700">📧</span>
                  <span>
                    You can still contact us at <strong>neelima@gratuityservices.com</strong> for immediate assistance.
                  </span>
                </div>
              </div>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your requirements in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-medium text-gray-900">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>
                      Free initial consultation and requirement analysis
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>
                      Expert guidance from FIII qualified professionals
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>Quick response within 24 hours guaranteed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span>Multi-state coverage across South India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="flex justify-center items-center min-h-[60vh] px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Actions
          </h3>

          <div className="space-y-4">
            <a
              href="tel:+919000552708"
              className="flex items-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition duration-200"
            >
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <span className="text-blue-800 font-semibold text-base">
                Call Now
              </span>
            </a>

            <a
              href="mailto:neelima@gratuityservices.com"
              className="flex items-center p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition duration-200"
            >
              <Mail className="h-6 w-6 text-purple-600 mr-3" />
              <span className="text-purple-800 font-semibold text-base">
                Send Email
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
