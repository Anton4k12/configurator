import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // Store the current value in ref
  }, [value]); // Update the ref when value changes

  return ref.current; // Return the previous value
}

export { usePrevious };
