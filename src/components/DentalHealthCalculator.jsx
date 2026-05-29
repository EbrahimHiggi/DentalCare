import React, { useState } from 'react';
import { FaTooth, FaTeeth, FaCalendarCheck, FaHeart } from 'react-icons/fa';

const DentalHealthCalculator = () => {
  const [brushing, setBrushing] = useState('');
  const [flossing, setFlossing] = useState('');
  const [checkup, setCheckup] = useState('');
  const [result, setResult] = useState({
    message: 'Complete the form to check your dental health',
    color: 'text-gray-600',
    recommendation: '',
    score: 0
  });

  const calculateDentalHealth = () => {
    const brushScore = parseInt(brushing) || 0;
    const flossScore = parseInt(flossing) || 0;
    const checkupScore = parseInt(checkup) || 0;
    
    const totalScore = brushScore + flossScore + checkupScore;
    
    let message = '';
    let color = '';
    let recommendation = '';
    
    if (totalScore >= 5) {
      message = 'Excellent Dental Health! 🎉';
      color = 'text-green-600';
      recommendation = 'Maintain your excellent habits! Schedule your next check-up in 6 months.';
    } else if (totalScore >= 3) {
      message = 'Good Dental Health! 👍';
      color = 'text-blue-600';
      recommendation = 'You\'re doing well! Consider improving your flossing habits. Schedule a check-up within 3-6 months.';
    } else {
      message = 'Needs Improvement! ⚠️';
      color = 'text-orange-600';
      recommendation = 'Schedule a dental appointment as soon as possible to prevent future issues.';
    }
    
    setResult({
      message,
      color,
      recommendation,
      score: totalScore
    });
  };

  const getScoreColor = (score) => {
    if (score >= 5) return 'bg-green-100 text-green-800';
    if (score >= 3) return 'bg-blue-100 text-blue-800';
    return 'bg-orange-100 text-orange-800';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dental Health <span className="text-main-color">Assessment</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Check your oral health habits and get personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Rate Your Dental Habits
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-3 text-gray-700 font-medium mb-3">
                    <FaTooth className="text-main-color" />
                    How often do you brush your teeth?
                  </label>
                  <select 
                    id="brushing" 
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                    value={brushing}
                    onChange={(e) => setBrushing(e.target.value)}
                  >
                    <option value="" disabled>Select frequency</option>
                    <option value="3">3+ times daily (Excellent)</option>
                    <option value="2">2 times daily (Good)</option>
                    <option value="1">Once daily (Fair)</option>
                    <option value="0">Less than daily (Poor)</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center gap-3 text-gray-700 font-medium mb-3">
                    <FaTeeth className="text-main-color" />
                    How often do you floss?
                  </label>
                  <select 
                    id="flossing" 
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                    value={flossing}
                    onChange={(e) => setFlossing(e.target.value)}
                  >
                    <option value="" disabled>Select frequency</option>
                    <option value="3">Daily (Excellent)</option>
                    <option value="2">Every other day (Good)</option>
                    <option value="1">Weekly (Fair)</option>
                    <option value="0">Rarely/Never (Poor)</option>
                  </select>
                </div>
                
                <div>
                  <label className="flex items-center gap-3 text-gray-700 font-medium mb-3">
                    <FaCalendarCheck className="text-main-color" />
                    When was your last dental check-up?
                  </label>
                  <select 
                    id="checkup" 
                    className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 focus:border-main-color focus:ring-2 focus:ring-main-color/20 focus:outline-none transition-all duration-300"
                    value={checkup}
                    onChange={(e) => setCheckup(e.target.value)}
                  >
                    <option value="" disabled>Select timeframe</option>
                    <option value="3">Less than 6 months ago (Excellent)</option>
                    <option value="2">6-12 months ago (Good)</option>
                    <option value="1">1-2 years ago (Fair)</option>
                    <option value="0">More than 2 years ago (Poor)</option>
                  </select>
                </div>
                
                <button 
                  className="w-full py-4 bg-main-color text-white font-semibold rounded-lg hover:bg-secondary-color transition-colors duration-300 flex items-center justify-center gap-3"
                  onClick={calculateDentalHealth}
                >
                  <FaHeart />
                  Check My Dental Health
                </button>
              </div>
            </div>

            {/* Right Side - Results */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Your Results
              </h3>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {result.score > 0 && (
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreColor(result.score)} mb-4`}>
                      <span className="text-2xl font-bold">{result.score}/9</span>
                    </div>
                    <div className="text-sm text-gray-600">Health Score</div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className={`text-xl font-bold ${result.color} mb-4`}>
                    {result.message}
                  </h4>
                  <p className="text-gray-600">
                    {result.recommendation}
                  </p>
                </div>
                
                {result.score > 0 && (
                  <div className="border-t border-gray-200 pt-6">
                    <h5 className="font-semibold text-gray-700 mb-4">Recommendations:</h5>
                    <ul className="space-y-3">
                      {result.score < 5 && (
                        <>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-main-color rounded-full mt-2"></div>
                            <span className="text-gray-600">Brush twice daily for 2 minutes</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-main-color rounded-full mt-2"></div>
                            <span className="text-gray-600">Floss at least once per day</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-main-color rounded-full mt-2"></div>
                            <span className="text-gray-600">Schedule regular dental check-ups every 6 months</span>
                          </li>
                        </>
                      )}
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-main-color rounded-full mt-2"></div>
                        <span className="text-gray-600">Use fluoride toothpaste</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-main-color rounded-full mt-2"></div>
                        <span className="text-gray-600">Limit sugary foods and drinks</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              {result.score > 0 && (
                <button 
                  className="w-full mt-6 py-3 border-2 border-main-color text-main-color font-semibold rounded-lg hover:bg-main-color/10 transition-colors duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Check-up Appointment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalHealthCalculator;