"use client";

import { useEffect } from "react";

export function JucicyAds({
  divId,
  width,
  height,
  zoneId,
}: {
  divId: string;
  width: string;
  height: string;
  zoneId: string;
}) {
  useEffect(() => {
    console.log("LocationLessAds2", divId, width, height, zoneId);
    if (document.getElementById(divId) == null) {
      console.log("divId not found", divId);
      return;
    }
    const script1 = document.createElement("script");
    script1.setAttribute("data-cfasync", "false");
    script1.async = true;
    script1.type = "text/javascript";
    script1.src = "https://poweredby.jads.co/js/jads.js";

    document.getElementById(divId)?.appendChild(script1);

    const ins = document.createElement("ins");
    ins.id = zoneId;
    ins.setAttribute("data-width", width);
    ins.setAttribute("data-height", height);
    document.getElementById(divId)?.appendChild(ins);

    const script2 = document.createElement("script");
    script2.setAttribute("data-cfasync", "false");
    script2.type = "text/javascript";
    script2.async = true;

    script2.text = `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':${zoneId}});`;
    document.getElementById(divId)?.appendChild(script2);
  }, []);

  return null;
}
