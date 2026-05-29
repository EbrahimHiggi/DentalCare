import React from 'react';
import { FaClock, FaPhone, FaCalendar, FaExclamationTriangle } from 'react-icons/fa';

const ScheduleTable = () => {
  const schedule = [
    {
      day: 'Monday',
      time: '8:00 AM - 8:00 PM',
      services: ['General Dentistry', 'Teeth Cleaning', 'Fillings', 'Consultations', 'Emergency'],
      highlight: false
    },
    {
      day: 'Tuesday',
      time: '8:00 AM - 8:00 PM',
      services: ['Orthodontics', 'Braces Fitting', 'Implants', 'Consultations', 'Emergency'],
      highlight: false
    },
    {
      day: 'Wednesday',
      time: '8:00 AM - 8:00 PM',
      services: ['Cosmetic Dentistry', 'Whitening', 'Veneers', 'Consultations', 'Emergency'],
      highlight: false
    },
    {
      day: 'Thursday',
      time: '8:00 AM - 8:00 PM',
      services: ['Oral Surgery', 'Root Canals', 'Extractions', 'Consultations', 'Emergency'],
      highlight: false
    },
    {
      day: 'Friday',
      time: '9:00 AM - 6:00 PM',
      services: ['Pediatric Dentistry', 'Family Dental', 'Check-ups', 'Consultations', 'Emergency'],
      highlight: false
    },
    {
      day: 'Saturday',
      time: '10:00 AM - 4:00 PM',
      services: ['Emergency Only', 'Urgent Care', 'Pain Relief'],
      highlight: true
    },
    {
      day: 'Sunday',
      time: 'Emergency Only',
      services: ['24/7 Emergency Line', 'Call: (123) 456-7890', 'Urgent Dental Care'],
      highlight: true
    },
  ];

  const emergencyServices = [
    { service: 'Toothache Relief', icon: <FaExclamationTriangle /> },
    { service: 'Broken Tooth', icon: <FaExclamationTriangle /> },
    { service: 'Lost Filling/Crown', icon: <FaExclamationTriangle /> },
    { service: 'Dental Trauma', icon: <FaExclamationTriangle /> },
    { service: 'Swelling/Abscess', icon: <FaExclamationTriangle /> },
    { service: 'Bleeding Gums', icon: <FaExclamationTriangle /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Clinic <span className="text-main-color">Hours & Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to serve you with flexible hours and comprehensive dental care
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Schedule Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schedule.map((daySchedule, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    daySchedule.highlight ? 'border-2 border-main-color' : 'border border-gray-200'
                  }`}
                >
                  <div className={`p-6 text-center ${
                    daySchedule.highlight ? 'bg-main-color text-white' : 'bg-gray-100'
                  }`}>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <FaClock className={daySchedule.highlight ? 'text-white' : 'text-main-color'} />
                     <h3
                     
                        className={`text-xl font-bold ${
                        daySchedule.highlight ? 'text-white' : 'text-gray-800'
                        }`}
                          >
                      {daySchedule.day}
                      <div className="w-12 h-1 bg-main-color mx-auto mt-2 rounded-full"></div>
                     </h3>
                     

                    </div>
                    <span className={`font-medium ${
                      daySchedule.highlight ? 'text-white/90' : 'text-gray-700'
                    }`}>{daySchedule.time}</span>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {daySchedule.services.map((service, idx) => (
                        <li 
                          key={idx}
                          className="flex items-center gap-3 text-gray-700 hover:text-main-color transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-main-color rounded-full"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                    
                    {daySchedule.highlight && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <button className="w-full py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition-colors duration-300 flex items-center justify-center gap-2">
                          <FaPhone />
                          Emergency Call: (123) 456-7890
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Services */}
          <div className="bg-gradient-to-br from-main-color to-secondary-color rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                <FaExclamationTriangle className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-2">24/7 Emergency Services</h3>
              <p className="text-white/90">
                Immediate care for dental emergencies
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {emergencyServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                  {service.icon}
                  <span className="font-medium">{service.service}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <button className="w-full py-3 bg-white text-main-color font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                <FaPhone />
                Call Now: (123) 456-7890
              </button>
              <button className="w-full py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2">
                <FaCalendar />
                Book Emergency Appointment
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-bold mb-3">Emergency Tips:</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Save any broken tooth pieces</li>
                <li>• Rinse with warm salt water</li>
                <li>• Apply cold compress for swelling</li>
                <li>• Take pain relievers if needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gray-100 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-main-color/10 rounded-full flex items-center justify-center mb-4">
                <FaClock className="text-main-color text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Average Wait Time</h4>
              <p className="text-gray-600">Less than 15 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-main-color/10 rounded-full flex items-center justify-center mb-4">
                <FaCalendar className="text-main-color text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Appointment Duration</h4>
              <p className="text-gray-600">30-60 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-main-color/10 rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-main-color text-xl" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Contact Hours</h4>
              <p className="text-gray-600">7:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTable;