// hooks/useScrollSpy.js

import { useEffect, useState } from "react";

/**
 * Custom hook to detect active section based on scroll position,
 * update URL hash, and scroll to a section based on the initial hash.
 *
 * @param {number} offset - Offset in pixels to account for fixed headers.
 */
const useScrollSpy = (offset = 56) => {
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
  }, [offset]);
};

export default useScrollSpy;
