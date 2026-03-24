import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Discover = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const discoverItems = [
    {
      id: 1,
      title: 'Android phones',
      description: 'Explore a wide range of Android phones with cutting-edge technology'
    },
    {
      id: 2,
      title: 'Resume download support',
      description: 'Get support for downloading and managing your resumes easily'
    },
    {
      id: 3,
      title: 'IDM extension fix',
      description: 'Resolve common IDM extension issues with our comprehensive guide'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="bg-linear-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Discover Items Container */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          {/* Header Inside Container */}
          <div className="px-4 py-5 sm:px-8 sm:py-8 border-b border-gray-200">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Discover more
            </h1>
            <p className="text-gray-600">Explore our latest features and offerings</p>
          </div>

          {/* Discover Items */}
          {discoverItems.map((item, index) => (
            <div
              key={item.id}
              className={`border-b border-gray-200 last:border-b-0`}
            >
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full px-4 py-5 sm:px-8 sm:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  {expandedItem === item.id && (
                    <p className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
                <ChevronRight
                  className={`w-6 h-6 text-gray-400 group-hover:text-blue-600 shrink-0 ml-4 transition-all duration-300 ${
                    expandedItem === item.id ? 'rotate-90' : ''
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;