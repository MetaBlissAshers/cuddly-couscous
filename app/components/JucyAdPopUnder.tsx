"use client";

import { useEffect } from "react";

export function JucyAdPopUnder({ divId }: { divId: string }) {
  useEffect(() => {
    console.log("JucyAdPopUnder", divId);
    if (document.getElementById(divId) == null) {
      console.log("divId not found", divId);
      return;
    }
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src =
      "https://js.juicyads.com/jp.php?c=4464w203s224u4r2o2f4z2b424&u=https%3A%2F%2Fwww.juicyads.rocks";
    document.getElementById(divId)?.appendChild(script1);
  }, []);

  return null;
}
