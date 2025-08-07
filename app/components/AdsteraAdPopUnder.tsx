"use client";

import { useEffect } from "react";

export function AdsteraAdPopUnder({ divId }: { divId: string }) {
  useEffect(() => {
    console.log("AdsteraAdPopUnder", divId);
    if (document.getElementById(divId) == null) {
      console.log("divId not found", divId);
      return;
    }
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src =
      "//pl27366197.profitableratecpm.com/d0/1c/86/d01c86a25c2c10dd60b4084a64908157.js";
    document.getElementById(divId)?.appendChild(script1);
  }, []);

  return null;
}
