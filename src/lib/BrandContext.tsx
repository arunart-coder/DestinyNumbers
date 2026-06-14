import React, { createContext, useContext, useState, useEffect } from 'react';
import { BRAND_DATA as INITIAL_BRAND_DATA } from './constants';

interface BrandContextType {
  brandData: typeof INITIAL_BRAND_DATA;
  updateProfilePhoto: (url: string) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ children }: { children: React.ReactNode }) {
  const [brandData, setBrandData] = useState(INITIAL_BRAND_DATA);

  useEffect(() => {
    const saved = localStorage.getItem('arun_brand_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.profilePhoto && parsed.profilePhoto.includes('unsplash')) {
          parsed.profilePhoto = INITIAL_BRAND_DATA.profilePhoto;
        }
        setBrandData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Failed to parse saved brand data", e);
      }
    }
  }, []);

  const updateProfilePhoto = (url: string) => {
    const newData = { ...brandData, profilePhoto: url };
    setBrandData(newData);
    localStorage.setItem('arun_brand_data', JSON.stringify({ profilePhoto: url }));
  };

  return (
    <BrandContext.Provider value={{ brandData, updateProfilePhoto }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}
