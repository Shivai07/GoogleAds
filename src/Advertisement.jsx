import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Sticky Ad Banner Component
 * Appears at bottom of page, can expand/collapse
 * Similar to Google ads on websites
 */
const Advertisement = ({ 
  title = "Revolutionary Design, Personalized AI, Predictive Security",
  sponsoredBy = "Sponsored by: Lenovo",
  buttonText = "LEARN MORE",
  image = "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=400&auto=format&fit=crop",
  onLearnMore = () => {},
  onClose = () => {}
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  const handleLearnMore = () => {
    onLearnMore();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center">
      {/* Toggle Button - Collapse/Expand */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-white border border-b-0 border-gray-200 rounded-t-lg px-4 py-1 shadow-lg transition-colors hover:bg-gray-50 flex items-center justify-center"
        aria-label="Toggle ad banner"
      >
        {isExpanded ? (
          <ChevronDown size={20} className="text-gray-500" />
        ) : (
          <ChevronUp size={20} className="text-gray-500" />
        )}
      </button>

      {/* Main Banner */}
      <div 
        // className={`w-full max-w-5xl bg-white border border-gray-200 shadow-2xl transition-all duration-300 overflow-hidden ${
          className={`w-full max-w-5xl bg-white border border-gray-200 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
          // isExpanded ? 'h-auto opacity-100' : 'h-0 opacity-0'
          isExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative flex flex-col md:flex-row items-stretch md:items-center">
          
          {/* Ad Image/Graphic Container */}
          <div className="w-full md:w-1/4 h-32 md:h-24 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center justify-center overflow-hidden">
            <img 
              src={image}
              className="w-full h-full object-cover opacity-80" 
              alt="Ad Banner"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=400&auto=format&fit=crop';
              }}
            />
          </div>

          {/* Ad Content */}
          <div className="flex-1 p-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                {title}
              </h3>
              <p className="text-sm text-slate-700 italic">
                {sponsoredBy}
              </p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <button 
                onClick={handleLearnMore}
                className="flex-1 md:flex-none border-2 border-blue-600 text-blue-600 font-bold px-8 py-2 rounded uppercase tracking-wider hover:bg-blue-50 transition-colors text-sm"
              >
                {buttonText}
              </button>
              
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="hidden md:block text-gray-400 hover:text-gray-600 p-1 transition-colors"
                aria-label="Close ad banner"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* AdChoices Icon (Top Right) - Optional */}
          <div className="absolute top-1 right-1 opacity-40">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
