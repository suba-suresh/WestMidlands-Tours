import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, X } from 'lucide-react';
import Homepage from './components/Homepage';
import AttractionsGrid from './components/AttractionsGrid';
import BookingModal from './components/BookingModal';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [bookingModal, setBookingModal] = useState({ isOpen: false, type: '', attraction: null });
  const [chatOpen, setChatOpen] = useState(false);

  const handleBooking = (type: string, attraction: any = null) => {
    setBookingModal({ isOpen: true, type, attraction });
  };

  const closeBooking = () => {
    setBookingModal({ isOpen: false, type: '', attraction: null });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">West Midlands Travel</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentView('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'home'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentView('attractions')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentView === 'attractions'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Attractions
              </button>
              <button
                onClick={() => handleBooking('hotel')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Hotels
              </button>
              <button
                onClick={() => handleBooking('restaurant')}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Reserve Table
              </button>
            </div>
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <Homepage onBooking={handleBooking} onViewAttractions={() => setCurrentView('attractions')} />
        )}
        {currentView === 'attractions' && <AttractionsGrid onBooking={handleBooking} />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      {bookingModal.isOpen && (
        <BookingModal
          type={bookingModal.type}
          attraction={bookingModal.attraction}
          onClose={closeBooking}
        />
      )}

      {/* Chat Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
      >
        {chatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* ChatBot */}
      {chatOpen && <ChatBot onClose={() => setChatOpen(false)} onBooking={handleBooking} />}
    </div>
  );
}

export default App;