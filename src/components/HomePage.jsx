import React from 'react';
import { useNavigate } from 'react-router-dom';

// IMPORTANT: NO IMAGE IMPORTS HERE!

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      <nav className="nav-header bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-6">
              <img 
                src="/centuriesmutual/cmlogotrans.png"
                alt="Centuries Mutual Logo" 
                className="h-20 w-auto" 
              />
              <span className="brand-text text-4xl font-bold text-primary">Centuries Mutual</span>
            </div>
            <div>
              <button 
                onClick={() => navigate('/login')} 
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Client Portal
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Secure Your Financial Future
              </h1>
              <p className="text-xl mb-8 font-light">
                Expert wealth management solutions tailored to your unique goals and aspirations.
              </p>
              <button 
                onClick={() => navigate('/learn-more')} 
                className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-cream transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="/centuriesmutual/buffalohero.jpeg"
                alt="Wealth Management" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Broker Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              onClick={() => navigate('/tax-services')}
              className="service-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <i className="fas fa-file-invoice-dollar text-4xl text-primary mb-4"></i>
              <h3 className="text-3xl font-semibold text-primary text-center">1040 Filing</h3>
              <p className="text-gray-600 text-center mt-2">Professional tax preparation</p>
            </div>
            <div 
              onClick={() => navigate('/insurance-services')}
              className="service-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <i className="fas fa-heartbeat text-4xl text-primary mb-4"></i>
              <h3 className="text-3xl font-semibold text-primary text-center">Health Insurance</h3>
              <p className="text-gray-600 text-center mt-2">Comprehensive health coverage options</p>
            </div>
            <div 
              onClick={() => navigate('/insurance-services')}
              className="service-card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <i className="fas fa-umbrella text-4xl text-primary mb-4"></i>
              <h3 className="text-3xl font-semibold text-primary text-center">Life Insurance</h3>
              <p className="text-gray-600 text-center mt-2">Protect your family's future</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <img 
                src="/centuriesmutual/cmdeer_1_75.jpeg"
                alt="About Us" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-14">
              <h2 className="text-5xl font-extrabold mb-8 text-gray-900">About Us</h2>
              <p className="text-gray-700 text-2xl mb-10 leading-relaxed">
                With over 25 years of experience in wealth management, we've helped countless clients achieve their financial goals through personalized strategies and expert guidance.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-3">$2B+</h4>
                  <p className="text-gray-700 text-xl">Assets Under Management</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-primary mb-3">1,000+</h4>
                  <p className="text-gray-700 text-xl">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/centuriesmutual/cmlogotrans.png"
                  alt="Centuries Mutual Logo" 
                  className="h-12 w-auto"
                />
                <h3 className="brand-text text-3xl font-semibold">Centuries Mutual</h3>
              </div>
              <p className="text-gray-400">Your trusted partner in wealth management.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Company</h4>
              <ul className="space-y-2">
                <li><a href="/documents" className="text-gray-400 hover:text-white transition-colors">Documents</a></li>
                <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/newsletter" className="text-gray-400 hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>6000 Ross Perot</li>
                <li>Dallas, TX 75235</li>
                <li>+1 (888) 324-6642</li>
                <li>support@centuriesmutual.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Centuries Mutual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 