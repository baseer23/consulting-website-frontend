// SmoothScroll.js
import React, { useEffect } from 'react';

function SmoothScroll({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("id");
        const link = document.querySelector(`a[href="#${id}"]`);
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          link?.classList.add("active");
        } else {
          link?.classList.remove("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>{children}</div>;
}

export default SmoothScroll;
