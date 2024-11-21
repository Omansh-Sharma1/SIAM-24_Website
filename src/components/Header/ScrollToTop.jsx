import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Disable smooth scroll globally (if any)
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Jump to the top instantly
    window.scrollTo(0, 0);

    // Restore default smooth scroll behavior if needed
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [location]);

  return null;
};

export default ScrollToTop;
