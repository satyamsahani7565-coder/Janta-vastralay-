import React from 'react';
import { useStore } from '../context/StoreContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const { storeInfo: STORE_INFO } = useStore();
  
  // Determine dimensions based on size
  const dimensions = {
    sm: 'w-12 h-12 sm:w-14 sm:h-14',
    md: 'w-24 h-24 sm:w-28 sm:h-28',
    lg: 'w-48 h-48 sm:w-64 sm:h-64',
  };

  return (
    <div 
      id="jv-logo-container" 
      className={`${dimensions[size]} ${className} relative select-none rounded-full overflow-hidden border border-gold/15 shadow-[0_4px_15px_rgba(0,0,0,0.4)]`}
    >
      <img
        src="/src/assets/images/janta_logo_new_revised_1780320602896.png"
        alt={`${STORE_INFO.name} Logo`}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
