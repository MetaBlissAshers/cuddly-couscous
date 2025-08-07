"use client";

import { useState, useEffect } from "react";

interface Props {
  // Keep bypassForCrawlers but ignore it
  bypassForCrawlers?: boolean;
}

export default function AgeVerification(
  {
    // bypassForCrawlers = false,
  }: Props,
) {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    setIsVerified(verified === "true");
  }, []);

  // Remove if (bypassForCrawlers) { return <>{children}</>; }

  const handleYes = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVerified(true);
  };

  const handleNo = () => {
    alert("You must be 18 years or older to access this site.");
  };

  return (
    <div className={isVerified ? "hidden" : ""}>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90 backdrop-blur-md">
        <div className="relative mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-[#0f0f0f] p-8 text-center shadow-2xl ring-1 ring-white/10">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-red-500/10 p-4">
              <svg
                className="h-12 w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-white">
            Age Verification
          </h2>
          
          <p className="mb-8 text-lg text-gray-400">
            This website contains age-restricted content. You must be 18 years or older to enter.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={handleYes}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <span className="relative z-10">I am 18 or older</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
            
            <button
              onClick={handleNo}
              className="rounded-full border border-gray-700 bg-transparent px-8 py-3 text-lg font-semibold text-gray-400 transition-all duration-300 hover:border-gray-500 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Exit
            </button>
          </div>
          
          <p className="mt-6 text-xs text-gray-600">
            By entering, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}
