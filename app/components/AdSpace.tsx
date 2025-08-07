'use client';

import React from 'react';

interface AdSpaceProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export function AdSpace({ children, className = '', label = 'ADVERTISEMENT' }: AdSpaceProps) {
  return (
    <div className={`flex flex-col items-center justify-center my-4 ${className}`}>
      <span className="text-[10px] text-slate-gray uppercase tracking-widest mb-1 font-bold opacity-70">
        {label}
      </span>
      <div className="bg-midnight-blue/40 rounded-sm border border-slate-gray/20 overflow-hidden flex items-center justify-center min-h-[50px] min-w-[300px]">
        {children}
      </div>
    </div>
  );
}
