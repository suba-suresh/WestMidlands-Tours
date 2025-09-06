import React, { useState } from 'react';
import { Send, Bot, User, X } from 'lucide-react';

interface ChatBotProps {
  onClose: () => void;
  onBooking: (type: string, data?: any) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose, onBooking }) => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your West Midlands travel assistant. How can I help you plan your perfect trip today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    'Best budget hotel in Birmingham?',
    'Reserve dinner for 2 tomorrow 7pm',
    'Plan 1-day trip Stratford',
    'Transport options in West Midlands',
    'Top attractions in Coventry',
    'Family-friendly restaurants'
  ];

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): any => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('budget hotel') && message.includes('birmingham')) {
      return {
        type: 'bot',
        content: 'Great choice! For budget-friendly hotels in Birmingham, I recommend:\n\n🏨 **Ibis Birmingham City Centre** - £65/night\n• Central location, clean rooms\n• 4.1★ rating, great value\n\n🏨 **Premier Inn Birmingham** - £89/night\n• Comfortable beds, good breakfast\n• 4.3★ rating\n\nWould you like me to book one of these for you?',
        timestamp: new Date(),
        actions: [
          { label: 'Book Ibis Hotel', action: () => onBooking('hotel') },
          { label: 'Book Premier Inn', action: () => onBooking('hotel') }
        ]
      };
    }

    if (message.includes('reserve') && message.includes('dinner')) {
      return {
        type: 'bot',
        content: 'Perfect! For dinner reservations, I have some excellent options:\n\n🍽️ **The Botanist** (Birmingham)\n• Modern British cuisine, £35/person\n• Beautiful botanical decor\n\n🍛 **Turmeric Gold** (Coventry)\n• Authentic Indian, £25/person\n• Highly rated, budget-friendly\n\nWhich restaurant would you prefer? I can check availability for tomorrow at 7pm.',
        timestamp: new Date(),
        actions: [
          { label: 'Book The Botanist', action: () => onBooking('restaurant') },
          { label: 'Book Turmeric Gold', action: () => onBooking('restaurant') }
        ]
      };
    }

    if (message.includes('1-day') && message.includes('stratford')) {
      return {
        type: 'bot',
        content: 'Excellent choice! Here\'s your perfect Stratford-upon-Avon day itinerary:\n\n🌅 **Morning (9:00 AM)**\n• Shakespeare\'s Birthplace - £15\n• Explore the Tudor house & gardens\n\n🍽️ **Lunch (12:30 PM)**\n• Hathaway Tea Rooms - traditional British\n• Charming historic setting\n\n🎭 **Afternoon (2:30 PM)**\n• Royal Shakespeare Theatre\n• Behind-the-scenes tour or matinee show\n\nWant me to arrange tickets and lunch booking?',
        timestamp: new Date(),
        actions: [
          { label: 'Book Tickets & Lunch', action: () => onBooking('ticket') },
          { label: 'Just Book Tickets', action: () => onBooking('ticket') }
        ]
      };
    }

    if (message.includes('transport')) {
      return {
        type: 'bot',
        content: 'Here are the best transport options in West Midlands:\n\n🚌 **Bus Network**\n• National Express West Midlands\n• Day passes from £4.50\n• Covers all major attractions\n\n🚊 **Trams**\n• Birmingham Metro\n• Connects city center to suburbs\n\n🚗 **Car Rental**\n• Most flexible for multiple locations\n• Parking available at all attractions\n\n🚂 **Trains**\n• Great for Birmingham-Stratford route\n• Regular services every 30 minutes',
        timestamp: new Date()
      };
    }

    if (message.includes('coventry') && message.includes('attraction')) {
      return {
        type: 'bot',
        content: 'Top Coventry attractions for you:\n\n⛪ **Coventry Cathedral** - FREE\n• Modern architecture meets medieval ruins\n• Symbol of reconciliation\n\n🎨 **Herbert Art Gallery** - FREE\n• Contemporary art & local history\n• Great for families\n\n🏛️ **St Mary\'s Guildhall**\n• Medieval building, rich history\n• Beautiful stained glass\n\nBoth free attractions make Coventry very budget-friendly!',
        timestamp: new Date(),
        actions: [
          { label: 'Book Coventry Hotel', action: () => onBooking('hotel') }
        ]
      };
    }

    if (message.includes('family') && message.includes('restaurant')) {
      return {
        type: 'bot',
        content: 'Great family-friendly restaurants in West Midlands:\n\n👨‍👩‍👧‍👦 **Family Favorites**\n\n🍕 **Pizza Express** (Multiple locations)\n• Kids menu, high chairs available\n• £15-20 per person\n\n🥘 **Harvester** (Birmingham)\n• Unlimited salad bar kids love\n• £18-25 per person\n\n🍰 **Hathaway Tea Rooms** (Stratford)\n• Traditional afternoon tea\n• Historic charm, kid-friendly\n\nAll offer excellent children\'s menus!',
        timestamp: new Date(),
        actions: [
          { label: 'Make Reservation', action: () => onBooking('restaurant') }
        ]
      };
    }

    // Default responses
    const defaultResponses = [
      'I\'d be happy to help you with that! Could you tell me more about what you\'re looking for?',
      'That\'s a great question! Are you interested in hotels, restaurants, or attractions?',
      'I can help you find the perfect options in Birmingham, Stratford-upon-Avon, Leamington Spa, or Coventry. What interests you most?',
      'Let me assist you with planning your West Midlands adventure! What would you like to know?'
    ];

    return {
      type: 'bot',
      content: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      timestamp: new Date()
    };
  };

  return (
    <div className="fixed bottom-20 right-6 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-blue-600 rounded-t-2xl text-white">
        <div className="flex items-center">
          <Bot className="h-6 w-6 mr-2" />
          <div>
            <h3 className="font-semibold">Travel Assistant</h3>
            <p className="text-xs opacity-90">Online now</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-white hover:bg-blue-700 rounded-full"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-blue-600' : 'bg-gray-100'}`}>
                {message.type === 'user' ? (
                  <User className="h-4 w-4 text-white" />
                ) : (
                  <Bot className="h-4 w-4 text-gray-600" />
                )}
              </div>
              <div>
                <div className={`p-3 rounded-2xl ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
                {message.actions && (
                  <div className="mt-2 space-y-1">
                    {message.actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={action.action}
                        className="block w-full text-left px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <Bot className="h-4 w-4 text-gray-600" />
              </div>
              <div className="bg-gray-100 p-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replies */}
      {messages.length === 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
          <div className="space-y-1">
            {quickReplies.slice(0, 3).map((reply, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(reply)}
                className="block w-full text-left px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
            placeholder="Ask about hotels, restaurants, attractions..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={() => handleSendMessage(inputMessage)}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;