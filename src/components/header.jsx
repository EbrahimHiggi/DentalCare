import React, { useState, useEffect } from 'react';
import { FaTooth, FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleAppointmentClick = () => {
    setIsMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-main-color rounded-full flex items-center justify-center">
              <FaTooth className="text-white text-xl" />
            </div>
            <span className="text-2xl font-bold text-gray-800">DENTALCARE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-700 hover:text-main-color font-medium transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={handleAppointmentClick}
              className="ml-4 px-6 py-2 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300 flex items-center gap-2"
            >
              <FaPhone className="text-sm" />
              Make an Appointment
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'opacity-100 py-4' : 'opacity-0 h-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-5">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 text-gray-700 hover:text-main-color font-medium transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={handleAppointmentClick}
              className="w-full mt-4 px-6 py-3 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FaPhone />
              Make an Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;