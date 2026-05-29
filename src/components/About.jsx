import React from 'react';
import { FaUserMd, FaSmile, FaAward, FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const About = () => {
  // تعريف الصور مباشرة في المكون
  const defaultImages = {
    clinic: {
      hero: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      interior: "https://images.unsplash.com/photo-1622902046580-56e2f6d5c7ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      waiting: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      team: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  };

  const stats = [
    { 
      icon: <FaUserMd />, 
      number: "15+", 
      text: 'Expert Dentists',
      description: 'Certified professionals'
    },
    { 
      icon: <FaSmile />, 
      number: "6000+", 
      text: 'Happy Patients',
      description: 'Successful treatments'
    },
    { 
      icon: <FaAward />, 
      number: "12+", 
      text: 'Years Experience',
      description: 'In dental care'
    },
    { 
      icon: <FaStar />, 
      number: "4.9", 
      text: 'Patient Rating',
      description: 'Out of 5 stars'
    },
  ];

  const features = [
    "Advanced Dental Technology",
    "Pain-Free Treatment Options",
    "Emergency Services 24/7",
    "Child-Friendly Environment",
    "Insurance & Payment Plans",
    "Multilingual Staff"
  ];

  const handleAppointmentClick = (e) => {
    e.preventDefault();
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-main-color">DentalCare</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your trusted partner for comprehensive dental care and beautiful smiles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative overflow-hidden">
                <img 
                  src={defaultImages.clinic.team} 
                  alt="Professional dental team providing excellent care" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  style={{ 
                    objectPosition: 'center 30%',
                    filter: 'brightness(1.05) contrast(1.05)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-lg font-semibold">Our Professional Team</p>
                <p className="text-sm opacity-90">Certified & Experienced Dentists</p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-main-color text-white p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 z-10">
              <div className="text-center">
                <div className="text-4xl font-bold">Since 2010</div>
                <div className="text-lg">Serving Community</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Your Smile Journey <span className="text-main-color">Starts Here</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At DentalCare, we're committed to providing exceptional dental care in a comfortable and modern environment. 
              Our team of experienced professionals uses the latest technology to ensure you receive the best possible treatment.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              With over a decade of experience, we've helped thousands of patients achieve healthier, more confident smiles. 
              Our patient-centered approach ensures that every visit is comfortable and stress-free.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-main-color/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-main-color group-hover:scale-110 transition-all duration-300">
                    <FaCheckCircle className="text-main-color group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleAppointmentClick}
              className="inline-flex items-center gap-3 px-8 py-3 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-all duration-300 hover:scale-105 transform group"
            >
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              Book Your Appointment
            </button>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-main-color" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Free Consultation</p>
                    <p className="text-sm text-gray-600">Initial assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-main-color" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Modern Equipment</p>
                    <p className="text-sm text-gray-600">Latest technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Achievements</h3>
            <p className="text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-4 group-hover:bg-main-color group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="text-main-color text-3xl group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  {/* Animated background effect */}
                  <div className="absolute inset-0 -z-10 bg-main-color/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-main-color transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">{stat.text}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
          
          {/* Divider */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Certifications & Accreditations</h4>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium">ADA Certified</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium">ISO 9001</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium">JCI Accredited</span>
                </div>
                <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-gray-700 font-medium">Top Dental Clinic 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl shadow-lg">
            <div className="w-14 h-14 bg-main-color/10 rounded-2xl flex items-center justify-center mb-6">
              <FaCheckCircle className="text-main-color text-2xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h4>
            <p className="text-gray-600">
              To provide exceptional dental care that improves oral health, enhances smiles, 
              and positively impacts the overall well-being of our patients through compassionate 
              service and advanced technology.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-3xl shadow-lg">
            <div className="w-14 h-14 bg-main-color/10 rounded-2xl flex items-center justify-center mb-6">
              <FaStar className="text-main-color text-2xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h4>
            <p className="text-gray-600">
              To be the leading dental care provider recognized for excellence in patient care, 
              innovation in dental technology, and commitment to creating healthy, beautiful smiles 
              for generations to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;