'use client';

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Add a short delay before starting the fade out
    const timer = setTimeout(() => {
      setFade(true);
      // Wait for the fade out transition to complete before removing from DOM
      setTimeout(() => setShow(false), 500);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#f0f0f0] flex flex-col items-center justify-center min-h-screen transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center animate-in fade-in zoom-in duration-500">
        <Image
          src="/Logo.png"
          alt="NOXUSDYNAMICS Logo"
          width={72}
          height={72}
          className="rounded-md shadow-lg mb-8 animate-pulse"
          priority
        />
        <div className="flex items-center gap-3 text-[#1a1c1c] font-extrabold tracking-widest text-sm uppercase">
          <Loader2 className="w-5 h-5 animate-spin text-[#e2241f]" />
          <span>System Loading...</span>
        </div>
      </div>
    </div>
  );
}
