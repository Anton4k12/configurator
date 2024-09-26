import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const TopNavBar = () => {
  const location = useLocation();

  return (
    <div aria-label="top navbar" className="sticky top-0 z-10 bg-white">
      <hr className="hidden lg:block" />

      <div className="flex h-12 items-center justify-center gap-8">
        <Link
          to={"#exterior"}
          className={cn(
            "text-xs font-medium uppercase tracking-wide",
            location.hash === "#exterior" && "font-bold",
          )}
        >
          Exterior
        </Link>
        <Link
          to={"#interior"}
          className={cn(
            "text-xs font-medium uppercase tracking-wide",
            location.hash === "#interior" && "font-bold",
          )}
        >
          Interior
        </Link>
        <Link
          to={"#packages"}
          className={cn(
            "hidden text-xs font-medium uppercase tracking-wide lg:block",
            location.hash === "#packages" && "font-bold",
          )}
        >
          Packages
        </Link>
        <Link
          to={"#options"}
          className={cn(
            "hidden text-xs font-medium uppercase tracking-wide lg:block",
            location.hash === "#options" && "font-bold",
          )}
        >
          Options
        </Link>
        <Link
          to={"#summary"}
          className={cn(
            "text-xs font-medium uppercase tracking-wide",
            location.hash === "#summary" && "font-bold",
          )}
        >
          Summary
        </Link>
      </div>

      <hr />
    </div>
  );
};
