import React from 'react';
import { FaTooth, FaFillDrip, FaTeeth, FaMagic, FaTint } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      icon: <FaTooth className="text-3xl" />,
      title: 'Teeth Cleaning',
      description: 'Professional cleaning and polishing for a brighter, healthier smile.',
      features: ['Plaque Removal', 'Tartar Removal', 'Polishing', 'Fluoride Treatment'],
      color: 'bg-blue-500'
    },
    {
      icon: <FaFillDrip className="text-3xl" />,
      title: 'Dental Filling',
      description: 'Restore damaged teeth with natural-looking, tooth-colored fillings.',
      features: ['Composite Fillings', 'Ceramic Fillings', 'Pain-Free', 'Same-Day'],
      color: 'bg-green-500'
    },
    {
      icon: <GiTooth className="text-3xl" />,
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth that looks and feels natural.',
      features: ['Titanium Implants', 'Ceramic Crowns', 'Lifetime Warranty', '3D Planning'],
      color: 'bg-purple-500'
    },
    {
      icon: <FaTeeth className="text-3xl" />,
      title: 'Orthodontics',
      description: 'Straighten your teeth with invisible aligners or traditional braces.',
      features: ['Invisalign', 'Traditional Braces', 'Ceramic Braces', 'Retainers'],
      color: 'bg-orange-500'
    },
    {
      icon: <FaMagic className="text-3xl" />,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatment for a dazzling, white smile.',
      features: ['Laser Whitening', 'Take-Home Kits', 'Instant Results', 'Safe Process'],
      color: 'bg-pink-500'
    },
    {
      icon: <FaTint className="text-3xl" />,
      title: 'Root Canal',
      description: 'Save infected teeth with our painless root canal treatment.',
      features: ['Microscopic Treatment', 'Pain Management', 'Single Visit', 'Success Guarantee'],
      color: 'bg-red-500'
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-main-color">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive dental care solutions for you and your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Includes:</div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="text-main-color font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-main-color to-secondary-color rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Need Emergency Dental Care?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Our emergency services are available 24/7 to provide immediate relief and treatment.
            </p>
            <button className="px-8 py-3 bg-white text-main-color font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Call Emergency: (123) 456-7890
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;