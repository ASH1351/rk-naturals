import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ANNOUNCEMENTS = [
  { text: 'Discover Your Natural Self-Care Ritual — Handcrafted in Small Batches', link: '/shop' },
  { text: 'Complimentary Botanical Delivery on all orders over ₹999', link: '/shop' },
  { text: 'Enjoy 10% off your first ritual with code BOTANICAL10', link: '/shop' },
];

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const current = ANNOUNCEMENTS[currentIndex];

  return (
    <aside aria-label="Store Announcement" className="bg-[#253D2A] text-[#FAF9F4] text-xs py-2 px-4 transition-colors relative z-40 border-b border-[#253D2A]/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden sm:flex items-center space-x-1.5 opacity-80">
          <Sparkles className="w-3.5 h-3.5 text-[#A7D929]" />
          <span className="tracking-widest uppercase font-medium text-[10px]">Pure Botanicals</span>
        </div>

        <div className="flex-1 text-center px-4">
          <Link
            to={current.link}
            className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide hover:text-[#A7D929] transition-colors group"
          >
            <span>{current.text}</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-[#A7D929]" />
          </Link>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-white/60 hover:text-white p-1 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
