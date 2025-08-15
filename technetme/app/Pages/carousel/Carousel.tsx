import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, MapPin, Shield, CheckCircle } from "lucide-react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Software Services",
      icon: Code,
      description: "Custom software solutions tailored to your business needs",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      features: [
        "Web & Mobile App Development",
        "Enterprise Software Solutions", 
        "API Integration & Development",
        "Cloud-Based Applications"
      ],
      accentColor: "blue"
    },
    {
      id: 2,
      title: "GPS Devices",
      icon: MapPin,
      description: "Advanced GPS tracking and navigation solutions",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      features: [
        "Real-time Vehicle Tracking",
        "Fleet Management Systems",
        "Personal GPS Devices", 
        "Location Analytics & Reporting"
      ],
    },
    {
      id: 3,
      title: "Security Solutions",
      icon: Shield,
      description: "Comprehensive security systems for complete protection",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      features: [
        "CCTV Surveillance Systems",
        "Access Control Solutions",
        "Cybersecurity Services",
        "24/7 Monitoring & Support"
      ],
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full  overflow-hidden">
      {/* Full Width Carousel Container */}
      <div className="relative w-full md:h-[500px]">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="relative w-full h-full">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r opacity-85`}></div>
                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      
                      {/* Left Content */}
                      <div className="text-white space-y-8">
                        <div className="flex items-center space-x-4">
                          <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                            <IconComponent className="w-12 h-12" />
                          </div>
                          <h1 className="text-2xl font-bold tracking-tight">
                            {service.title}
                          </h1>
                        </div>
                        
                        <p className="text-xl font-light leading-relaxed text-white/95">
                          {service.description}
                        </p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                          {service.features.map((feature: string, featureIndex: number) => (
                            <div key={featureIndex} className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                              <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                              <span className="text-lg font-medium text-white/90">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Call to Action */}
                        <div className="flex space-x-4">
                          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                            Learn More
                          </button>
                          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200">
                            Get Started
                          </button>
                        </div>
                      </div>

                      {/* Right Visual Element */}
                      <div className="hidden lg:flex justify-center items-center">
                        <div className="relative">
                          {/* Large Icon Circle */}
                          <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20">
                            <IconComponent className="w-40 h-40 text-white/70" />
                          </div>
                          
                          {/* Floating Elements */}
                          <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                            <IconComponent className="w-12 h-12 text-white/80" />
                          </div>
                          <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/15 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse delay-1000">
                            <IconComponent className="w-8 h-8 text-white/60" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group border border-white/30"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:text-white/90" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 group border border-white/30"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:text-white/90" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Slide Indicators */}
          <div className="flex space-x-4">
            {services.map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white w-12' 
                    : 'bg-white/50 hover:bg-white/70 w-8'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute right-8 z-20 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
        <span className="text-white font-medium">
          {String(currentSlide + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default Carousel;
