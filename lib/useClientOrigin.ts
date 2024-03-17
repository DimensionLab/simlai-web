"use client";
import { useEffect, useState } from "react";

export default function useClientOrigin() {
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    if (window) {
      setOrigin(window.location.origin);
    }
  }, []);
  return origin;
}