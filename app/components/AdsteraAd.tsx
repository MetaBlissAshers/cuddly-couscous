"use client";

import { useEffect } from "react";

export function AdsteraAd({
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
    console.log("AdsteraAd", divId, width, height, zoneId);
    if (document.getElementById(divId) == null) {
      console.log("divId not found", divId);
      return;
    }
    const script1 = document.createElement("script");
    script1.text = `
    atOptions = {
		'key' : '${zoneId}',
		'format' : 'iframe',
		'height' : ${height},
		'width' : ${width},
		'params' : {}
	};`;
    document.getElementById(divId)?.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = `//www.highperformanceformat.com/${zoneId}/invoke.js`;
    document.getElementById(divId)?.appendChild(script2);
  }, []);

  return null;
}
