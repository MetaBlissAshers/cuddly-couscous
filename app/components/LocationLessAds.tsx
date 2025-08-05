"use client";

import { useEffect } from "react";

export function LocationLessAds() {
  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");
    if (verified !== "true") {
      return;
    }

    if (window.innerWidth >= 768) {
      // desktop ads
      // const script1 = document.createElement("script");
      // script1.async = true;
      // script1.type = "application/javascript";
      // script1.src = "https://a.magsrv.com/ad-provider.js";
      // document.body.appendChild(script1);
      // const ins = document.createElement("ins");
      // ins.className = "eas6a97888e17";
      // ins.setAttribute("data-zoneid", "5683860");
      // document.body.appendChild(ins);
      // const script2 = document.createElement("script");
      // script2.text = `(AdProvider = window.AdProvider || []).push({"serve": {}});`;
      // document.body.appendChild(script2);
    } else {
      // mobile ads
      const script1 = document.createElement("script");
      script1.async = true;
      script1.type = "application/javascript";
      script1.src = "https://a.magsrv.com/ad-provider.js";
      document.body.appendChild(script1);

      const ins = document.createElement("ins");
      ins.className = "eas6a97888e14";
      ins.setAttribute("data-zoneid", "5683848");
      document.body.appendChild(ins);

      const script2 = document.createElement("script");
      script2.text = `(AdProvider = window.AdProvider || []).push({"serve": {}});`;
      document.body.appendChild(script2);
    }
  }, []);

  return null;
}
