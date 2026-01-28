import { useState, useEffect } from "react";

export const useLocalStorage = (
  key: string,
  initialValue: string | null = null
): [string, (value: string) => void] => {
  const [storedValue, setStoredValue] = useState<string>(initialValue || "");

  // Get from local storage by key
  useEffect(() => {
    try {
      const item = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
      if (item) {
        setStoredValue(item);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
  }, [key]);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, value);
      }
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  return [storedValue, setValue];
};
