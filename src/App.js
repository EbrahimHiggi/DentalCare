import React from 'react';
import Header from './components/header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import BeforeAfterSlider from './components/BeforeAfterSlider.jsx';
import Doctors from './components/Doctors.jsx';
import ScheduleTable from './components/ScheduleTable.jsx';
import DentalHealthCalculator from './components/DentalHealthCalculator.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import Footer from './components/Footer.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Home />
      <About />
      <Services />
      <BeforeAfterSlider />
      <Doctors />
      <ScheduleTable />
      <DentalHealthCalculator />
      <Testimonials />
      <Pricing />
      <Contact />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;