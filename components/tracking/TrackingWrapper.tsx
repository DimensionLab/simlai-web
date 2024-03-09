"use client";

import { useEffect } from "react";

export default function TrackingWrapper() {
  useEffect(() => {
    // @ts-ignore
    window._mfq = window._mfq || [];
    (function() {
      var mf = document.createElement("script");
      mf.type = "text/javascript"; mf.defer = true;
      mf.src = process.env.NEXT_PUBLIC_MOUSEFLOW_URL as string;
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  }, [])

  return null;
}