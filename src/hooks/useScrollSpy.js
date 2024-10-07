// hooks/useScrollSpy.js

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to detect active section based on scroll position,
 * update URL hash, and scroll to a section based on the initial hash.
 *
 * @param {Array} ids - Array of section objects with 'id' and 'name'.
 * @param {number} offset - Offset in pixels to account for fixed headers.
 * @returns {string} - The ID of the currently active section.
 */
const useScrollSpy = (ids, offset = 56) => {
  const { hash } = useLocation();

  const [activeId, setActiveId] = useState(() => {
    const initialId = hash ? ids.find((id) => `#${id}` === hash) : ids[0];
    return initialId || "";
  });

  // sync url hash with active id
  useEffect(() => {
    if (activeId) {
      window.history.replaceState(null, "", `#${activeId}`);
    }
  }, [activeId]);

  // calculates the active id based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeId !== id) {
              setActiveId(id);
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
  }, [ids, activeId, offset]);

  // inital scroll to element on first render
  useEffect(() => {
    const scrollToHashSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -offset + 1;
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    scrollToHashSection();
  }, [offset]);

  return activeId;
};

export default useScrollSpy;
