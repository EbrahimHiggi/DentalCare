import React from 'react';
import { FaEnvelope, FaCalendar, FaStar, FaArrowRight } from 'react-icons/fa';

const Doctors = () => {
  const doctors = [
    {
      img: 'https://images.pexels.com/photos/6627919/pexels-photo-6627919.jpeg',
      name: 'Dr. Shady Ali',
      specialty: 'Orthodontist',
      experience: '5 years experience',
      rating: 4.8,
      description: 'Specializes in Invisalign and cosmetic dentistry.',
      schedule: 'Mon, Wed, Fri: 9AM - 6PM'
    },
    {
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Dr. Hany Saad',
      specialty: 'Implant Specialist',
      experience: '10 years experience',
      rating: 4.9,
      description: 'Expert in dental implants and oral surgery.',
      schedule: 'Tue, Thu: 8AM - 5PM'
    },
    {
      img: 'https://images.pexels.com/photos/6129578/pexels-photo-6129578.jpeg',
      name: 'Dr. Eslam Khaled',
      specialty: 'Cosmetic Dentist',
      experience: '8 years experience',
      rating: 4.7,
      description: 'Focuses on smile makeovers and veneers.',
      schedule: 'Mon-Fri: 10AM - 7PM'
    },
    {
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      name: 'Dr. Micheal Mina',
      specialty: 'Oral Surgeon',
      experience: '4 years experience',
      rating: 4.7,
      description: 'Specializes in complex extractions and surgeries.',
      schedule: 'Mon, Wed, Fri: 8AM - 4PM'
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-main-color">Expert Dentists</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our team of certified dental professionals is dedicated to your oral health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.img} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute top-4 right-4 bg-main-color text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {doctor.specialty}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-gray-600 mb-3">{doctor.experience}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-sm ${i < Math.floor(doctor.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-gray-600 ml-2">{doctor.rating}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{doctor.description}</p>
                
                <div className="text-sm text-gray-500 mb-6">
                  <div className="font-medium mb-1">Available:</div>
                  {doctor.schedule}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300 flex items-center justify-center gap-2">
                    <FaCalendar />
                    Book Now
                  </button>
                  <button className="px-4 py-2 border border-main-color text-main-color font-semibold rounded-lg hover:bg-main-color/10 transition-colors duration-300">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-main-color text-main-color font-semibold rounded-lg hover:bg-main-color hover:text-white transition-colors duration-300">
            View All Doctors
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;