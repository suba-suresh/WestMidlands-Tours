import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">West Midlands Travel</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for exploring the heart of England. Discover Birmingham, Stratford-upon-Avon, Leamington Spa, and Coventry with ease.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Top Attractions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hotel Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Restaurant Reservations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Special Offers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Birmingham</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Stratford-upon-Avon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Leamington Spa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Coventry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warwick</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dudley</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+44 121 555 0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@westmidlandstravel.co.uk</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div className="text-gray-300">
                  <p>West Midlands Travel</p>
                  <p>Birmingham City Centre</p>
                  <p>Birmingham B1 2AA</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-600 rounded-lg">
              <h4 className="font-semibold mb-2">24/7 Travel Support</h4>
              <p className="text-sm text-blue-100">
                Chat with our AI assistant anytime for instant help with bookings and recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 West Midlands Travel. All rights reserved. | Privacy Policy | Terms of Service | Cookie Policy
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Secure Booking</span>
              <span>•</span>
              <span>Best Price Guarantee</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;