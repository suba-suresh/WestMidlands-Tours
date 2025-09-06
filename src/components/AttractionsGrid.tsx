import React, { useState } from 'react';
import { MapPin, Star, Camera, Clock, KeyRound as Pound } from 'lucide-react';

interface AttractionsGridProps {
  onBooking: (type: string, attraction: any) => void;
}

const AttractionsGrid: React.FC<AttractionsGridProps> = ({ onBooking }) => {
  const [filter, setFilter] = useState('all');

  const attractions = [
    {
      id: 1,
      name: "Birmingham Museum & Art Gallery",
      location: "Birmingham",
      category: "museum",
      rating: 4.6,
      price: "Free",
      budget: true,
      description: "Discover world-class art collections and Birmingham's rich industrial heritage",
      images: [
        "https://museumsandheritage.com/wp-content/uploads/2020/09/BMAG-industrial-gallery-view-c-Birmingham-Museum-and-Art-Gallery.jpg",
        "https://stclientsuks.blob.core.windows.net/media-cache-prod/2/a/c/b/2/8/2acb287c0023406bc5fa281baedb8fd6d7913a40.webp"
      ],
      hours: "10:00 - 17:00",
      highlights: ["Pre-Raphaelite paintings", "Ancient Egyptian artifacts", "Local history exhibits"]
    },
    {
      id: 2,
      name: "Cadbury World",
      location: "Birmingham",
      category: "attraction",
      rating: 4.7,
      price: "£18",
      budget: true,
      description: "Interactive chocolate experience showcasing Cadbury's sweet history",
      images: [
        "https://berkshiremummies.co.uk/wp-content/uploads/2023/10/Cadbury-World-1-e1700570117131.jpg",
        "https://live.staticflickr.com/706/22698802806_eb3b18b162_b.jpg"
      ],
      hours: "10:00 - 16:00",
      highlights: ["Chocolate making demonstrations", "Free samples", "4D cinema experience"]
    },
    {
      id: 3,
      name: "Shakespeare's Birthplace",
      location: "Stratford-upon-Avon",
      category: "heritage",
      rating: 4.8,
      price: "£15",
      budget: true,
      description: "Step into the world of William Shakespeare at his childhood home",
      images: [
        "https://www.londontoolkit.com/v1/Images/stratford-shakespeare-birthplace.png",
        "https://upload.wikimedia.org/wikipedia/commons/5/5b/William_Shakespeare_statue_on_Henley_Street%2C_Stratford-upon-Avon_%2850779779732%29.jpg"
      ],
      hours: "09:00 - 17:00",
      highlights: ["Tudor architecture", "Original manuscripts", "Beautiful gardens"]
    },
    {
      id: 4,
      name: "Royal Shakespeare Theatre",
      location: "Stratford-upon-Avon",
      category: "theatre",
      rating: 4.9,
      price: "£25",
      budget: false,
      description: "World-renowned theatre hosting the finest Shakespeare performances",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Royal_Shakespeare_Theatre_Stratford_upon_Avon_%28crop%29.jpg",
        "https://www.burohappold.com/wp-content/uploads/2017/03/RST_01s_RSC-and-Peter-Cook.jpg"
      ],
      hours: "Show times vary",
      highlights: ["World-class performances", "Riverside location", "Behind-scenes tours"]
    },
    {
      id: 5,
      name: "Warwick Castle",
      location: "Near Leamington Spa",
      category: "castle",
      rating: 4.9,
      price: "£25",
      budget: false,
      description: "Medieval castle with 1,000 years of history and spectacular shows",
      images: [
        "https://www.droneadventure.co.uk/wp-content/uploads/2024/05/war4-1600x829.jpg",
        "https://www.visitwarwick.co.uk/wp-content/uploads/2023/03/Aeiral.jpg"
      ],
      hours: "10:00 - 18:00",
      highlights: ["Medieval tournaments", "Castle dungeons", "Falconry displays"]
    },
    {
      id: 6,
      name: "Coventry Cathedral",
      location: "Coventry",
      category: "cathedral",
      rating: 4.7,
      price: "Free",
      budget: true,
      description: "Modern cathedral beside medieval ruins, symbol of reconciliation",
      images: [
        "https://warksbells.co.uk/wp-content/uploads/2021/07/cathedral.jpg",
        "https://www.stace.co.uk/wp-content/uploads/2019/11/Coventry-Cathedral-Image-1-820x380.jpg"
      ],
      hours: "09:00 - 17:00",
      highlights: ["Modern architecture", "Historic ruins", "Stained glass windows"]
    },
    {
      id: 7,
      name: "Herbert Art Gallery",
      location: "Coventry",
      category: "gallery",
      rating: 4.5,
      price: "Free",
      budget: true,
      description: "Contemporary art gallery with diverse exhibitions and local history",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/fc/39/5b/university-square-entrance.jpg?w=1200&h=-1&s=1",
        "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,f_jpg,h_822,q_75,w_1220/https://entiretydmsmedia.newmindmedia.com/wsimgs/100_1__211085690.png"
      ],
      hours: "10:00 - 16:00",
      highlights: ["Contemporary art", "Local history", "Interactive exhibits"]
    },
    {
      id: 8,
      name: "Royal Pump Rooms",
      location: "Leamington Spa",
      category: "museum",
      rating: 4.4,
      price: "£6",
      budget: true,
      description: "Elegant Regency building housing art gallery and assembly rooms",
      images: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/58/f4/59/royal-pump-rooms.jpg?w=900&h=500&s=1",
        "https://lh5.googleusercontent.com/p/AF1QipPTdu8krL88-xhVaunUgE_1ttXAqvYMw08beZMy"
      ],
      hours: "10:30 - 17:00",
      highlights: ["Regency architecture", "Local art", "Historic spa heritage"]
    },
    {
      id: 9,
      name: "Black Country Living Museum",
      location: "Dudley",
      category: "museum",
      rating: 4.8,
      price: "£20",
      budget: false,
      description: "Step back in time to experience life in industrial Britain",
      images: [
        "https://whattheredheadsaid.com/wp-content/uploads/2021/10/IMG_7093.jpg",
        "https://www.eastonsholidays.co.uk/images/itinerary/blackcountrylivingmuseumimagebyphilsangwell.jpg"
      ],
      hours: "10:00 - 17:00",
      highlights: ["Victorian village", "Historic demonstrations", "Underground coal mine"]
    },
    {
      id: 10,
      name: "National SEA LIFE Centre",
      location: "Birmingham",
      category: "aquarium",
      rating: 4.6,
      price: "£22",
      budget: false,
      description: "Underwater adventure with sharks, rays, and tropical marine life",
      images: [
        "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,f_jpg,h_822,q_75,w_1220/https://entiretydmsmedia.newmindmedia.com/wsimgs/sealife_centre_1951480762.jpg",
        "https://www.visitsealife.com//birmingham/media/db3j2bbl/rescue-facility.jpg"
      ],
      hours: "10:00 - 18:00",
      highlights: ["360° ocean tunnel", "Shark encounters", "Interactive touch pools"]
    }
  ];

  const filteredAttractions = filter === 'all' 
    ? attractions 
    : filter === 'budget'
    ? attractions.filter(a => a.budget)
    : attractions.filter(a => a.category === filter);

  const categories = [
    { value: 'all', label: 'All Attractions' },
    { value: 'budget', label: 'Budget Friendly' },
    { value: 'museum', label: 'Museums' },
    { value: 'heritage', label: 'Heritage' },
    { value: 'castle', label: 'Castles' },
    { value: 'theatre', label: 'Theatre' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top 10 West Midlands Attractions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best attractions across Birmingham, Stratford-upon-Avon, Leamington Spa, and Coventry
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((attraction) => (
            <div key={attraction.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image Gallery */}
              <div className="relative h-64">
                <div className="flex h-full">
                  <div className="w-1/2 h-full">
                    <img
                      src={attraction.images[0]}
                      alt={`${attraction.name} - View 1`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 h-full">
                    <img
                      src={attraction.images[1]}
                      alt={`${attraction.name} - View 2`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Price Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${
                  attraction.budget 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {attraction.price}
                  {attraction.budget && <span className="ml-1">💰</span>}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">{attraction.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-gray-600">{attraction.location}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {attraction.description}
                </p>

                {/* Hours */}
                <div className="flex items-center mb-4">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">{attraction.hours}</span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.slice(0, 2).map((highlight, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => onBooking('ticket', attraction)}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    Book Tickets
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8">Book your accommodation and dining to complete your West Midlands adventure</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onBooking('hotel')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Hotels
            </button>
            <button
              onClick={() => onBooking('restaurant')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              Reserve Restaurants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionsGrid;