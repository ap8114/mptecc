import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      const targetHash = location.hash || window.location.hash;
      if (targetHash) {
        // Timeout ensures the DOM is ready
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 0);
      }
    };

    scrollToElement(); // Run on component mount

    // Always run on hashchange, even if the same hash
    window.addEventListener("hashchange", scrollToElement);

    return () => {
      window.removeEventListener("hashchange", scrollToElement);
    };
  }, [location]);

  return null;
};

export default ScrollToHashElement;
