import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaStar, FaStarHalfAlt, FaAngleLeft, FaAngleRight, FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = [
    {
      img: 'https://images.pexels.com/photos/6999225/pexels-photo-6999225.jpeg',
      name: 'John Smith',
      text: 'Best dental experience ever! Painless treatment and amazing results. The team was professional and caring throughout.',
      rating: 4.5,
      treatment: 'Teeth Whitening'
    },
    {
      img: 'https://images.pexels.com/photos/6084178/pexels-photo-6084178.jpeg',
      name: 'Mariam Ali',
      text: 'My smile transformation was incredible. Thank you DentalCare! I finally feel confident showing my teeth.',
      rating: 5,
      treatment: 'Dental Implants'
    },
    {
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      name: 'David Wilson',
      text: 'Professional, friendly, and completely pain-free. Highly recommended! The facilities are modern and clean.',
      rating: 5,
      treatment: 'Root Canal'
    },
    {
      img: 'https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg',
      name: 'Hassan Fawzey',
      text: 'Emergency service saved me on a weekend. Truly lifesavers! Quick response and excellent care.',
      rating: 5,
      treatment: 'Emergency Care'
    },
    {
      img: 'https://images.pexels.com/photos/6238089/pexels-photo-6238089.jpeg',
      name: 'Mina Maher',
      text: 'From consultation to follow-up, everything was perfect. My dental anxiety is completely gone now.',
      rating: 4.5,
      treatment: 'Full Check-up'
    },
    {
      img: 'https://images.pexels.com/photos/5876516/pexels-photo-5876516.jpeg',
      name: 'Khaled Anwer',
      text: 'The braces treatment was comfortable and effective. The orthodontist explained everything clearly.',
      rating: 5,
      treatment: 'Braces'
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    // Fill empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Patient <span className="text-main-color">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our patients say about their experience at DentalCare
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full mx-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.img} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-main-color rounded-full flex items-center justify-center">
                        <FaQuoteLeft className="text-white text-xs" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-main-color font-medium">{testimonial.treatment}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      Verified Patient • {testimonial.rating}/5 Rating
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white text-main-color rounded-full shadow-lg hover:shadow-xl z-10 hover:bg-main-color hover:text-white transition-all duration-300 flex items-center justify-center">
            <FaAngleLeft className="text-xl" />
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white text-main-color rounded-full shadow-lg hover:shadow-xl z-10 hover:bg-main-color hover:text-white transition-all duration-300 flex items-center justify-center">
            <FaAngleRight className="text-xl" />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-main-color mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-main-color mb-2">6000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-main-color mb-2">98%</div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-main-color mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;