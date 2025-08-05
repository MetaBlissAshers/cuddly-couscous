"use client";

import { useEffect } from "react";

export function JSAdd({
  zoneId,
  className,
  rePlayInMS,
}: {
  zoneId: string;
  className: string;
  rePlayInMS: number;
}) {
  useEffect(() => {
    // const verified = localStorage.getItem("ageVerified");
    // if (verified !== "true") {
    //   return;
    // }

    const addedAt = localStorage.getItem(`JSAddAddedAt-${zoneId}`);
    if (addedAt) {
      const timeSinceAdded = Date.now() - parseInt(addedAt);
      if (timeSinceAdded < rePlayInMS) {
        return;
      }
    }
    localStorage.setItem(`JSAddAddedAt-${zoneId}`, Date.now().toString());

    console.log("JSAdd added", zoneId, className);
    const script1 = document.createElement("script");
    script1.async = true;
    script1.type = "application/javascript";
    script1.src = "https://a.magsrv.com/ad-provider.js";
    document.body.appendChild(script1);

    const ins = document.createElement("ins");
    ins.className = className;
    ins.setAttribute("data-zoneid", zoneId);
    document.body.appendChild(ins);

    const script2 = document.createElement("script");
    script2.text = `(AdProvider = window.AdProvider || []).push({"serve": {}});`;
    document.body.appendChild(script2);
  }, [zoneId, className, rePlayInMS]);

  return null;
}
