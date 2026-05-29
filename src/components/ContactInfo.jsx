import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCar, FaWheelchair, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      content: '123 Dental Street, Medical City, DC 10001',
      link: 'https://maps.google.com',
      description: 'Free parking available • Wheelchair accessible',
      color: 'bg-blue-500'
    },
    {
      icon: <FaPhone />,
      title: 'Contact Numbers',
      content: '(123) 456-7890',
      link: 'tel:+1234567890',
      secondary: 'Emergency: (123) 555-7890',
      description: 'Mon-Fri: 8AM-8PM • Sat: 9AM-4PM',
      color: 'bg-green-500'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      content: 'info@dentalcare.com',
      link: 'mailto:info@dentalcare.com',
      secondary: 'appointments@dentalcare.com',
      description: 'Response within 24 hours',
      color: 'bg-purple-500'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      content: 'Monday - Friday',
      details: '8:00 AM - 8:00 PM',
      secondary: 'Saturday',
      secondaryDetails: '9:00 AM - 4:00 PM',
      description: 'Emergency services available 24/7',
      color: 'bg-orange-500'
    },
  ];

  const features = [
    { icon: <FaCar />, text: 'Ample Parking' },
    { icon: <FaWheelchair />, text: 'Wheelchair Access' },
    { icon: <FaCreditCard />, text: 'All Insurance Accepted' },
    { icon: <FaShieldAlt />, text: 'COVID Safe' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="text-main-color">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to answer your questions and provide the best dental care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white text-2xl">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              
              <div className="space-y-3">
                <div>
                  <a 
                    href={item.link} 
                    className="text-lg text-main-color font-semibold hover:underline block"
                  >
                    {item.content}
                  </a>
                  {item.details && (
                    <div className="text-gray-700 font-medium">{item.details}</div>
                  )}
                </div>
                
                {item.secondary && (
                  <div>
                    <div className="text-gray-600 font-medium">{item.secondary}</div>
                    {item.secondaryDetails && (
                      <div className="text-gray-700">{item.secondaryDetails}</div>
                    )}
                  </div>
                )}
                
                <div className="text-gray-500 text-sm pt-3 border-t border-gray-100">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Clinic <span className="text-main-color">Features</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comfortable and convenient experience for all our patients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 mx-auto bg-main-color/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-main-color group-hover:scale-110 transition-all duration-300">
                  <div className="text-main-color text-xl group-hover:text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="font-medium text-gray-700">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map & Directions */}
        <div className="mt-16 bg-gradient-to-r from-main-color to-secondary-color rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Find Our Clinic</h3>
              <p className="mb-6 text-white/90">
                Located in the heart of Medical City, with easy access from all major highways and public transportation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCar className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Parking</h4>
                    <p className="text-white/80 text-sm">Free dedicated parking lot with 50+ spaces</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaWheelchair className="text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Accessibility</h4>
                    <p className="text-white/80 text-sm">Fully wheelchair accessible with ramps and elevators</p>
                  </div>
                </div>
              </div>
              
              <button className="px-6 py-3 bg-white text-main-color font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Get Directions
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-transparent rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                      <FaMapMarkerAlt className="text-main-color text-2xl" />
                    </div>
                    <div className="font-bold">Interactive Map</div>
                    <div className="text-sm text-white/80">Click to view on Google Maps</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;