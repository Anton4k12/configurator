import { cn } from "@/lib/utils";
import * as React from "react";
const MinusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
    className={cn("size-6", props.className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);
export { MinusIcon };
