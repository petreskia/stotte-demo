import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768; // Or whatever breakpoint your design uses (e.g., Tailwind's 'md')

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check and update mobile state
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Set initial state
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return isMobile;
}
