// hooks/useScrollSpy.js

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook to detect active section based on scroll position,
 * update URL hash, and scroll to a section based on the initial hash.
 *
 * @param {Array} scrollIds - Array of section objects with 'id' and 'name'.
 * @param {number} offset - Offset in pixels to account for fixed headers.
 */
const useScrollSpy = (scrollIds, offset) => {
  // calculates the active id based on the scroll position

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      const hash = window.location.hash.slice(1);

      for (const id of scrollIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (hash !== id) {
              navigate(`#${id}`, { replace: true });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollIds, , offset]);

  // inital scroll to element on first render
  useEffect(() => {
    const scrollToHashSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -offset;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    scrollToHashSection();
  }, []);
};

export default useScrollSpy;
