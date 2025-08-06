"use client";

import { useEffect } from "react";

export function JucicyAds2({
  divId,
  zoneId,
}: {
  divId: string;
  zoneId: string;
}) {
  useEffect(() => {
    console.log("JucicyAds2", divId, zoneId);
    if (document.getElementById(divId) == null) {
      console.log("divId not found", divId);
      return;
    }
    const script1 = document.createElement("script");
    script1.setAttribute("data-id", "juicyads-native-ads");
    script1.setAttribute("data-ad-zone", `${zoneId}`);
    script1.setAttribute("data-targets", "a");

    script1.type = "text/javascript";
    script1.src = "https://js.juicyads.com/juicyads.native-ads.min.js";

    document.getElementById(divId)?.appendChild(script1);
  }, []);

  return null;
}
