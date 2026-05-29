import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaTooth, 
  FaPhone, 
  FaClock, 
  FaMapMarkerAlt, 
  FaEnvelope,
  FaArrowRight,
  FaShieldAlt,
  FaAward,
  FaHeartbeat
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        alert('Thank you for subscribing to our newsletter! You will receive updates on dental health tips and special offers.');
        setEmail('');
        setIsSubscribed(false);
      }, 100);
    }
  };

  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const quickLinks = [
    { label: 'Emergency Dental Care', href: '#emergency' },
    { label: 'Dental Insurance', href: '#insurance' },
    { label: 'Payment Options', href: '#payment' },
    { label: 'Careers', href: '#careers' },
    { label: 'Patient Forms', href: '#forms' },
    { label: 'FAQs', href: '#faq' },
  ];

  const servicesLinks = [
    { label: 'Teeth Whitening', href: '#whitening' },
    { label: 'Dental Implants', href: '#implants' },
    { label: 'Braces & Invisalign', href: '#braces' },
    { label: 'Root Canal Treatment', href: '#rootcanal' },
    { label: 'Cosmetic Dentistry', href: '#cosmetic' },
    { label: 'Pediatric Dentistry', href: '#pediatric' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#', label: 'Facebook' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: '(123) 456-7890', href: 'tel:+1234567890' },
    { icon: <FaEnvelope />, text: 'info@dentalcare.com', href: 'mailto:info@dentalcare.com' },
    { icon: <FaMapMarkerAlt />, text: '123 Dental Street, Medical City', href: '#' },
    { icon: <FaClock />, text: 'Mon-Fri: 8AM-8PM • Sat: 9AM-4PM', href: '#' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-main-color rounded-full flex items-center justify-center">
                <FaTooth className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">DentalCare</h3>
                <p className="text-sm text-gray-500">Premium Dental Clinic</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner for comprehensive dental care. We combine expertise with compassion to provide the best dental experience.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaShieldAlt className="text-main-color" />
                <span>Certified Dentists</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaAward className="text-main-color" />
                <span>5-Star Rating</span>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <FaHeartbeat className="text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Emergency Care</h4>
                  <a href="tel:+1235557890" className="text-red-600 font-bold hover:underline">
                    (123) 555-7890
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-600 hover:text-main-color hover:translate-x-2 transition-all duration-300 flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold text-gray-800 mt-8 mb-6">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-main-color transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Contact Information</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="text-main-color">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <a 
                      href={info.href} 
                      className="text-gray-700 hover:text-main-color transition-colors duration-300"
                    >
                      {info.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Stay Updated</h4>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to our newsletter for dental tips and special offers.
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-l-lg focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className={`px-4 py-3 bg-main-color text-white font-semibold rounded-r-lg transition-all duration-300 ${
                    isSubscribed ? 'bg-green-500' : 'hover:bg-secondary-color'
                  }`}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? '✓' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Social & Additional Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-main-color hover:text-white hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <h4 className="text-lg font-bold text-gray-800 mb-6">Additional Resources</h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-main-color transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Accreditation */}
            <div className="bg-blue-50 rounded-xl p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Certified & Accredited</h5>
              <p className="text-gray-600 text-sm">
                ADA Member • State Licensed • HIPAA Compliant • Board Certified Dentists
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © {currentYear} DentalCare Clinic. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#privacy" className="text-gray-600 hover:text-main-color transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-600 hover:text-main-color transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-gray-600 hover:text-main-color transition-colors duration-300">
                Sitemap
              </a>
              <a href="#accessibility" className="text-gray-600 hover:text-main-color transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>
              This website is for informational purposes only. Consult with our dental professionals for medical advice.
            </p>
            <p className="mt-2">
              Created by <span className="text-main-color font-semibold">Ebrahim Mohamed</span> • Dental excellence since 2010
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;