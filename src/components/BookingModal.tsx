import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Clock, CreditCard, Shield } from 'lucide-react';

interface BookingModalProps {
  type: 'hotel' | 'restaurant' | 'ticket';
  attraction?: any;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ type, attraction, onClose }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const hotelOptions = [
    { name: "Premier Inn Birmingham City Centre", price: 89, rating: 4.3, budget: true, image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
    { name: "Ibis Birmingham City Centre", price: 65, rating: 4.1, budget: true, image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg" },
    { name: "The Stratford Park Hotel", price: 120, rating: 4.6, budget: false, image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg" },
    { name: "Holiday Inn Coventry M6 J2", price: 95, rating: 4.4, budget: true, image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
  ];

  const restaurantOptions = [
    { name: "The Botanist Birmingham", cuisine: "British", price: 35, rating: 4.5, budget: false, image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg" },
    { name: "Turmeric Gold Coventry", cuisine: "Indian", price: 25, rating: 4.6, budget: true, image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" },
    { name: "Hathaway Tea Rooms", cuisine: "Traditional", price: 18, rating: 4.4, budget: true, image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg" },
    { name: "Opus Restaurant Birmingham", cuisine: "Modern European", price: 45, rating: 4.7, budget: false, image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg" },
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep1 = () => {
    if (type === 'hotel') {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Search Hotels</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date</label>
              <input
                type="date"
                value={bookingData.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date</label>
              <input
                type="date"
                value={bookingData.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
              <select
                value={bookingData.guests}
                onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
              <select
                value={bookingData.rooms}
                onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {[1,2,3,4].map(n => (
                  <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Available Hotels</h4>
            {hotelOptions.map((hotel, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                <div className="flex items-center space-x-4">
                  <img src={hotel.image} alt={hotel.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">{hotel.name}</h5>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600 ml-1">{hotel.rating}</span>
                      </div>
                      {hotel.budget && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Budget Friendly</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">£{hotel.price}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (type === 'restaurant') {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Reserve Table</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
              <select
                value={bookingData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select time</option>
                {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Party Size</label>
            <select
              value={bookingData.guests}
              onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {[1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Available Restaurants</h4>
            {restaurantOptions.map((restaurant, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors">
                <div className="flex items-center space-x-4">
                  <img src={restaurant.image} alt={restaurant.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900">{restaurant.name}</h5>
                    <p className="text-sm text-gray-600">{restaurant.cuisine} Cuisine</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600 ml-1">{restaurant.rating}</span>
                      {restaurant.budget && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Budget Friendly</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">£{restaurant.price}</div>
                    <div className="text-sm text-gray-600">avg per person</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Book Tickets - {attraction?.name}</h3>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-4">
              <img src={attraction?.images[0]} alt={attraction?.name} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h4 className="font-semibold text-gray-900">{attraction?.name}</h4>
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {attraction?.location}
                </p>
                <p className="text-lg font-bold text-blue-600 mt-1">{attraction?.price}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Visit Date</label>
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Tickets</label>
              <select
                value={bookingData.guests}
                onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n}>{n} Ticket{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={bookingData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            value={bookingData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Payment Details</h3>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-green-600 mr-2" />
          <span className="text-sm text-green-800">Your payment is secured with SSL encryption</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            value={bookingData.cardNumber}
            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              value={bookingData.expiryDate}
              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              value={bookingData.cvv}
              onChange={(e) => handleInputChange('cvv', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="123"
            />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Booking Summary</h4>
        <div className="space-y-2 text-sm">
          {type === 'hotel' && (
            <>
              <div className="flex justify-between">
                <span>Hotel Room (2 nights)</span>
                <span>£178.00</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>£12.00</span>
              </div>
            </>
          )}
          {type === 'restaurant' && (
            <>
              <div className="flex justify-between">
                <span>Table for {bookingData.guests}</span>
                <span>£{bookingData.guests * 25}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Booking Fee</span>
                <span>£2.50</span>
              </div>
            </>
          )}
          {type === 'ticket' && (
            <>
              <div className="flex justify-between">
                <span>{bookingData.guests} x {attraction?.name} tickets</span>
                <span>£{bookingData.guests * parseInt(attraction?.price.replace('£', '') || '15')}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Booking Fee</span>
                <span>£1.50</span>
              </div>
            </>
          )}
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>£{type === 'hotel' ? '190.00' : type === 'restaurant' ? (bookingData.guests * 25 + 2.5).toFixed(2) : (bookingData.guests * parseInt(attraction?.price.replace('£', '') || '15') + 1.5).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {type === 'hotel' ? 'Book Hotel' : type === 'restaurant' ? 'Reserve Table' : 'Book Tickets'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Progress Steps */}
          <div className="flex items-center mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                <span className={`ml-2 text-sm ${step >= stepNumber ? 'text-blue-600' : 'text-gray-500'}`}>
                  {stepNumber === 1 ? 'Search' : stepNumber === 2 ? 'Details' : 'Payment'}
                </span>
                {stepNumber < 3 && <div className="mx-4 h-px bg-gray-300 flex-1" />}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          {/* Actions */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : onClose()}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            <button
              onClick={() => step < 3 ? setStep(step + 1) : alert('Booking confirmed!')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {step === 3 ? 'Confirm Booking' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;