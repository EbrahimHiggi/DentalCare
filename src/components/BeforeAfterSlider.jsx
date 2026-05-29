import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const sliderRef = useRef(null);

  const cases = [
    {
      id: 1,
      before: 'https://www.americansmile.co.uk/wp-content/uploads/2020/01/Piotr-6.jpg',
      after: 'https://www.americansmile.co.uk/wp-content/uploads/2020/01/Piotr-1.jpg',
      title: 'Teeth Whitening Transformation',
      description: 'Professional whitening treatment results',
      duration: '2 Session',
      patient: 'Magdy M., 34'
    },
    {
      id: 2,
      before: 'https://www.americansmile.co.uk/wp-content/uploads/2023/11/Veneers-Teeth-London-1.jpg',
      after: 'https://www.americansmile.co.uk/wp-content/uploads/2023/11/Veneers-Teeth-London-2.jpg',
      title: 'Dental Veneers Transformation',
      description: 'Full mouth restoration with implants',
      duration: '2 Weeks',
      patient: 'Sara H., 39'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || !sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
      const percentage = (x / rect.width) * 100;
      
      setSliderPosition(Math.min(Math.max(percentage, 0), 100));
      
      if (e.cancelable) e.preventDefault();
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleMouseMove, { passive: false });
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Smile <span className="text-main-color">Transformations</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See the amazing results our patients achieve with our dental treatments
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {cases[activeCase].title}
              </h3>
              <p className="text-gray-600 mb-8">
                {cases[activeCase].description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Treatment Duration:</span>
                  <span className="font-semibold text-main-color">{cases[activeCase].duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Patient:</span>
                  <span className="font-semibold">{cases[activeCase].patient}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  className="px-6 py-3 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </button>
                <button 
                  className="px-6 py-3 border-2 border-main-color text-main-color font-semibold rounded-lg hover:bg-main-color/10 transition-colors duration-300"
                  onClick={() => alert('Viewing all case studies')}
                >
                  View All Cases
                </button>
              </div>
            </div>

            <div className="relative">
              <div 
                ref={sliderRef}
                className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Before image */}
                <img 
                  src={cases[activeCase].before} 
                  alt="before treatment" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* After image container */}
                <div 
                  className="after absolute inset-0 overflow-hidden z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img 
                    src={cases[activeCase].after} 
                    alt="after treatment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Slider handle */}
                <div 
                  className="edit absolute top-0 bottom-0 w-1 bg-main-color cursor-col-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-main-color rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
                    ↔
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 z-30">
                  <div className="px-3 py-1 bg-black/70 text-white rounded text-sm">
                    Before
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-30">
                  <div className="px-3 py-1 bg-main-color text-white rounded text-sm">
                    After
                  </div>
                </div>
              </div>

              {/* Case Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button 
                  onClick={prevCase}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  <FaArrowLeft className="text-gray-600" />
                </button>
                
                <div className="flex gap-2">
                  {cases.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeCase === index ? 'bg-main-color scale-125' : 'bg-gray-300'
                      }`}
                      onClick={() => {
                        setActiveCase(index);
                        setSliderPosition(50);
                      }}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextCase}
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  <FaArrowRight className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;