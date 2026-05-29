import React, { useState } from 'react';
import { FaCheck, FaTimes, FaArrowRight, FaCrown, FaGem, FaStar } from 'react-icons/fa';

const Pricing = () => {
  const [activePlan, setActivePlan] = useState('basic');

  const plans = [
    { id: 'basic', name: 'Basic Care', icon: <FaCheck />, description: 'Essential dental services' },
    { id: 'premium', name: 'Premium', icon: <FaCrown />, description: 'Comprehensive care package' },
    { id: 'comprehensive', name: 'Comprehensive', icon: <FaGem />, description: 'All-inclusive dental plan' },
  ];

  const packages = [
    {
      name: 'Dental Check-up',
      icon: <FaCheck />,
      basic: { price: '99', features: ['Consultation', 'X-Ray', 'Teeth Cleaning'] },
      premium: { price: '149', features: ['Consultation', 'X-Ray', 'Teeth Cleaning', 'Oral Exam', 'Fluoride Treatment'] },
      comprehensive: { price: '199', features: ['Consultation', 'X-Ray', 'Teeth Cleaning', 'Oral Exam', 'Fluoride Treatment', 'Oral Cancer Screening'] }
    },
    {
      name: 'Dental Treatment',
      icon: <FaStar />,
      basic: { price: '199', features: ['Filling (1 tooth)', 'Local Anesthesia'] },
      premium: { price: '299', features: ['Filling (2 teeth)', 'Local Anesthesia', 'Sedation Options'] },
      comprehensive: { price: '399', features: ['Filling (3 teeth)', 'Local Anesthesia', 'Sedation Options', 'Follow-up Visit'] }
    },
    {
      name: 'Cosmetic Dentistry',
      icon: <FaGem />,
      basic: { price: '299', features: ['Teeth Whitening'] },
      premium: { price: '499', features: ['Teeth Whitening', 'Composite Bonding'] },
      comprehensive: { price: '799', features: ['Teeth Whitening', 'Composite Bonding', 'Porcelain Veneers (1 tooth)'] }
    },
  ];

  const insuranceProviders = [
    'Delta Dental', 'Cigna', 'Aetna', 'MetLife', 'Humana', 'Blue Cross Blue Shield'
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transparent <span className="text-main-color">Pricing</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Affordable dental care with no hidden fees. All prices are per visit.
          </p>
        </div>

        {/* Plan Selector */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {plans.map((plan) => (
            <button
              key={plan.id}
              className={`flex-1 max-w-sm px-6 py-4 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3 ${
                activePlan === plan.id
                  ? 'bg-main-color text-white shadow-lg shadow-main-color/30'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-main-color'
              }`}
              onClick={() => setActivePlan(plan.id)}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                activePlan === plan.id ? 'bg-white/20' : 'bg-main-color/10'
              }`}>
                <div className={activePlan === plan.id ? 'text-white' : 'text-main-color'}>
                  {plan.icon}
                </div>
              </div>
              <div>
                <div className="font-bold text-lg">{plan.name}</div>
                <div className="text-sm opacity-80">{plan.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                index === 1 ? 'border-2 border-main-color' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-main-color text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-main-color/10 rounded-2xl flex items-center justify-center">
                  <div className="text-main-color text-2xl">
                    {pkg.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-gray-600">$</span>
                  <div className="text-5xl font-bold text-gray-800">
                    {pkg[activePlan]?.price || '99'}
                  </div>
                  <span className="text-gray-600 text-lg">/ visit</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="text-gray-600 font-medium mb-4">Includes:</div>
                <ul className="space-y-3">
                  {(pkg[activePlan]?.features || []).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheck className="text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {pkg[activePlan]?.features?.length < 6 && (
                    <li className="flex items-center gap-3 text-gray-400">
                      <FaTimes />
                      <span>Additional services available</span>
                    </li>
                  )}
                </ul>
              </div>
              
              <button 
                className="w-full py-3 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300 flex items-center justify-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaArrowRight />
                Book This Package
              </button>
            </div>
          ))}
        </div>

        {/* Insurance & Payment Info */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Insurance & Payment Options
              </h3>
              <p className="text-gray-600 mb-8">
                We accept most major insurance plans and offer flexible payment options to make dental care accessible for everyone.
              </p>
              
              <div className="mb-8">
                <div className="font-semibold text-gray-700 mb-4">Accepted Insurance:</div>
                <div className="flex flex-wrap gap-3">
                  {insuranceProviders.map((provider, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm">
                      {provider}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-main-color/10 rounded-full flex items-center justify-center">
                    <FaCheck className="text-main-color" />
                  </div>
                  <span className="text-gray-700">Flexible Payment Plans Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-main-color/10 rounded-full flex items-center justify-center">
                    <FaCheck className="text-main-color" />
                  </div>
                  <span className="text-gray-700">0% Interest Financing Options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-main-color/10 rounded-full flex items-center justify-center">
                    <FaCheck className="text-main-color" />
                  </div>
                  <span className="text-gray-700">Credit Cards, Checks & Cash Accepted</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-6">
                Need a Cost Estimate?
              </h4>
              <p className="text-gray-600 mb-6">
                Contact us for a personalized treatment plan and cost estimate.
              </p>
              <button 
                className="w-full py-3 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;