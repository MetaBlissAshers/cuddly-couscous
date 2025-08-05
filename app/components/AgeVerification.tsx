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
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-95"
        style={{
          backgroundImage: "url(/age-verification-background.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-sm rounded bg-black p-6 text-center opacity-75 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Age Verification</h2>
          <p className="mb-6">
            This site contains adult content. Are you 18 years or older?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleYes}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
