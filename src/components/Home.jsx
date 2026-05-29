import React, { useState, useEffect, useRef } from 'react';
import { FaTooth, FaClock, FaPhone, FaArrowRight, FaCalendarCheck, FaUserMd, FaSmile, FaAward } from 'react-icons/fa';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef(null);

  const defaultImages = {
    clinic: {
      hero: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      interior: "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      waiting: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      // Fallback images
      fallbackHero: "https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=Dental+Clinic",
      fallbackInterior: "https://via.placeholder.com/800x500/3B82F6/FFFFFF?text=Clinic+Interior"
    },
    services: {
      whitening: "✨",
      implant: "🦷",
      braces: "🎯",
      rootcanal: "⚡"
    }
  };

  useEffect(() => {
    const updateHeroPadding = () => {
      if (heroRef.current) {
        const header = document.querySelector('header');
        if (header) {
          const headerHeight = header.offsetHeight;
          heroRef.current.style.paddingTop = `${headerHeight}px`;
          heroRef.current.style.minHeight = `calc(100vh - ${headerHeight}px)`;
        }
      }
    };

    const timer = setTimeout(updateHeroPadding, 100);
    window.addEventListener('resize', updateHeroPadding);
    
    const observer = new MutationObserver(updateHeroPadding);
    const header = document.querySelector('header');
    if (header) {
      observer.observe(header, { attributes: true, attributeFilter: ['class'] });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeroPadding);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dentalServices = [
    {
      title: "Teeth Whitening",
      description: "Get a brighter smile in just one session",
      color: "bg-blue-500",
      emoji: defaultImages.services.whitening
    },
    {
      title: "Dental Implants",
      description: "Permanent solution for missing teeth",
      color: "bg-green-500",
      emoji: defaultImages.services.implant
    },
    {
      title: "Braces",
      description: "Straighten your teeth comfortably",
      color: "bg-purple-500",
      emoji: defaultImages.services.braces
    },
    {
      title: "Root Canal",
      description: "Pain-free treatment for infected teeth",
      color: "bg-orange-500",
      emoji: defaultImages.services.rootcanal
    }
  ];

  const stats = [
    { number: "15+", label: "Expert Dentists", icon: <FaUserMd /> },
    { number: "6000+", label: "Happy Patients", icon: <FaSmile /> },
    { number: "12+", label: "Years Experience", icon: <FaClock /> },
    { number: "98%", label: "Success Rate", icon: <FaAward /> }
  ];

  const handleEmergencyClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleAppointmentClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  // دالة لمعالجة أخطاء تحميل الصور
  const handleImageError = (e, fallbackUrl) => {
    console.warn('Failed to load image, using fallback');
    e.currentTarget.src = fallbackUrl;
    e.currentTarget.onerror = null; // منع التكرار
    e.currentTarget.classList.add('opacity-90'); // إضافة opacity للصورة الاحتياطية
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Section مع padding-top ديناميكي */}
      <div 
        ref={heroRef}
        className="relative flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50 transition-all duration-300"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-main-color rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-color rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-main-color rounded-full flex items-center justify-center">
                  <FaTooth className="text-white text-2xl" />
                </div>
                <span className="text-main-color font-semibold text-lg">WELCOME TO DENTALCARE</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
                Modern & <span className="text-main-color">Achieve Your</span> <br />
                <span className="text-main-color">Desired Perfect</span> Smile
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleAppointmentClick}
                  className="group px-8 py-4 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <FaCalendarCheck className="text-xl" />
                  Make an Appointment
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={handleEmergencyClick}
                  className="px-8 py-4 bg-transparent border-2 border-main-color text-main-color font-semibold rounded-lg hover:bg-main-color/10 transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <FaPhone className="text-xl" />
                  Emergency Call
                </button>
              </div>
            </div>

            {/* Right Image - HERO IMAGE مع التحسينات */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={defaultImages.clinic.hero}
                  alt="Modern dental clinic interior"
                  className="w-full h-[500px] min-h-[500px] object-cover block bg-gray-100"
                  decoding="async"
                  loading="eager"
                  style={{ 
                    objectPosition: 'center center',
                    filter: 'brightness(1.05) contrast(1.05)'
                  }}
                  onError={(e) => handleImageError(e, defaultImages.clinic.fallbackHero)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-main-color/10 rounded-full flex items-center justify-center">
                    <FaUserMd className="text-main-color text-2xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-main-color p-6 rounded-2xl shadow-xl z-20 hover:scale-105 transition-transform duration-300">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div>Emergency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-16 bg-white transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-main-color/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-main-color group-hover:scale-110 transition-all duration-300">
                  <div className="text-main-color text-3xl group-hover:text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-main-color">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer a wide range of dental services to keep your smile healthy and beautiful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dentalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-3xl">
                      {service.emoji}
                    </div>
                  </div>
                  <div className="text-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-main-color font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={defaultImages.clinic.interior}
                  alt="Modern dental clinic interior"
                  className="w-full h-[500px] min-h-[500px] object-cover block bg-gray-100"
                  decoding="async"
                  loading="eager"
                  style={{ 
                    objectPosition: 'center center',
                    filter: 'brightness(1.05)'
                  }}
                  onError={(e) => handleImageError(e, defaultImages.clinic.fallbackInterior)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-main-color text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-lg">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose <span className="text-main-color">DentalCare</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We combine expertise with compassion to provide you with the best dental care experience.
              </p>
              
              <div className="space-y-6">
                {[
                  "Advanced Technology & Equipment",
                  "Experienced & Certified Dentists",
                  "Pain-Free Treatment Options",
                  "Emergency Dental Services 24/7",
                  "Affordable & Transparent Pricing",
                  "Comfortable & Modern Clinic"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-main-color/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-main-color group-hover:scale-110 transition-all duration-300">
                      <FaArrowRight className="text-main-color text-sm group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleAppointmentClick}
                className="mt-8 px-8 py-3 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300 hover:scale-105 transform"
              >
                Book Your Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-main-color to-secondary-color">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Healthier Smile?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards your perfect smile. Schedule a consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleAppointmentClick}
              className="px-8 py-4 bg-white text-main-color font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={handleEmergencyClick}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 transform"
            >
              Emergency: (123) 456-7890
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;