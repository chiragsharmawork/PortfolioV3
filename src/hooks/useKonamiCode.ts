"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(callback: () => void) {
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((currentKeys) => {
        const newKeys = [...currentKeys, e.key];
        
        // Keep only the last N keys
        if (newKeys.length > KONAMI_CODE.length) {
          newKeys.shift();
        }

        // Check if the current sequence matches
        if (newKeys.join(",") === KONAMI_CODE.join(",")) {
          callback();
          return []; // Reset after success
        }

        return newKeys;
      });
    };

    const handleCustomTrigger = () => {
      callback();
      setKeys([]);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("trigger_konami", handleCustomTrigger);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("trigger_konami", handleCustomTrigger);
    };
  }, [callback]);
}
