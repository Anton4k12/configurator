import { cn } from "@/lib/utils";
import * as React from "react";
const ArrowUturnIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
    className={cn("size-6", props.className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
    />
  </svg>
);
export default ArrowUturnIcon;
