import React, { useState } from 'react';
import { FaPhone, FaCalendarAlt, FaUser, FaEnvelope, FaTooth, FaClock, FaPaperPlane } from 'react-icons/fa';
import { GiToothbrush } from 'react-icons/gi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number validation
    if (name === 'phone' && value.length > 15) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Appointment request sent successfully! We will contact you shortly to confirm.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const services = [
    { value: 'cleaning', label: 'Teeth Cleaning', icon: <GiToothbrush /> },
    { value: 'checkup', label: 'Dental Check-up', icon: <FaTooth /> },
    { value: 'whitening', label: 'Teeth Whitening', icon: <FaTooth /> },
    { value: 'filling', label: 'Dental Filling', icon: <FaTooth /> },
    { value: 'implant', label: 'Dental Implant', icon: <FaTooth /> },
    { value: 'braces', label: 'Braces/Orthodontics', icon: <FaTooth /> },
    { value: 'emergency', label: 'Emergency Care', icon: <FaClock /> },
    { value: 'consultation', label: 'Free Consultation', icon: <FaUser /> },
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Book Your <span className="text-main-color">Appointment</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Schedule your visit online or call us directly. We're here to help you smile!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <FaCalendarAlt className="text-main-color" />
              Schedule Online
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaUser className="text-main-color" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaPhone className="text-main-color" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(123) 456-7890"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <FaEnvelope className="text-main-color" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaTooth className="text-main-color" />
                      Select Service
                    </label>
                    <select
                      name="service"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300 appearance-none"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Choose a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <FaCalendarAlt className="text-main-color" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <FaClock className="text-main-color" />
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          formData.time === time 
                            ? 'bg-main-color text-white border-main-color' 
                            : 'bg-white text-gray-700 border-gray-300 hover:border-main-color'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, time }))}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    placeholder="Any specific concerns or questions..."
                    className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300 h-32 resize-none"
                    value={formData.notes}
                    onChange={handleInputChange}
                    maxLength={500}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Book Appointment Now
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <div className="relative rounded-3xl overflow-hidden shadow-xl mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Modern & Comfortable</h3>
                    <p>State-of-the-art dental facility</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-main-color/10 rounded-full flex items-center justify-center mb-4">
                    <FaPhone className="text-main-color text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Call Us Now</h4>
                  <a href="tel:+1234567890" className="text-main-color font-semibold text-lg hover:underline">
                    (123) 456-7890
                  </a>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-main-color/10 rounded-full flex items-center justify-center mb-4">
                    <FaClock className="text-main-color text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Open Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 8AM-8PM</p>
                  <p className="text-gray-600">Sat: 9AM-4PM</p>
                </div>
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-2xl animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">24/7 Emergency Dental Care</h4>
                  <p className="text-white/90">Immediate attention for dental emergencies</p>
                </div>
              </div>
              <button className="w-full py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Emergency Call: (123) 555-7890
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;